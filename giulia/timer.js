let timeLeft = 15
let totalDuration = 15
const timeDisplay = document.getElementById('time-left')
const circle = document.querySelector('.progress-ring__circle') // ricordati che sarà quello che si vedrà in schermo
const radius = circle.r.baseVal.value
const circumference = 2 * Math.PI * radius //per calcolare la circonfernza del cerchio per far muovere la barra

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference // definisco l'intera circonferenza dell'anello

const updateTimer = (seconds) => {
  timeDisplay.textContent = timeLeft // numerino dentro il timer

  const left = circumference - (timeLeft / totalDuration) * circumference // sviluppo dell'anello allo scorrere dei secondi
  circle.style.strokeDashoffset = left

  if (timeLeft >= 0 && timeLeft <= secondsForBeeping) {
    clickSound.play()
  }

  if (timeLeft > 0) {
    // funzione base per impostare un timer
    timeLeft--
    setTimeout(updateTimer(), 1000) // Aggiorna il timer ogni secondo
  } else {
    buttonListener(false)
  }
}

const clickSound = new Audio('/assets/sounds/message-13716.mp3')
const secondsForBeeping = 10
updateTimer() // Avvia il timer
