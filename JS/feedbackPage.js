const stars = document.getElementById('star')

const unselectColour = () => {
  for (let i = 1; i <= 10; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.remove('colorStar')
  }
}
stars.addEventListener('click', (e) => {
  unselectColour()
  //   const divStar = document.getElementById('star')
  const selectedStar = parseInt(e.target.id.replace('S', ''))
  for (i = 1; i <= selectedStar; i++) {
    let starColoured = document.getElementById(`S${i}`)
    starColoured.classList.add('colorStar')
  }
})
