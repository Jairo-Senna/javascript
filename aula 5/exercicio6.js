function converterMoeda(precos) {
  return precos.map(function(valor) {
    return valor * 5;
  });
}

const precosDolares = [10, 20, 30];

const precoReais = converterMoeda(precosDolares);

console.log(precoReais);