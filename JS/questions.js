const questionsWithImage = [
  {
    questionText:
      "Quale attributo HTML è usato per definire il percorso di un'immagine?",
    imageUrl: 'https://placecats.com/millie/300/150',
    answers: [
      { text: 'src', isCorrect: true, score: 1 },
      { text: 'href', isCorrect: false, score: 0 },
      { text: 'path', isCorrect: false, score: 0 },
      { text: 'link', isCorrect: false, score: 0 },
    ],
    // Verranno aggiunti dinamicamente man mano che l'utente risponde
    // userAnswers: [],
    // questionScore: 0,
  },
  {
    questionText: 'Quale tag HTML è usato per creare una tabella?',
    imageUrl: 'https://placecats.com/millie_neo/300/200',
    answers: [
      { text: '<table>', isCorrect: true, score: 1 },
      { text: '<grid>', isCorrect: false, score: 0 },
      { text: '<tbl>', isCorrect: false, score: 0 },
      { text: '<tab>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Come si aggiunge una classe a un elemento in JavaScript?',
    imageUrl: '',
    answers: [
      {
        text: "element.classList.add('nomeClasse')",
        isCorrect: true,
        score: 1,
      },
      { text: "element.className += 'nomeClasse'", isCorrect: false, score: 0 },
      { text: "element.addClass('nomeClasse')", isCorrect: false, score: 0 },
      { text: "element.class = 'nomeClasse'", isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale proprietà CSS è usata per modificare il colore del testo?',
    imageUrl: '',
    answers: [
      { text: 'color', isCorrect: true, score: 1 },
      { text: 'text-color', isCorrect: false, score: 0 },
      { text: 'font-color', isCorrect: false, score: 0 },
      { text: 'background-color', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale di questi selettori CSS è usato per selezionare un elemento con un id specifico?',
    imageUrl: 'https://placecats.com/neo_banana/300/200',
    answers: [
      { text: '#', isCorrect: true, score: 1 },
      { text: '.', isCorrect: false, score: 0 },
      { text: '*', isCorrect: false, score: 0 },
      { text: '::', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale metodo JavaScript viene utilizzato per stampare messaggi nella console?',
    imageUrl: 'https://placecats.com/neo_2/300/200',
    answers: [
      { text: 'console.log()', isCorrect: true, score: 1 },
      { text: 'print()', isCorrect: false, score: 0 },
      { text: 'echo()', isCorrect: false, score: 0 },
      { text: 'write()', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: "Quale tag HTML viene utilizzato per inserire un'immagine?",
    imageUrl: 'https://placecats.com/bella/300/200',
    answers: [
      { text: '<img>', isCorrect: true, score: 1 },
      { text: '<image>', isCorrect: false, score: 0 },
      { text: '<pic>', isCorrect: false, score: 0 },
      { text: '<src>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale proprietà CSS è utilizzata per modificare la dimensione del testo?',
    imageUrl: '',
    answers: [
      { text: 'font-size', isCorrect: true, score: 1 },
      { text: 'text-size', isCorrect: false, score: 0 },
      { text: 'size', isCorrect: false, score: 0 },
      { text: 'font', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Quale tag HTML definisce una intestazione?',
    imageUrl: 'https://placecats.com/millie/300/150',
    answers: [
      { text: '<h1>', isCorrect: true, score: 1 },
      { text: '<header>', isCorrect: false, score: 0 },
      { text: '<head>', isCorrect: false, score: 0 },
      { text: '<title>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Come si definisce un commento in JavaScript?',
    imageUrl: '',
    answers: [
      { text: '// Questo è un commento', isCorrect: true, score: 1 },
      { text: '# Questo è un commento', isCorrect: false, score: 0 },
      { text: '/* Questo è un commento */', isCorrect: false, score: 0 },
      { text: '<!-- Questo è un commento -->', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale proprietà CSS permette di rendere un testo in grassetto?',
    imageUrl: 'https://placecats.com/millie_neo/300/200',
    answers: [
      { text: 'font-weight', isCorrect: true, score: 1 },
      { text: 'font-style', isCorrect: false, score: 0 },
      { text: 'text-weight', isCorrect: false, score: 0 },
      { text: 'bold', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      "Quale evento JavaScript viene attivato quando l'utente invia un form?",
    imageUrl: '',
    answers: [
      { text: 'submit', isCorrect: true, score: 1 },
      { text: 'send', isCorrect: false, score: 0 },
      { text: 'load', isCorrect: false, score: 0 },
      { text: 'post', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Quale tag HTML è usato per creare un elenco numerato?',
    imageUrl: 'https://placecats.com/neo_banana/300/200',
    answers: [
      { text: '<ol>', isCorrect: true, score: 1 },
      { text: '<ul>', isCorrect: false, score: 0 },
      { text: '<li>', isCorrect: false, score: 0 },
      { text: '<list>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      "Quale attributo HTML viene utilizzato per associare un'etichetta a un elemento del form?",
    imageUrl: '',
    answers: [
      { text: 'for', isCorrect: true, score: 1 },
      { text: 'id', isCorrect: false, score: 0 },
      { text: 'name', isCorrect: false, score: 0 },
      { text: 'label', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      "Quale metodo JavaScript viene usato per rimuovere l'ultimo elemento di un array?",
    imageUrl: '',
    answers: [
      { text: 'pop()', isCorrect: true, score: 1 },
      { text: 'shift()', isCorrect: false, score: 0 },
      { text: 'remove()', isCorrect: false, score: 0 },
      { text: 'splice()', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Come si specifica un font in CSS?',
    imageUrl: '',
    answers: [
      { text: 'font-family', isCorrect: true, score: 1 },
      { text: 'font-style', isCorrect: false, score: 0 },
      { text: 'font-weight', isCorrect: false, score: 0 },
      { text: 'text-font', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quale dei seguenti selettori CSS viene utilizzato per selezionare tutti gli elementi?',
    imageUrl: 'https://placecats.com/neo_2/300/200',
    answers: [
      { text: '*', isCorrect: true, score: 1 },
      { text: '#', isCorrect: false, score: 0 },
      { text: '.', isCorrect: false, score: 0 },
      { text: '::', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Come si dichiara una variabile costante in JavaScript?',
    imageUrl: 'https://placecats.com/bella/300/200',
    answers: [
      { text: 'const', isCorrect: true, score: 1 },
      { text: 'var', isCorrect: false, score: 0 },
      { text: 'let', isCorrect: false, score: 0 },
      { text: 'constant', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      "Quale metodo JavaScript è utilizzato per aggiungere un nuovo elemento all'inizio di un array?",
    imageUrl: '',
    answers: [
      { text: 'unshift()', isCorrect: true, score: 1 },
      { text: 'push()', isCorrect: false, score: 0 },
      { text: 'pop()', isCorrect: false, score: 0 },
      { text: 'shift()', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Quale tag HTML si utilizza per creare un link ipertestuale?',
    imageUrl: 'https://placecats.com/millie/300/150',
    answers: [
      { text: '<link>', isCorrect: false, score: 0 },
      { text: '<a>', isCorrect: true, score: 1 },
      { text: '<href>', isCorrect: false, score: 0 },
      { text: '<url>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quali di questi tag HTML sono validi per la formattazione del testo?',
    imageUrl: 'https://placecats.com/millie_neo/300/200',
    answers: [
      { text: '<b>', isCorrect: true, score: 1 },
      { text: '<i>', isCorrect: true, score: 1 },
      { text: '<span>', isCorrect: true, score: 1 },
      { text: '<font>', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quali attributi si possono utilizzare per un tag <input> in un form HTML?',
    imageUrl: '',
    answers: [
      { text: 'type', isCorrect: true, score: 1 },
      { text: 'placeholder', isCorrect: true, score: 1 },
      { text: 'method', isCorrect: false, score: 0 },
      { text: 'required', isCorrect: true, score: 1 },
    ],
  },
  {
    questionText:
      'Quali metodi JavaScript si possono usare per selezionare elementi dal DOM?',
    imageUrl: 'https://placecats.com/neo_banana/300/200',
    answers: [
      { text: 'getElementById', isCorrect: true, score: 1 },
      { text: 'getElementsByClassName', isCorrect: true, score: 1 },
      { text: 'querySelector', isCorrect: true, score: 1 },
      { text: 'getClass', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText: 'Quali dei seguenti elementi sono semantici in HTML5?',
    imageUrl: 'https://placecats.com/neo_2/300/200',
    answers: [
      { text: '<header>', isCorrect: true, score: 1 },
      { text: '<footer>', isCorrect: true, score: 1 },
      { text: '<div>', isCorrect: false, score: 0 },
      { text: '<article>', isCorrect: true, score: 1 },
    ],
  },
  {
    questionText:
      'Quali tecniche CSS possono essere usate per posizionare un elemento al centro di una pagina?',
    imageUrl: '',
    answers: [
      { text: 'flexbox', isCorrect: true, score: 1 },
      { text: 'grid', isCorrect: true, score: 1 },
      { text: 'float', isCorrect: false, score: 0 },
      {
        text: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
        isCorrect: true,
        score: 1,
      },
    ],
  },
  {
    questionText:
      'Quali degli operatori seguenti in JavaScript sono utilizzati per confrontare valori?',
    imageUrl: '',
    answers: [
      { text: '==', isCorrect: true, score: 1 },
      { text: '===', isCorrect: true, score: 1 },
      { text: '!=', isCorrect: true, score: 1 },
      { text: '&&', isCorrect: false, score: 0 },
    ],
  },
  {
    questionText:
      'Quali delle seguenti sono tecniche per ottimizzare il caricamento di una pagina web?',
    imageUrl: 'https://placecats.com/bella/300/200',
    answers: [
      { text: 'Minificare file CSS e JavaScript', isCorrect: true, score: 1 },
      {
        text: 'Usare il lazy loading per le immagini',
        isCorrect: true,
        score: 1,
      },
      { text: 'Utilizzare solo immagini SVG', isCorrect: false, score: 0 },
      {
        text: 'Ridurre il numero di richieste HTTP',
        isCorrect: true,
        score: 1,
      },
    ],
  },
  {
    questionText:
      'Quali eventi JavaScript possono essere utilizzati per rilevare interazioni con un utente?',
    imageUrl: '',
    answers: [
      { text: 'click', isCorrect: true, score: 1 },
      { text: 'mouseover', isCorrect: true, score: 1 },
      { text: 'load', isCorrect: false, score: 0 },
      { text: 'keydown', isCorrect: true, score: 1 },
    ],
  },
  {
    questionText:
      'Quali di queste dichiarazioni JavaScript possono bloccare il flusso del codice?',
    imageUrl: 'https://placecats.com/millie/300/150',
    answers: [
      { text: 'if', isCorrect: true, score: 1 },
      { text: 'while', isCorrect: true, score: 1 },
      { text: 'for', isCorrect: true, score: 1 },
      { text: 'switch', isCorrect: true, score: 1 },
    ],
  },
]
