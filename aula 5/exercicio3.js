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