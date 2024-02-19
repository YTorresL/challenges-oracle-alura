// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".

let puntuacion = 0

function CambioDePuntuacion() {
  puntuacion += 10

  document.getElementById('datoPuntuacion').innerHTML = puntuacion

  if (puntuacion >= 100) {
    document.getElementById('puntuacion').innerHTML =
      '¡Felicidades, has ganado!'
  } else {
    document.getElementById('puntuacion').innerHTML =
      'Intenta nuevamente para ganar.'
  }
}
