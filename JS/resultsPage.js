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

  questionsAndAnswers.forEach((question) => {
    w('calculateResultsAndBuildTable() question: ', question)

    // Valorizzo la variabile perché mi servirà all'interno del loop for delle risposte
    let currentQuestion = question

    // Incrementa il numero totale delle domande
    totalQuestions++

    // Incrementa il numero delle risposte corrette
    if (question.questionScore === 1) {
      correctAnswers++
    } else {
      // Incrementa il numero delle risposte sbagliate
      wrongAnswers++
    }

    // Aumenta il punteggio totale delle risposte corrette
    totalScore += question.questionScore

    // Costruisce la tabella delle risposte e inserisce il numero della domanda
    // insieme al testo della domanda
    resultsHTML += `
            <tr class="thQuestionText ${
              question.questionScore === 1 ? 'trIsCorrect' : 'trIsIncorrect' // Inserisce la classe corrispondente all'esito delle risposte
            }">
            <td colspan="3">${escapeHTML(
              question.questionText.replace(/\*\*/g, '')
            )}</td>
            </tr>
            <tr>
            `
    // Costruisce la tabella delle risposte inserendo:
    //      - Il testo della risposta
    //      - Un cerchio verde se la risposta è corretta
    //      - una X rossa se l'utente ha sbagliato o un baffo verde se l'utente ha rispoisto giusto,
    //        oppure nulla se l'utente non ha dato quella risposta
    question.answers.forEach((answer, aIndex) => {
      //
      // Setta la variabile che indica la correttezza della risposta data all'opzopme presa in esame ora
      let currentUserAnswerIsCorrect = false

      // TABELLA RISULTATI
      // +---------------------+-----------------+-----------------+
      // |                     |      Data       |     NON Data    |
      // +---------------------+-----------------+-----------------+
      // | Risp. Giusta        |      true       |      null       |
      // +---------------------+-----------------+-----------------+
      // | Risp. NON Giusta    |      false      |      null       |
      // +---------------------+-----------------+-----------------+
      //
      // E Vaffanculo al tempo che ho perso a fare a caso!!!
      //

      if (
        answer.isCorrect === true &&
        currentQuestion.userAnswers[aIndex] === true
      ) {
        currentUserAnswerIsCorrect = true
      } else if (
        answer.isCorrect === true &&
        currentQuestion.userAnswers[aIndex] === false
      ) {
        currentUserAnswerIsCorrect = null
      } else if (
        answer.isCorrect === false &&
        currentQuestion.userAnswers[aIndex] === true
      ) {
        currentUserAnswerIsCorrect = false
      } else if (
        answer.isCorrect === false &&
        currentQuestion.userAnswers[aIndex] === false
      ) {
        currentUserAnswerIsCorrect = null
      }

      w(
        'calculateResultsAndBuildTable() currentUserAnswerIsCorrect: ',
        currentUserAnswerIsCorrect
      )

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
      if (currentUserAnswerIsCorrect === true) {
        resultsHTML += `<td><span class="cyan"><i class="fa-solid fa-check"></i></span></td>`
      } else if (currentUserAnswerIsCorrect === false) {
        resultsHTML += `<td><span class="fucsiaColor"><i class="fa-solid fa-xmark"></i></span></td>`
      } else if (currentUserAnswerIsCorrect === null) {
        resultsHTML += '<td></td>'
      }

      // Chiude la riga
      resultsHTML += '</tr>'
    }) // chiude question
  }) // chiude questionsAndAnswers

  lastSection.innerHTML = `<table>${resultsHTML}</table>`
  lastSection.style.display = 'none'
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
w('questionsAndAnswers: ', questionsAndAnswers)

// Individia il DIV messaggio
const divMessage = document.getElementById('divMessage')

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

divMessage.innerHTML = `
    Hai risposto correttamente a ${correctAnswers} domande su ${totalQuestions}.<br/>
    <span class="fucsiaColor">Clicca per vedere i risultati dettagliati</span>.
    `
divMessage.style.cursor = 'pointer'

divMessage.addEventListener('click', () => {
  if (lastSection.style.display === 'block') {
    lastSection.style.display = 'none'
    return
  }
  lastSection.style.display = 'block'
})
