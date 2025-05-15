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

const mensagemDeBoasVindas = function(nome, hora) {
  if (hora >= 6 && hora <= 11) {
    return `Bom dia, ${nome}!`;
  } else if (hora >= 12 && hora <= 17) {
    return `Boa tarde, ${nome}!`;
  } else if (hora >= 18 && hora <= 23) {
    return `Boa noite, ${nome}!`;
  } else {
    return `Olá, ${nome}!`;
  }
};

const nomeUsuario = prompt("Digite seu nome:");
const horaAtual = parseInt(prompt("Digite a hora atual (0 a 23):"));

if (isNaN(horaAtual) || horaAtual < 0 || horaAtual > 23) {
  alert("Hora inválida. Por favor, digite um número entre 0 e 23.");
} else {
  const saudacao = mensagemDeBoasVindas(nomeUsuario, horaAtual);
  alert(saudacao);
}




//exercicio 4 ///////////////////////////////////////////////////////

const calcularDesconto = (preco, percentagemDesconto) => {
  return preco - (preco * (percentagemDesconto / 100));
};

const precoOriginal = 200;
const desconto = 10;

const precoFinal = calcularDesconto(precoOriginal, desconto);

alert(`Preço final com desconto: R$ ${precoFinal.toFixed(2)}`);




//exercicio 5 /////////////////////////////////////

function exibirMensagem(nome1, nome2, callback) {
  console.log(callback(nome1));
  console.log(callback(nome2));
}


const saudacao = (nome) => {
  return `Olá, ${nome}! Que bom ver você aqui!`;
};

const nomeUsuario1 = prompt("Digite o primeiro nome:");
const nomeUsuario2 = prompt("Digite o segundo nome:");

exibirMensagem(nomeUsuario1, nomeUsuario2, saudacao);
