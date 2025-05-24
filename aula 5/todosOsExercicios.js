// exercicio 1 /////////////////////////////////////////////////////////

function gerenciarTarefas(tarefas, acao, novaTarefa) {
  switch (acao) {
    case "adicionarInicio":
      if (novaTarefa) tarefas.unshift(novaTarefa);
      break;
    case "adicionarFim":
      if (novaTarefa) tarefas.push(novaTarefa);
      break;
    case "removerInicio":
      tarefas.shift();
      break;
    case "removerFim":
      tarefas.pop();
      break;
    default:
      console.log("Ação inválida.");
  }
}

const tarefas = ["Estudar", "Treinar", "Ler"];

const acao = prompt("Digite a ação:\n- adicionarInicio\n- adicionarFim\n- removerInicio\n- removerFim");

let novaTarefa = null;
if (acao === "adicionarInicio" || acao === "adicionarFim") {
  novaTarefa = prompt("Digite a nova tarefa:");
}

gerenciarTarefas(tarefas, acao, novaTarefa);

console.log("Tarefas atualizadas:", tarefas);
alert("Tarefas atualizadas:\n" + tarefas.join("\n"));


// exercicio 2 /////////////////////////////////////////////////////////

function calcularMedia(notas) {
  const notasOrdenadas = notas.sort((a, b) => b - a);
  const tresMelhores = notasOrdenadas.slice(0, 3);
  const soma = tresMelhores.reduce((total, nota) => total + nota, 0);
  const media = soma / tresMelhores.length;
  return media;
}

const notas = [5, 8, 9, 3, 10, 7];

let mediaTresMelhores = calcularMedia(notas);

console.log("Média das 3 melhores notas:", mediaTresMelhores);

// exercicio 3 /////////////////////////////////////////////////////////

function somarNumeros(array) {
  let soma = 0;
  for (let i in array) {
    const numero = array[i];
    if (numero % 2 === 0 && numero % 3 === 0) {
      soma += numero;
    }
  }
  return soma;
}

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let soma = somarNumeros(numeros);

console.log("Soma dos números divisíveis por 2 e 3:", soma);


// exercicio 4 /////////////////////////////////////////////////////////

function obterMaior(array) {
  let maior = array[0];
  for (let numero of array) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

function obterMenor(array) {
  let menor = array[0];
  for (let numero of array) {
    if (numero < menor) {
      menor = numero;
    }
  }
  return menor;
}

const numeros = [-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);
let menor = obterMenor(numeros);

console.log("Maior número:", maior);
console.log("Menor número:", menor);


// exercicio 5 /////////////////////////////////////////////////////////

function exibirNomes(nomes) {
  nomes.forEach(function(nome) {
    console.log(`Bem-vindo, ${nome}!`);
  });
}

const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);



// exercicio 6 /////////////////////////////////////////////////////////

function converterMoeda(precos) {
  return precos.map(function(valor) {
    return valor * 5;
  });
}

const precosDolares = [10, 20, 30];

const precoReais = converterMoeda(precosDolares);

console.log(precoReais);


// exercicio 7 /////////////////////////////////////////////////////////

function filtrarDevedores(dividas) {
  return dividas.filter(function(valor) {
    return valor > 80;
  });
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];

const devedores = filtrarDevedores(dividas);

console.log(devedores);


// exercicio 8 /////////////////////////////////////////////////////////

function calcularTotalVendas(vendas) {
  let total = 0;
  for (let valor of vendas) {
    total += valor;
  }
  return total;
}

const vendas = [150, 200, 100, 50];

let totalVendas = calcularTotalVendas(vendas);

console.log(totalVendas);
