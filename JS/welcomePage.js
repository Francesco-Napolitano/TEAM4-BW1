const buttonProceed = document.getElementById('buttonProceed')
buttonProceed.disabled = true

const checkBox = document.getElementById('checkBox')
checkBox.addEventListener('change', function () {
  if (this.checked) {
    buttonProceed.disabled = false
    buttonProceed.classList.add('activatedButton')
  } else {
    buttonProceed.disabled = true
    buttonProceed.classList.remove('activatedButton')
  }
})
if (buttonProceed.classList.contains('activatedButton')) {
  buttonProceed.classList.remove('activatedButton')
}
document.getElementById('buttonProceed')
buttonProceed.addEventListener('click', function () {
  location.href = 'questionPage.html'
})
