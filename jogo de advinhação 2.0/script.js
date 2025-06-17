// --- 1. SELEÇÃO DOS ELEMENTOS HTML ---
const inicioDiv = document.getElementById("inicio");
const jogoDiv = document.getElementById("jogo");
const fimDiv = document.getElementById("fim");

const nomeInput = document.getElementById("nome");
const palpiteInput = document.getElementById("palpite");

const comecarBtn = document.getElementById("comecarBtn");
const tentarBtn = document.getElementById("tentarBtn");
const jogarNovamenteBtn = document.getElementById("jogarNovamenteBtn");

const boasVindasP = document.getElementById("boasVindas");
const mensagemP = document.getElementById("mensagem");
const resultadoP = document.getElementById("resultado");
const recordeP = document.getElementById("recorde");

// --- 2. VARIÁVEIS GLOBAIS DO JOGO ---
let numeroSorteado;
let tentativas;
let nomeJogador;

// Variáveis para controlar o recorde
let recordeTentativas = Infinity; // Começa com um valor infinito para garantir que a primeira pontuação seja sempre melhor
let recordeJogador = "-";

// --- 3. LÓGICA E EVENTOS DO JOGO ---

// Evento para o botão "Começar Jogo"
comecarBtn.addEventListener("click", () => {
  nomeJogador = nomeInput.value;
  // Validação simples para garantir que um nome foi inserido
  if (!nomeJogador) {
    alert("Por favor, digite seu nome para começar!");
    return;
  }

  // Sorteia um número de 1 a 100
  numeroSorteado = Math.ceil(Math.random() * 100);
  tentativas = 0; // Reinicia a contagem de tentativas

  // Prepara e exibe a interface do jogo
  boasVindasP.textContent = `Olá, ${nomeJogador}! Boa sorte.`;
  mensagemP.textContent = ""; // Limpa mensagens anteriores
  palpiteInput.value = ""; // Limpa o campo de palpite

  inicioDiv.classList.add("hidden");
  fimDiv.classList.add("hidden");
  jogoDiv.classList.remove("hidden");
});

// Evento para o botão "Tentar"
tentarBtn.addEventListener("click", () => {
  const palpite = parseInt(palpiteInput.value);

  // Validação para garantir que o palpite é um número válido entre 1 e 100
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagemP.textContent = "⚠️ Por favor, digite um número válido entre 1 e 100.";
    return;
  }

  tentativas++; // Incrementa o número de tentativas

  // Compara o palpite com o número sorteado
  if (palpite < numeroSorteado) {
    mensagemP.textContent = "🔼 O número é maior!";
  } else if (palpite > numeroSorteado) {
    mensagemP.textContent = "🔽 O número é menor!";
  } else {
    // Se acertou, finaliza o jogo
    finalizarJogo();
  }
  palpiteInput.value = ""; // Limpa o campo para o próximo palpite
});

// Evento para o botão "Jogar Novamente"
jogarNovamenteBtn.addEventListener("click", () => {
  // Esconde as telas de jogo e fim, e mostra a tela inicial
  jogoDiv.classList.add("hidden");
  fimDiv.classList.add("hidden");
  inicioDiv.classList.remove("hidden");

  // Limpa o campo de nome
  nomeInput.value = "";
});


// --- 4 & 5. FUNÇÕES AUXILIARES ---

function finalizarJogo() {
  // Determina a mensagem de desempenho com base no número de tentativas
  let mensagemDesempenho;
  if (tentativas <= 3) {
    mensagemDesempenho = "🧠 Gênio da adivinhação!";
  } else if (tentativas <= 6) {
    mensagemDesempenho = "🚀 Muito bem!";
  } else {
    mensagemDesempenho = "💪 Persistência é tudo!";
  }

  resultadoP.textContent = `Parabéns, ${nomeJogador}! Você acertou o número ${numeroSorteado} em ${tentativas} tentativas. ${mensagemDesempenho}`;

  // Verifica e atualiza o recorde, se necessário
  if (tentativas < recordeTentativas) {
    recordeTentativas = tentativas;
    recordeJogador = nomeJogador;
    recordeP.textContent = `🏅 Melhor jogador: ${recordeJogador} (${recordeTentativas} tentativas)`;
  }

  // Esconde a tela de jogo e mostra a tela final
  jogoDiv.classList.add("hidden");
  fimDiv.classList.remove("hidden");
}