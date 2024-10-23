const buttonProceed = document.getElementById('buttonProceed')
buttonProceed.disabled = true

const checkBox = document.getElementById('checkBox')
checkBox.addEventListener('change', function () {
  if (this.checked) {
    buttonProceed.disabled = false // Abilita il bottone
    buttonProceed.classList.add('activatedButton') // Aggiungi la classe per l'illuminazione
  } else {
    buttonProceed.disabled = true // Disabilita il bottone
    buttonProceed.classList.remove('activatedButton') // Rimuovi la classe per l'illuminazione
  }
})

document.getElementById('buttonProceed')
buttonProceed.addEventListener('click', function () {
  location.href = 'questionPage.html'
})
