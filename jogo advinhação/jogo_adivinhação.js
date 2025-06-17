alert("🎮 Bem-vindo ao Jogo da Adivinhação!");

let melhorJogador = "";
let melhorTentativas = Infinity;
let jogarNovamente = "sim";

while (jogarNovamente.toLowerCase() === "sim") {
  const nome = prompt("Qual o seu nome, jogador?");
  alert(`Olá, ${nome}! Preparando o jogo...\nUm número de 1 a 100 foi sorteado!`);

  const numeroSecreto = Math.ceil(Math.random() * 100);
  let tentativas = 0;

  while (true) {
    let tentativa = Number(prompt("Tente adivinhar o número (1 a 100):"));
    tentativas++;

    if (tentativa > numeroSecreto) {
      alert("O número secreto é menor. 📉");
    } else if (tentativa < numeroSecreto) {
      alert("O número secreto é maior. 📈");
    } else {
      alert(`🎉 Parabéns, ${nome}! Você acertou em ${tentativas} tentativa(s).`);

      if (tentativas <= 3) {
        alert("Uau! Você é um gênio da adivinhação! 🧠");
      } else if (tentativas <= 6) {
        alert("Muito bem! Você foi rápido! 🚀");
      } else {
        alert("Conseguiu! Persistência é tudo! 💪");
      }

      if (tentativas < melhorTentativas) {
        melhorTentativas = tentativas;
        melhorJogador = nome;
        alert(`🏆 Novo recorde! ${melhorJogador} é o melhor jogador com ${melhorTentativas} tentativa(s)!`);
      }

      break; // sai do laço da rodada após acerto
    }
  }

  jogarNovamente = prompt("Deseja jogar novamente? (sim/não)");
}

if (melhorJogador !== "") {
  alert(`🏁 Fim de jogo!\nMelhor jogador: ${melhorJogador}\nRecorde: ${melhorTentativas} tentativa(s) 👑`);
} else {
  alert("🏁 Fim de jogo! Nenhum jogador estabeleceu um recorde.");
}
