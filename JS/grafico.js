function calculateResults(questions){
    let correctAnswers =0
    let incorrectAnswers=0

  questions.forEach((question) => {
    //mi calcolo le risposte corrette
    const userCorrectAnswer = question.answers.find(
      (answer) => answer.isCorrect
    )
    const userAnsweredCorrectly = userCorrectAnswer
      ? userCorrectAnswer.score
      : 0
    if (userAnsweredCorrectly > 0) {
      correctAnswers++
    } else {
      incorrectAnswers++
    }
  })
  return {
    correct: correctAnswers,
    incorrect: incorrectAnswers
}}
const results = calculateResults(questionsWithImage)
const ctx = document.getElementById('myDoughnutChart').getContext('2d')
let graphicDonut = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Results',
        data: [results.correct, results.incorrect],
        backgroundColor: ['green', 'red'],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw
          },
        },
      },
    },
  },
})
