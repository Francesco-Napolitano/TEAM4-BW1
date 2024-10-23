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

// Trova il DIV in cui inserrire l'immagine dell'icona
const divLogo = document.getElementById('divLogo')

// Per trovare i topics unici, uso il metodo 'filter' sul metodo 'map' che mi restituisce un array con tutti i topics
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
let topics = questionsWithImage
  .map((question) => question.topic)
  .filter((item, pos, array) => {
    return !pos || item != array[pos - 1]
  })

// Istanzia la variabile che definisce il tema (è il topic in minuscolo)
let theme = topic.toLocaleLowerCase()

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

// Al caricamento dell pagina, controlla se il tema è già stato settata e nel caso lo carica
// Se il tema è 'html, css, js' non carica nessun file CSS
if (theme !== 'html, css, js' && !document.getElementById(theme)) {
  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = `./assets/CSS/_${theme}.css`
  link.media = 'all'
  head.appendChild(link)

  // Crea un'immagine dopo il logo di EPICODE
  const image = document.createElement('img')
  image.id = 'themeIcon'
  image.src = `./assets/img/icon${theme}.png`
  image.alt = 'icon'
  divLogo.appendChild(image)
}

// Crea il selettore per i topics
const selectElement = document.createElement('select')
selectElement.id = 'topicSelection'
selectElement.name = 'topicSelection'

// Ci mette dento tutti i 'topics' delle 'questions'
topics.forEach((topic) => {
  const option = document.createElement('option')
  option.value = topic
  option.text = topic
  // E il 'topic' selezionato è quello che è stato settato lo seleziona
  topic.toLocaleLowerCase() === theme ? (option.selected = true) : null
  selectElement.appendChild(option)
})

// Lo appende alla 'lastSection'
sectionLastSection.appendChild(selectElement)

// Configura un valore di default nel localStorage e attiva un eventListener se il dopic viene modificato
// e ricarica la pagina
selectElement.addEventListener('change', (e) => {
  localStorage.setItem('examTopic', e.target.value) // Non deve essere minuscolo perché nell'array delle domande è con l'iniziale maiuscola
  location.reload()
})
