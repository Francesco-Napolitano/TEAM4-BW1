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

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

// Per trovare i topics unici, uso il metodo 'filter' sul metodo 'map' che mi restituisce un array con tutti i topics
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
let topics = questionsWithImage
  .map((question) => question.topic)
  .filter((item, pos, ary) => {
    return !pos || item != ary[pos - 1]
  })

// Crea il selettore per i topics
const selectElement = document.createElement('select')
selectElement.id = 'topicSelection'
selectElement.name = 'topicSelection'

// Ci mette dento tutti i 'topics' delle 'questions'
topics.forEach((topic) => {
  const option = document.createElement('option')
  option.value = topic
  option.text = topic
  selectElement.appendChild(option)
})

// Lo appende alla 'lastSection'
sectionLastSection.appendChild(selectElement)

// Configura un valore di default nel localStorage e attiva un eventListener se il dopic viene modificato
localStorage.setItem('examTopic', 'HTML, CSS, JS')
selectElement.addEventListener('change', (e) => {
  localStorage.setItem('examTopic', e.target.value)
})
