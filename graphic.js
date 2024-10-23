// Esempio di dati per il grafico
const correctAnswers = 8; // Numero di risposte corrette
const wrongAnswers = 2; // Numero di risposte sbagliate
const totalQuestions = correctAnswers + wrongAnswers;

// Mostra i risultati nel messaggio
document.getElementById("finalScore").textContent = correctAnswers;
document.getElementById("totalQuestions").textContent = totalQuestions;

// Creazione del grafico a ciambella
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Corrette', 'Sbagliate'],
        datasets: [{
            label: '# di Risposte',
            data: [correctAnswers, wrongAnswers],
            backgroundColor: [
                '#00FFFF', // Colore per le risposte corrette
                '#D20094 - #900080' // Colore per le risposte sbagliate
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Risultati del Quiz'
            }
        }
    }
});