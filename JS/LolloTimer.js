let currentTimeout = null // letiabile globale per tracciare il timeout corrente
let svgContainer = null // letiabile globale per tracciare l'SVG corrente

const sound = new Audio('/assets/sounds/message-13716.mp3') // Suono di notifica

const startTimer = (seconds) => {
  // Se esiste un timer attivo, lo cancella e rimuove il timer SVG corrente
  if (currentTimeout) {
    clearTimeout(currentTimeout)
    destroyTimer() // Rimuove l'SVG esistente prima di creare uno nuovo
  }

  let width = 250,
    height = 150,
    timePassed = 0,
    timeLimit = seconds

  let fields = [
    {
      value: timeLimit,
      size: timeLimit,
      update: function () {
        return (timePassed = timePassed + 1)
      },
    },
  ]

  let arc = d3.svg
    .arc()
    .innerRadius(width / 3 - 50)
    .outerRadius(width / 3 - 35)
    .startAngle(0)
    .endAngle(function (d) {
      return (d.value / d.size) * 2 * Math.PI
    })

  // Crea un nuovo SVG per il timer, rimuovendo eventuali SVG precedenti
  svgContainer = d3
    .select('#divTimer')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  let field = svgContainer
    .selectAll('.field')
    .data(fields)
    .enter()
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .attr('class', 'field')

  let back = field
    .append('path')
    .attr('class', 'path path--background')
    .attr('d', arc)

  let path = field.append('path').attr('class', 'path path--foreground')

  let label = field.append('text').attr('class', 'label').attr('dy', '.35em')

  ;(function update() {
    field.each(function (d) {
      ;(d.previous = d.value), (d.value = d.update(timePassed))
    })

    path.transition().ease('elastic').duration(500).attrTween('d', arcTween)

    if (timeLimit - timePassed <= 10) pulseText()
    else
      label.text(function (d) {
        return d.size - d.value
      })

    if (timePassed <= timeLimit) {
      currentTimeout = setTimeout(update, 1000 - (timePassed % 1000)) // Registra il nuovo timeout
    } else {
      destroyTimer()
      buttonListener(false) // Chiama la funzione di callback
    }
  })()

  function pulseText() {
    sound ? sound.play() : {} // Suona la notifica

    back.classed('pulse', true)
    label.classed('pulse', true)

    if (timeLimit - timePassed >= 0) {
      label
        .style('font-size', '4rem')
        .attr('transform', 'translate(0,' + +0 + ')')
        .text(function (d) {
          return d.size - d.value
        })
    }

    label
      .transition()
      .ease('elastic')
      .duration(900)
      .style('font-size', '2rem')
      .attr('transform', 'translate(0,' + -0 + ')')
  }

  function destroyTimer() {
    if (svgContainer) {
      svgContainer.remove() // Rimuove l'SVG esistente quando si cancella il timer
      svgContainer = null
    }
    currentTimeout = null // Resetta la letiabile di timeout
  }

  function arcTween(b) {
    let i = d3.interpolate(
      {
        value: b.previous,
      },
      b
    )
    return function (t) {
      return arc(i(t))
    }
  }
}
