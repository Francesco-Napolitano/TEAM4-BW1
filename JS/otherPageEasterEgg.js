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
sectionTitle = document.getElementById('title')
sectionContent = document.getElementById('content')
sectionButton = document.getElementById('button')
sectionLastSection = document.getElementById('lastSection')

// topic è l'argomento delle domande deve essere espresso come stringa ed
// essere ASSOLUTAMENTE identico al 'topic' riportato nel file 'questions.js'
const topic =
  localStorage.getItem('examTopic') !== null
    ? localStorage.getItem('examTopic')
    : 'HTML, CSS, JS' // Sempre il solito valore di default

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//
if (!document.getElementById(`${topic}`)) {
  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')
  link.id = cssId
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = `./assets/CSS/_${topic}.css`
  link.media = 'all'
  head.appendChild(link)
}
