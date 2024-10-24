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
  const ctx = document.getElementById(canvasId).getContext('2d')
  let graphicDonut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [correctPercent, wrongPercent],
          backgroundColor: [colorCorrect, colorWrong],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    },

    options: {
      cutoutPercentage: 70,
      responsive: true,
      maintainAspectRatio: false,
      plugins: {},
    },
  })
}

drawGraphic('myDoughnutChart', 87, 13, '#00ffff', '#d20094')
