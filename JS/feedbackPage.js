const stars = document.getElementById('star')

const unselectColour = () => {
  for (let i = 1; i <= 10; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.remove('colorStar')
  }
}
stars.addEventListener('click', (e) => {
  unselectColour()
  //   const divStar = document.getElementById('star')
  const selectedStar = parseInt(e.target.id.replace('S', ''))
  for (i = 1; i <= selectedStar; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.add('colorStar')
  }
})

const nextQuestionButton = document.getElementById('nextQuestionButton')
const allStars = document.querySelectorAll('#star i')
const reviewInput = document.getElementById('review')

nextQuestionButton.disabled = true

// Variabile per tracciare se una valutazione è stata selezionata
let ratingSelected = false

allStars.forEach((star) => {
  star.addEventListener('click', () => {
    ratingSelected = true
  })
})

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
