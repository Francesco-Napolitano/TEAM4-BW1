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

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//

// definisce il div che contiene il testo delle domande
const sectionTitle = document.getElementById('title')
const sectionContent = document.getElementById('content')
const sectionButton = document.getElementById('button')
const sectionLastSection = document.getElementById('lastSection')

// assegna il div per poter inviare eventuali messaggi all'utente
const divMessage = document.getElementById('divMessage')

// Definisce il checkbox
const checkBox = document.getElementById('checkBox')

// Devinisce il bottone per procedere
const buttonProceed = document.getElementById('buttonProceed')

// topic è l'argomento delle domande deve essere espresso come stringa ed
// essere ASSOLUTAMENTE identico al 'topic' riportato nel file 'questions.js'
const topic =
  localStorage.getItem('examTopic') !== null
    ? localStorage.getItem('examTopic')
    : 'HTML, CSS, JS' // Sempre il solito valore di defaulr

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
  // Di default spegne e disabilità il bottone
  if (buttonProceed.classList.contains('activatedButton')) {
    buttonProceed.classList.remove('activatedButton')
  }
  buttonProceed.disabled = true

  // Assegna l'azione al check del checkbox
  checkBox.addEventListener('change', function () {
    if (this.checked) {
      buttonProceed.disabled = false
      buttonProceed.classList.add('activatedButton')
    } else {
      buttonProceed.disabled = true
      buttonProceed.classList.remove('activatedButton')
    }
  })

  // Assegna l'azione alla pressione del bottone
  document.getElementById('buttonProceed')
  buttonProceed.addEventListener('click', function () {
    location.href = 'questionPage.html'
  })
}
