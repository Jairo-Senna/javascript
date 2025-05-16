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
