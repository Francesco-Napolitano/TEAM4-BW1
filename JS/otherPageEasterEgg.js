// ***********************************************************************
//
// FUNCTIONS DEFINITIONS
//
// ***********************************************************************
//

//
// ***********************************************************************
//
// VARIABLE DEFINITIONS
//
// ***********************************************************************
//

//
// ***********************************************************************
//
// MAIN ROUTINE
//
// ***********************************************************************
//
const theme = topic.toLowerCase()
if (theme !== 'HTML, CSS, JS' && !document.getElementById(theme)) {
  var head = document.getElementsByTagName('head')[0]
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = `./assets/CSS/_${theme}.css`
  link.media = 'all'
  head.appendChild(link)
}
