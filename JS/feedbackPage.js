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
}

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//

// topic è l'argomento delle domande deve essere espresso come stringa ed
// essere ASSOLUTAMENTE identico al 'topic' riportato nel file 'questions.js'
const topic =
  localStorage.getItem('examTopic') !== null
    ? localStorage.getItem('examTopic')
    : 'HTML, CSS, JS' // Sempre il solito valore di defaulr

// Seleziona il DIV che contiene le stelline
const stars = document.getElementById('star')

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//

stars.addEventListener('click', (e) => {
  unselectColour()
  //   const divStar = document.getElementById('star')
  const selectedStar = parseInt(e.target.id.replace('S', ''))
  for (i = 1; i <= selectedStar; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.add('colorStar')
  }
})
