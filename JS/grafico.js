// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

//
// Funzione che definisce la creazione del grafico
//
const drawGraphic = (
  canvasId,
  wrongPercent,
  correctPercent,
  colorCorrect,
  colorWrong
) => {
  const data = {
    datasets: [
      {
        data: [wrongPercent, correctPercent],
        backgroundColor: [colorCorrect, colorWrong],
        borderWidth: 0,
        cutout: '75%',
      },
    ],
  }

  // config
  const config = {
    type: 'doughnut',
    data,
    options: {},
  }

  // render init block
  const myChart = new Chart(document.getElementById(canvasId), config)
}

// drawGraphic('myDoughnutChart', 87, 13, '#00ffff', '#d20094')
