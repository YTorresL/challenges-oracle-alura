// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

function Valor() {
  const preguntaUsuario = document.getElementById('respuesta').value
  const convertirPreguntaUsuario = Math.sign(preguntaUsuario)

  if (convertirPreguntaUsuario === 1) {
    document.getElementById('resultado').innerHTML = '¡El número es positivo!'
  } else if (convertirPreguntaUsuario === -1) {
    document.getElementById('resultado').innerHTML = '¡El número es negativo!'
  } else if (convertirPreguntaUsuario === 0) {
    document.getElementById('resultado').innerHTML = '¡El número es 0!'
  } else {
    document.getElementById('resultado').innerHTML = '¡No es un numero!'
  }
}
