function filtrarDevedores(dividas) {
  return dividas.filter(function(valor) {
    return valor > 80;
  });
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];

const devedores = filtrarDevedores(dividas);

console.log(devedores);
