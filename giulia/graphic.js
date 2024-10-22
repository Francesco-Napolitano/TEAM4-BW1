const correctAnswers=0
const totalQuestions = questionsWith.length

for(let i=0; i<totalQuestions;i++){
    if(questionsWith[i].questionScore>0){
        correctAnswers++
    }
}

const wrongAnswers =totalQuestions -correctAnswers

const ctx=document.getElementById('myChart').getContext('2d') //per poter utilizzare i dati di una liberia, devo richiamarli
//myChart.Doughnut() // in questo modo ho richiamato il grafico e gli ho dato l'info della tipologia del grafico. come parametri di default ha data= è l'oggetto che contiene i dati; e options contiene un oggetto con i valori delle opzioni supportati
const myChart= newDonut (ctx,{
    type: 'doughnut',
data:{ // sono i dati che il grafico mostrerà
labels:['correct', 'false'],// serve per identificare le sezioni del grafico, questo caso abbiamo solo quelle giuste e quelle sbagliate
datasets:[{// è un array per rappresentare i vari dati
    data:['50%','50%'],
    backgroundColor:['#00FFF','#D20094-#900080'],
    borderWidth:0

}]
},
options:{
    cutout:'70%', // specifica la percentuale di taglio
    plugins:{ //mostra i plugin
        legend:{ // da' la possibilità di mostrare o no 
            display: true //configura la visualizzazione sopra le parti del grafico
        }
    }

}}

)
questionsWithImage[0].questionScore = 1; // Risposta corretta
questionsWithImage[1].questionScore = 1; // Risposta corretta
questionsWithImage[2].questionScore = 0; // Risposta sbagliata
questionsWithImage[3].questionScore = 1; // Risposta corretta
questionsWithImage[4].questionScore = 0;