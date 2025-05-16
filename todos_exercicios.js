//exercicio 1 ////////////////////////////////////////////////////////////

function verificarIdade(nome = "visitante", idade) {
  if (idade < 0 || idade > 120) {
    alert("Idade inválida. Digite uma idade entre 0 e 120.");
    return;
  }


  if (idade < 18) {
    alert(`Olá, ${nome}! Você é menor de idade.`);
  } else {
    alert(`Olá, ${nome}! Você é maior de idade.`);
  }
}

while (confirm("Deseja verificar uma idade?")) {
  const nome = prompt("Digite o nome da pessoa:");
  const idadeStr = prompt("Digite a idade da pessoa:");
  const idade = parseInt(idadeStr);

  if (isNaN(idade)) {
    alert("Idade inválida. Por favor, digite um número.");
    continue;
  }

  verificarIdade(nome || "visitante", idade);
}



//exercicio 2 /////////////////////////////////////////////////////////////////

function calcular(num1 = 0, num2 = 0, operador = "+") {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Erro: Divisão por zero!";
      }
      return num1 / num2;
    case "%":
      if (num2 === 0) {
        return "Erro: Módulo por zero!";
      }
      return num1 % num2;
    default:
      return "Erro: Operador inválido!";
  }
}

while (true) {
  let num1 = prompt("Digite o primeiro número:");
  let num2 = prompt("Digite o segundo número:");
  let operador = prompt("Digite o operador (+, -, *, /, %):");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Erro: Um ou ambos os números são inválidos!");
    continue;
  }

  const resultado = calcular(num1, num2, operador);
  alert(`Resultado: ${resultado}`);

  const continuar = prompt("Deseja fazer outro cálculo? (sim ou não)").toLowerCase();
  if (continuar !== "sim") {
    alert("Programa encerrado. Obrigado por usar!");
    break;
  }
}




//exercicio 3 ///////////////////////////////////////////////////////////////////


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




//exercicio 4 ///////////////////////////////////////////////////////


const calcularDesconto = (preco, percentagemDesconto) => {
  return preco - (preco * (percentagemDesconto / 100));
};

let continuar = true;

while (continuar) {
  let precoInput = prompt("Digite o preço do produto:");
  let descontoInput = prompt("Digite a porcentagem de desconto:");

  let preco = parseFloat(precoInput);
  let desconto = parseFloat(descontoInput);

  if (isNaN(preco) || isNaN(desconto) || preco <= 0 || desconto < 0 || desconto > 100) {
    alert("Por favor, insira valores válidos. O preço deve ser maior que 0 e o desconto entre 0 e 100.");
    continue;
  }

  let valorFinal = calcularDesconto(preco, desconto);

  alert(`Preço original: R$ ${preco.toFixed(2)}\nDesconto: ${desconto}%\nValor com desconto: R$ ${valorFinal.toFixed(2)}`);

  let resposta = prompt("Deseja calcular o desconto de outro produto? (sim/não)").toLowerCase();
  if (resposta !== "sim") {
    continuar = false;
    alert("Obrigado por usar o sistema de descontos!");
  }
}



//exercicio 5 /////////////////////////////////////

function executarComAtraso(mensagem, callback) {
  setTimeout(() => {
    console.log(mensagem); 
    if (typeof callback === "function") {
      callback();
    }
  }, 2000);
}

function saudacaoFinal() {
  console.log("Saudação final: Seja bem-vindo ao nosso sistema!");
}

executarComAtraso("Aguarde... carregando informações.", saudacaoFinal);
