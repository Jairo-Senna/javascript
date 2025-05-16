let nome = prompt("Digite seu nome:");

let mensagemDeBoasVindas = function(nome) {
  let horaAtual = new Date().getHours();
  let saudacao;

  if (horaAtual >= 6 && horaAtual <= 11) {
    saudacao = "Bom dia";
  } else if (horaAtual >= 12 && horaAtual <= 17) {
    saudacao = "Boa tarde";
  } else if (horaAtual >= 18 && horaAtual <= 23) {
    saudacao = "Boa noite";
  } else {
    saudacao = "Olá";
  }

  alert(`${saudacao}, ${nome}!`);
};

mensagemDeBoasVindas(nome);
