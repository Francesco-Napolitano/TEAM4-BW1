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

// Funzione che selezione casualmente un numero di domande dall'array di domande
const selectQuestions = (questionsArray, numberOfQuestions) => {
  const questionsSelected = []
  for (let i = 0; i < numberOfQuestions; i++) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length)
    questionsSelected.push(questionsArray[randomIndex])
    questionsArray.splice(randomIndex, 1)
  }
  w(questionsSelected)
  return questionsSelected
}
// selectQuestions(questionsWithImage, 5)

// Funzione che mostra la domanda corrente popolando i DV della pagina
const showQuestion = (selectedQuestionsArray, questionNumber) => {
  const question = selectedQuestionsArray[questionNumber]
  w('currentQuestion is:', question)
  const h2QuestionTitle = document.getElementById('h2QuestionTitle')
  h2QuestionTitle.innerText = question.questionText

  // Se la domanda ha un'immagine la mostra dopo avere comunque svuotato il contenitore
  const questionImage = document.getElementById('questionImage')
  questionImage.innerHTML = ''
  if (question.imageUrl !== '') {
    currentImage = document.createElement('img')
    currentImage.src = question.imageUrl
    currentImage.alt = `Immagine domanda: ${question.questionText}`
    questionImage.appendChild(currentImage)
  }

  // popola le domande testuali verificando se la risposta ha una o più risposte corrette
  // selezionando quindi un radio o un checkbox
  const textualAnswer = document.getElementById('textualAnswer')

  // Verifica se la domanda ha una o più risposte corrette e setta il tipo di elemento da usare
  const correctAnswers = question.answers.filter((answer) => answer.isCorrect)
  const inputType = correctAnswers.length > 1 ? 'checkbox' : 'radio'

  // crea i vari elementi per ciascuna domanda facendo un loop sul ramo 'answer' della domanda corrente
  let answerHTML = ''
  question.answers.forEach((answer, index) => {
    // leva eventuali caratteri speciali dal testo della risposta per evitare problemi nell'html della label
    const escapedLabel = escapeHTML(answer.text)
    answerHTML += `
    <!-- aperto divAnswer-${questionNumber}-${index} -->
    <div class="questionAnswers" id="divAnswer-${questionNumber}-${index}">
        <input type="${inputType}" id="answer-${questionNumber}-${index}" name="answer-${questionNumber}-${index}" value="1"
         />
        <label for="answer-${questionNumber}-${index}">${escapedLabel}</label>
    </div>
    <!-- chiuso divAnswer-${questionNumber}-${index} -->`
  })

  // Inserisce il codice HTML delle risposte nel div 'textualAnswer'
  textualAnswer.innerHTML = answerHTML
  //
}

//
// Legge le risposte dell'utente eseguento un loop sugli input presenti nella pagina
// e restituendo un array di array con le risposte date dall'utente
// Prende come parametro l'array delle domande selezionate e l'indice che indica a che domanda si trova ora il test.
// passare questi parametri non sarebbe strattamente necessario perché si potrebbero leggere direttamente
// ma preferisco passarli per avere una funzione più generica e una funzione che accetta gli stessi parametri
// di showQuestion()
const readUserAnswers = (selectedQuestionsArray, currentQuestionIndex) => {
  const userAnswers = []
  const question = selectedQuestionsArray[currentQuestionIndex]
  const answers = question.answers
  answers.forEach((answer, index) => {
    const currentAnswer = document.getElementById(
      `answer-${currentQuestionIndex}-${index}`
    )
    if (currentAnswer.checked) {
      userAnswers.push(index)
    }
  })
  return userAnswers
}

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//

// Indica il numero delle domande del survey
const numberOfQuestions = 5

// currentQuestionIndex è l'indice della domanda corrente
let currentQuestionIndex = 0

// questionsArray è l'array di domande selezionate
const selectedQuestionsArray = selectQuestions(
  questionsWithImage,
  numberOfQuestions
)

//
// ***********************************************************************
// Definizione degli elementi della pagina rilevanti
// ***********************************************************************
//

// definisce il div che contiene il testo delle domande
divQuestionAnswers = document.getElementById('divQuestionAnswers')

// definisce il bottone
nextQuestionButton = document.getElementById('nextQuestionButton')

//

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

//
// Mostra la prima domanda prima di attivare il bottone
w(`questionIndex ${currentQuestionIndex} / ${numberOfQuestions - 1}`)
showQuestion(selectedQuestionsArray, currentQuestionIndex)

//
// Aggiunge un event listener al bottone per passare alla domanda successiva
nextQuestionButton.addEventListener('click', () => {
  // La prima domanda viene generata fuori dal ciclo e quindi legge
  const userAnswers = readUserAnswers(
    selectedQuestionsArray,
    currentQuestionIndex
  )

  // Verifica se la domanda corrente è l'ultima
  if (currentQuestionIndex === numberOfQuestions - 1) {
    // se è l'ultima domanda salva le risposte date dall'utente
    // e reindirizza alla pagina dei risultati
    w('ultima domanda')
    // Inizializza il localStorage che conterrà le domande e le risposte date dall'utente
    localStorage.setItem('questionsAndAnswers', '')
    // localStorage.setItem("questionsAdnAnswers", JSON.stringify(questionsAdnAnswers));
    // questionsAndAnswers = JSON.parse(localStorage.getItem("questionsAndAnswers"));

    localStorage.setItem(
      'questionsAndAnswers',
      JSON.stringify(selectedQuestionsArray)
    )
    // window.location.href = "resultsPage.html";
  } else {
    // se non è l'ultima domanda mostra la domanda successiva
    currentQuestionIndex++
    w(`questionIndex ${currentQuestionIndex} / ${numberOfQuestions - 1}`)
    showQuestion(selectedQuestionsArray, currentQuestionIndex)
  }
})
