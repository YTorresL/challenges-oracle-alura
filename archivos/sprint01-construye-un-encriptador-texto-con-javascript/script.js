const VOCALS = [
  { LETTER: "a", CODE: "ai" },
  { LETTER: "e", CODE: "enter" },
  { LETTER: "i", CODE: "imes" },
  { LETTER: "o", CODE: "ober" },
  { LETTER: "u", CODE: "ufat" },
]

let result = ""
const regex = /^[a-z\s]+$/g

function Encrypt() {
  const text = document.getElementById("text").value

  if (text.match(regex)) {
    const noText = document.getElementsByClassName("no-text")
    for (let i = 0; i < noText.length; i++) {
      noText[i].style.display = "none"
    }

    document.querySelector("aside").style.justifyContent = "start"
    document.querySelector("article").style.justifyContent = "space-between"
    document.querySelector("aside").style.textAlign = "left"
    document.getElementById("result").style.display = "block"
    document.getElementById("copy").style.display = "block"
    document.getElementById("result").style.fontWeight = "400"

    result = ""
    const textArray = text.split("")

    for (let i = 0; i < textArray.length; i++) {
      const vocal = VOCALS.find((vocal) => vocal.LETTER === textArray[i])
      if (vocal) {
        result += vocal.CODE
      } else {
        result += textArray[i]
      }
    }

    document.getElementById("result").innerHTML = result
  } else {
    document.getElementById("result").style.display = "block"
    document.querySelector("aside").style.justifyContent = "center"
    document.querySelector("aside").style.textAlign = "center"
    document.getElementById("result").style.fontWeight = "bold"
    document.querySelector("article").style.justifyContent = "center"
    document.getElementById("copy").style.display = "none"

    document.getElementById("result").innerHTML =
      "El texto ingresado no es válido"

    const noText = document.getElementsByClassName("no-text")
    for (let i = 0; i < noText.length; i++) {
      noText[i].style.display = "none"
    }
  }
}

function Decrypt() {
  const text = document.getElementById("text").value

  if (text.length > 0) {
    let decryptedText = text

    VOCALS.forEach((vocal) => {
      const regex = new RegExp(vocal.CODE, "g")
      decryptedText = decryptedText.replace(regex, vocal.LETTER)
    })

    const noText = document.getElementsByClassName("no-text")
    for (let i = 0; i < noText.length; i++) {
      noText[i].style.display = "none"
    }

    document.getElementById("result").style.fontWeight = "400"
    document.querySelector("aside").style.justifyContent = "start"
    document.querySelector("article").style.justifyContent = "space-between"
    document.querySelector("aside").style.textAlign = "left"
    document.getElementById("result").style.display = "block"
    document.getElementById("copy").style.display = "block"

    document.getElementById("result").innerHTML = decryptedText
  } else {
    const noText = document.getElementsByClassName("no-text")
    for (let i = 0; i < noText.length; i++) {
      noText[i].style.display = "none"
    }
    document.getElementById("result").style.display = "block"
    document.getElementById("result").style.fontWeight = "bold"
    document.querySelector("article").style.justifyContent = "center"
    document.getElementById("copy").style.display = "none"
    document.querySelector("aside").style.textAlign = "center"

    document.getElementById("result").innerHTML =
      "No hay texto que desencriptar"
  }
}

function Copy() {
  let copyText = document.getElementById("result").innerText
  navigator.clipboard
    .writeText(copyText)
    .then(function () {
      console.log("Texto copiado al portapapeles")
    })
    .catch(function (err) {
      console.error("Error al copiar el texto: ", err)
    })
}
