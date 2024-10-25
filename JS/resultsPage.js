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
      //                       +-----------------+-----------------+
      //                       |      Data       |     NON Data    |
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
        resultsHTML += `<td><span class="cyanColor"><i class="fa-solid fa-circle"></i></span></td>`
      } else {
        resultsHTML += '<td></td>'
      }

      // Se la risposta è corretta e l'utente ha risposto correttamente allora inserisce un baffo
      // altrimenti una croce, oppure nulla se l'utente non ha dato quella risposta
      if (currentUserAnswerIsCorrect === true) {
        resultsHTML += `<td><span class="cyanColor"><i class="fa-solid fa-check"></i></span></td>`
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

  // Calcola la percentuale delle risposte corrette e sbagliate
  percentageCorrect = ((correctAnswers / totalQuestions) * 100).toFixed(2)

  percentageWrong = ((wrongAnswers / totalQuestions) * 100).toFixed(2)

  // Stampa i risultati
  w('correctAnswers: ', correctAnswers)
  w('wrongAnswers: ', wrongAnswers)
  w('totalQuestions: ', totalQuestions)
  w('totalScore: ', totalScore)
  w('percentageCorrect: ', percentageCorrect)
  w('percentageWrong: ', percentageWrong)

  // Pubblica i risultato sulla pagina

  // <p id="correctPercentage"></p>
  // <p id="correctNumber"></p>
  // <p id="wrongPercentage"></p>
  // <p id="wrongNumber"></p>

  document.getElementById(
    'correctPercentage'
  ).innerHTML = `${percentageCorrect}%`
  document.getElementById(
    'correctNumber'
  ).innerHTML = `${correctAnswers}/${totalQuestions} domande`
  document.getElementById('wrongPercentage').innerHTML = `${percentageWrong}%`
  document.getElementById(
    'wrongNumber'
  ).innerHTML = `${wrongAnswers}/${totalQuestions} domande`

  if (percentageCorrect >= 60) {
    document.getElementById('endExamText').innerHTML = `
            <p>Congratulazioni!</p>
            <p class="cyanColor">Hai superato l'esame.</p>
            <p>
              Ti mandere il certificato in pochi minuti. Controlla la tua
              email (controlla anche promozioni e spam).
            </p>`
    // il div che contiene i risultati, ovveroo CORRETTE o SBAGLIATE è bianco e non grigio
    document.getElementById('correctAnswers').style.color =
      'var(--evidence0-color)'
  } else {
    document.getElementById('endExamText').innerHTML = `
            <p>Ci dispiace ma</p>
            <p class="fucsiaColor">Non hai superato l'esame.</p>
            <p>
              Riprova tra qualche giorno. Studia meglio le domande
              a cui hai in maniera errata.
            </p>`

    // il div che contiene i risultati, ovvero CORRETTE o SBAGLIATE è bianco e non grigio
    document.getElementById('wrongAnswers').style.color =
      'var(--evidence0-color)'
  }
}

const placeTheGraficOnThePage = () => {
  // Legge la variabile dallo stylesheet e la usa per colorare il grafico
  // la funzione del vgrafico non legge le variabili CSS
  // https://stackoverflow.com/questions/41725725/access-css-variable-from-javascript

  // let correctColor = getComputedStyle(document.documentElement)
  //   .getPropertyValue('--evidence2-color')
  //   .trim()

  // let wrongColor = getComputedStyle(document.documentElement)
  //   .getPropertyValue('--evidence1-color')
  //   .trim()

  w('placeTheGraficOnThePage() correctColor: ', correctColor)
  w('placeTheGraficOnThePage() wrongColor: ', wrongColor)
  // il grafico disegna prima quelle sbagliate che stanno sulla destra
  // quindi quelle corrette che stabbo sulla sinistra
  drawGraphic(
    'myDoughnutChart',
    percentageCorrect,
    percentageWrong,
    correctColor,
    wrongColor
  )
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

// topic è l'argomento delle domande deve essere espresso come stringa ed
// essere ASSOLUTAMENTE identico al 'topic' riportato nel file 'questions.js'
const topic =
  localStorage.getItem('examTopic') !== null
    ? localStorage.getItem('examTopic')
    : 'HTML, CSS, JS' // Sempre il solito valore di defaulr

// Individia il DIV messaggio
const divMessage = document.getElementById('divMessage')

//individua la sezione lastSection
const lastSection = document.getElementById('lastSection')

// Definisce il tema della pagina che altro non è che il topi tutto minuscolo
const theme = topic.toLowerCase()

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

// Utilizzo l'emento on load per far partire il codice solo dopo che la pagina
//  è stata caricata totalmente
window.onload = () => {
  // Controlla se il tema è corretto e nel caso lo attiva
  checkTheme(theme)

  calculateResultsAndBuildTable()
  switch (theme) {
    case 'html, css, js':
      correctColor = '#00ffff'
      wrongColor = '#d20094'
      break
    case 'cucina':
      correctColor = '#2ecc71'
      wrongColor = '#e74c3c'
      break
    case 'geografia':
      correctColor = '#96cc02'
      wrongColor = ' #2980b9'
      break
  }

  placeTheGraficOnThePage()

  // Assegna l'avanzamento pagina al click sul pulsante
  document.getElementById('trasparent').addEventListener('click', () => {
    location.href = 'feedbackPage.html'
  })

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
    lastSection.scrollIntoView()
    // window.scrollBy(0, 450)
  })
}
