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

// Funziona per controllare se il tema è diverso da 'html, css, js' e se non è già presente nel documento
const checkTheme = (theme) => {
  if (theme !== 'html, css, js' && !document.getElementById(theme)) {
    var head = document.getElementsByTagName('head')[0]
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = `./assets/CSS/_${theme}.css`
    link.media = 'all'
    head.appendChild(link)

    // Crea un'immagine dopo il logo di EPICODE
    const image = document.createElement('img')
    image.id = 'themeIcon'
    image.src = `./assets/img/icon${theme}.png`
    image.alt = 'icon'
    divLogo.appendChild(image)
  }
}

// Piazza il link all ahome page in fondo alla pagina
const placeHomeLink = () => {
  // Mette il link per tornare in home page
  const home = document.createElement('a')
  home.href = './welcomePage.html'
  home.id = 'homeAnchor'
  home.innerHTML = 'Back to Welcome Page'
  lastSection.appendChild(home)
}
