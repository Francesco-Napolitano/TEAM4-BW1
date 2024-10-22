// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

// Creo questa funzione perché scrivere tutte le volte 'console.log()' è una palla!
// uso la lettera 'w', che sta anche per 'write', perché è poco usata negli esercizi
const w = (param, param1) => {
  param1 ? console.log(`${param}`, param1) : console.log(param)
}

// Funzione che ripulisce l'innerHTML da eventuali caratteri speciali che possono far casino
function escapeHTML(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// ***********************************************************************
//
// FUNZIONE CHE CALCOLA I RISULTATI DEL TEST E COSTRUICE
// LA TABELLA DEI RISULTATI
//
// ***********************************************************************
const calculateResultsAndBuildTable = () => {
  // Esegue il loop su tutto l'array delle domande e risposte
  // calcolando i risultati e creando la tabella delle singole risposte

  // Setta gli header della tabella dei risultati
  let resultsHTML = `
        <tr>
            <th>
                Domanda
            </th>
            <th>
                Risposte Corrette
            </th>
            <th>
                Risposte Date
            </th>
        </tr > `

  questionsAndAnswers.forEach((question, qIndex) => {
    w('qIndex: ', qIndex)
    w('question: ', question)

    // Valorizzo la variabile perché mi servirà all'interno del loop for delle risposte
    let currentQuestion = question

    // Incrementa il numero totale delle domande
    totalQuestions++

    // Setta l'esito della domanda attuanle
    let currentIsCorrect = false

    // Incrementa il numero delle risposte corrette
    if (question.questionScore === 1) {
      correctAnswers++
      currentIsCorrect = true
    } else {
      // Incrementa il numero delle risposte sbagliate
      wrongAnswers++
      currentIsCorrect = false
    }

    // Aumenta il punteggio totale delle risposte corrette
    totalScore += question.questionScore

    // Costruisce la tabella delle risposte e inserisce il numero della domanda
    // insieme al testo della domanda
    resultsHTML += `
            <tr class="thQuestionText ${
              currentIsCorrect === true ? 'trIsCorrect' : 'trIsIncorrect' // Inserisce la classe corrispondente all'esito delle risposte
            }">
            <td colspan="3">${escapeHTML(question.questionText)}</td>
            </tr>
            <tr>
            `
    // Costruisce la tabella delle risposte inserendo:
    //      - Il testo della risposta
    //      - Un cerchio verde se la risposta è corretta
    //      - una X rossa se l'utente ha sbagliato o un baffo verde se l'utente ha rispoisto giusto,
    //        oppure nulla se l'utente non ha dato quella risposta
    question.answers.forEach((answer, aIndex) => {
      // Crea il testo della domanda
      resultsHTML += `<td>${escapeHTML(answer.text)}</td>`
      // inserisce sel la risposta è corretta lo indica con un cerchio
      if (answer.isCorrect) {
        resultsHTML += `<td><span class="cyan"><i class="fa-solid fa-circle"></i></span></td>`
      } else {
        resultsHTML += '<td></td>'
      }

      // Se la risposta è corretta e l'utente ha risposto correttamente allora inserisce un baffo
      // altrimenti una croce, oppure nulla se l'utente non ha dato quella risposta
      if (currentQuestion.userAnswers[aIndex] === answer.isCorrect) {
        resultsHTML += `<td><span class="cyan"><i class="fa-solid fa-check"></i></span></td>`
      } else if (currentQuestion.userAnswers[aIndex] !== answer.isCorrect) {
        resultsHTML += `<td><span class="fucsiaColor"><i class="fa-solid fa-xmark"></i></span></td>`
      } else if (currentQuestion.userAnswers[aIndex]) {
        resultsHTML += `<td><span class="fucsiaColor"><i class="fa-solid fa-xmark"></i></span></td>`
      } else {
        resultsHTML += '<td></td>'
      }

      // Chiude la riga
      resultsHTML += '</tr>'
    }) // chiude question
  }) // chiude questionsAndAnswers

  lastSection.innerHTML = `<table>${resultsHTML}</table>`
}

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//
let correctAnswers = 0
let wrongAnswers = 0
let totalQuestions = 0
let totalScore = 0
let percentageCorrect = 0
let percentageWrong = 0
let resultsHTML = ''

// legge dal localStorage i risultati della questionario
const questionsAndAnswers = JSON.parse(
  localStorage.getItem('questionsAndAnswers')
)

// Individia il DIV messaggio
const message = document.getElementById('divMessage')

//individua la sezione lastSection
const lastSection = document.getElementById('lastSection')

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

// w('questionsAndAnswers: ', questionsAndAnswers)

addEventListener.onload = calculateResultsAndBuildTable()
