// Función original
// function pintar() {
//   ele.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);

// Función modificada para recibir el elemento clickeado
// Se le pasa otro parámetro para cambiar el color, por defecto es verde
const pintar = (e, color = 'green') => {
  e.style.backgroundColor = color
}

const ele = document.getElementById('ele1')
ele.addEventListener("click", () => pintar(ele, 'yellow'))