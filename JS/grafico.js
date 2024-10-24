// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

//
// Funzione che definisce la creazione del grafico
//
const drawGraphic = (canvasId, data1, data2, color1, color2) => {
  const ctx = document.getElementById(canvasId)
  let graphicDonut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          // Per necessità legate alla presentazione dei dati, i valori sono invertiti
          // il grafico parte viene disegnato in senso antiorario
          data: [data2, data1],
          backgroundColor: [color2, color1],
          borderColor: [],
          borderWidth: 0,
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

// drawGraphic('myDoughnutChart', 87, 13, '#00ffff', '#d20094')
