const botoes = document.querySelectorAll(".botao-bateria");

botoes.forEach(botao => {
  botao.addEventListener("click", function() {
    const tecla = this.textContent;
    reproduzirSom(tecla);
    animarBotao(tecla);
  });
});

document.addEventListener("keydown", function(event) {
  reproduzirSom(event.key);
  animarBotao(event.key);
});


function reproduzirSom(tecla) {
  let caminhoSom;

  switch (tecla) {
    case "w":
      caminhoSom = "sons/tom-1.mp3";
      break;
    case "a":
      caminhoSom = "sons/tom-2.mp3";
      break;
    case "s":
      caminhoSom = "sons/tom-3.mp3";
      break;
    case "d":
      caminhoSom = "sons/tom-4.mp3";
      break;
    case "j":
      caminhoSom = "sons/snare.mp3";
      break;
    case "k":
      caminhoSom = "sons/crash.mp3";
      break;
    case "l":
      caminhoSom = "sons/kick.mp3";
      break;
    default:
      return;
  }

  const audio = new Audio(caminhoSom);
  audio.play();
}

function animarBotao(tecla) {
  const botaoAtivo = document.querySelector("." + tecla);

  if (botaoAtivo) {
    botaoAtivo.classList.add("pressionado");

    setTimeout(function() {
      botaoAtivo.classList.remove("pressionado");
    }, 100);
  }
}