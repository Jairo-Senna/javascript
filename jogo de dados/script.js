// Passo 1: Encontrar os elementos HTML com os quais vamos interagir.
// Fazemos isso uma única vez para ser mais eficiente.
const botaoSortear = document.querySelector(".meuBotao");
const titulo = document.querySelector("h1");
const imagem1 = document.querySelector(".img1");
const imagem2 = document.querySelector(".img2");

// Passo 2: Criar a função que faz toda a lógica do jogo.
function sortearDados() {
  // Gera dois números aleatórios de 1 a 6.
  const numeroAleatorio1 = Math.floor(Math.random() * 6) + 1;
  const numeroAleatorio2 = Math.floor(Math.random() * 6) + 1;

  // Cria o caminho para as imagens com base nos números sorteados.
  const caminhoImagem1 = "imagens/dado" + numeroAleatorio1 + ".png";
  const caminhoImagem2 = "imagens/dado" + numeroAleatorio2 + ".png";

  // Atualiza as imagens na tela.
  imagem1.setAttribute("src", caminhoImagem1);
  imagem2.setAttribute("src", caminhoImagem2);

  // Compara os números e atualiza o título para declarar o vencedor.
  if (numeroAleatorio1 > numeroAleatorio2) {
    titulo.innerHTML = "🚩 O Jogador 1 Venceu!";
  } else if (numeroAleatorio2 > numeroAleatorio1) {
    titulo.innerHTML = "O Jogador 2 Venceu! 🚩";
  } else {
    titulo.innerHTML = "Empate!";
  }
}

// Passo 3: Adicionar o "ouvinte de evento" ao botão.
// Esta é a linha mais importante: ela diz ao navegador para executar a
// função 'sortearDados' toda vez que o 'botaoSortear' for clicado.
botaoSortear.addEventListener("click", sortearDados);