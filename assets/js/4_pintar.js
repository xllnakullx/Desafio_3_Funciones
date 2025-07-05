const container = document.querySelector('.container')
const blueBox = document.querySelector('#blue-box')
const redBox = document.querySelector('#red-box')
const greenBox = document.querySelector('#green-box')
const yellowBox = document.querySelector('#yellow-box')

const changeToBlack = (element) => {
  element.style.backgroundColor = 'black'
}

// addEventListeners
container.addEventListener('click', (event) => {
  console.log('event.target', event.target)
  const element = event.target

  if (element.classList.contains('base')) {
    changeToBlack(element)
  }
})

// También se puede hacer de forma individual como se ha visto
// en las clases pero genera mas código

// blueBox.addEventListener('click', () => {
//   changeToBlack(blueBox)
// })

// etc...
