// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

const unselectColour = () => {
  for (let i = 1; i <= 10; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.remove('colorStar')
  }
  nextQuestionButton.disabled = true
  nextQuestionButton.classList.remove('activatedButton')

  ratingSelected = false
}

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//

// Seleziona il DIV che contiene le stelline
const stars = document.getElementById('star')

// topic è l'argomento delle domande deve essere espresso come stringa ed
// essere ASSOLUTAMENTE identico al 'topic' riportato nel file 'questions.js'
const topic =
  localStorage.getItem('examTopic') !== null
    ? localStorage.getItem('examTopic')
    : 'HTML, CSS, JS' // Sempre il solito valore di defaulr

// Definisce il tema della pagina che altro non è che il topi tutto minuscolo
const theme = topic.toLowerCase()

// aggiunto sezione che illumina il button quando inserisci il feedback
const nextQuestionButton = document.getElementById('nextQuestionButton')
const allStars = document.querySelectorAll('#star i')
const reviewInput = document.getElementById('review')

// Variabile per tracciare se una valutazione è stata selezionata
let ratingSelected = false

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

  // Attiva il check del clieck sulle stessline
  stars.addEventListener('click', (e) => {
    // Rimuove il colore da tutte le stelline
    unselectColour()

    //   const divStar = document.getElementById('star')
    const selectedStar = parseInt(e.target.id.replace('S', ''))
    for (i = 1; i <= selectedStar; i++) {
      let starColoured = document.getElementById(`S${i}`)
      starColoured.classList.add('colorStar')
    }
    ratingSelected = true
  })

  // Variabile per tracciare se una valutazione è stata selezionata

  // Abilita o disabilita il bottone in base alla presenza del feedback
  reviewInput.addEventListener('input', () => {
    if (ratingSelected && reviewInput.value.trim() !== '') {
      nextQuestionButton.disabled = false
      nextQuestionButton.classList.add('activatedButton')
    } else {
      nextQuestionButton.disabled = true
      nextQuestionButton.classList.remove('activatedButton')
    }
  })

  // Attiva l'emet listenser per il click sul bottone
  nextQuestionButton.addEventListener('click', () => {
    nextQuestionButton.disabled === false
      ? (document.location.href = 'welcomePage.html')
      : {}
  })
}
