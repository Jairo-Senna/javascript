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