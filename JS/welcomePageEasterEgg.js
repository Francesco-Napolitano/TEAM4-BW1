// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

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
  .filter((item, pos, array) => {
    return !pos || item != array[pos - 1]
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
  theme = e.target.value.toLocaleLowerCase()
  localStorage.setItem('examTopic', theme)

  if (theme !== 'HTML, CSS, JS' && !document.getElementById(theme)) {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = `./assets/CSS/_${theme}.css`
    link.media = 'all'
    head.appendChild(link)
  }
  if (theme === 'HTML, CSS, JS') {
    document.getElementById(theme).remove()
  }
})
