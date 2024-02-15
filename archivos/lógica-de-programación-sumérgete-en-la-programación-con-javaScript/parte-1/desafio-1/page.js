// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

const FIN_DE_SEMANA = {
  sabado: "Sábado",
  domingo: "Domingo",
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
};

function Semana() {
  const preguntaUsuario = document.getElementById("respuesta").value;

  const convertirPreguntaUsuario = preguntaUsuario.toLowerCase();
  const convertirSabado = FIN_DE_SEMANA.sabado.toLowerCase();
  const convertirDomingo = FIN_DE_SEMANA.domingo.toLowerCase();
  const convertirLunes = FIN_DE_SEMANA.lunes.toLowerCase();
  const convertirMartes = FIN_DE_SEMANA.martes.toLowerCase();
  const convertirMiercoles = FIN_DE_SEMANA.miercoles.toLowerCase();
  const convertirJueves = FIN_DE_SEMANA.jueves.toLowerCase();
  const convertirViernes = FIN_DE_SEMANA.viernes.toLowerCase();
  const convertirPreguntaUsuariotildes = convertirPreguntaUsuario
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirSabadoTildes = convertirSabado
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirDomingoTildes = convertirDomingo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirLunesTildes = convertirLunes
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirMartesTildes = convertirMartes
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirMiercolesTildes = convertirMiercoles
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirJuevesTildes = convertirJueves
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const convertirViernesTildes = convertirViernes
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (
    convertirPreguntaUsuariotildes === convertirSabadoTildes ||
    convertirPreguntaUsuariotildes === convertirDomingoTildes
  ) {
    document.getElementById("resultado").innerHTML = "¡Buen fin de semana!";
  } else if (
    convertirPreguntaUsuariotildes === convertirLunesTildes ||
    convertirPreguntaUsuariotildes === convertirMartesTildes ||
    convertirPreguntaUsuariotildes === convertirMiercolesTildes ||
    convertirPreguntaUsuariotildes === convertirJuevesTildes ||
    convertirPreguntaUsuariotildes === convertirViernesTildes
  ) {
    document.getElementById("resultado").innerHTML = "¡Buena semana!";
  } else {
    document.getElementById("resultado").innerHTML =
      "¡No es un dia de la semana!";
  }
}
