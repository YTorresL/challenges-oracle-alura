// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

const FIN_DE_SEMANA = {
  sabado: "Sábado",
  domingo: "Domingo",
};

//let preguntaUsuario = prompt("¿Que dia de la semana es?");

if (
  preguntaUsuario === FIN_DE_SEMANA.sabado ||
  preguntaUsuario === FIN_DE_SEMANA.domingo
) {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
