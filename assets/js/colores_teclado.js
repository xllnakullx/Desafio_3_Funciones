let colorGlobal = 'white'
const keyDiv = document.querySelector('#key')
const container = document.querySelector('.container-2')

const newDiv = (color) => {
  console.log('color', color);
  const div = document.createElement('div')
  div.classList.add('base')
  div.classList.add('border')
  div.style.backgroundColor = color
  container.appendChild(div)
}

document.addEventListener('keydown', (event) => {
  console.log('event.key', event.key);

  const key = event.key

  if (key === 'a') {
    colorGlobal = 'pink'
  } else if (key === 's') {
    colorGlobal = 'orange'
  } else if (key === 'd') {
    colorGlobal = 'lightblue'
  } else if (key === 'q') {
    newDiv('purple')
  } else if (key === 'w') {
    newDiv('grey')
  } else if (key === 'e') {
    newDiv('brown')
  }

  keyDiv.style.backgroundColor = colorGlobal

})

