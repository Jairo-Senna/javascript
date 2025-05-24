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
