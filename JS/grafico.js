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
  correctPercent,
  wrongPercent,
  colorCorrect,
  colorWrong
) => {
  const data = {
    datasets: [
      {
        data: [correctPercent, wrongPercent],
        backgroundColor: [colorCorrect, colorWrong],
        borderWidth: 1,
        cutout: '85%',
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
