let valorCompra = parseFloat(prompt("Informe o valor da compra:"));

let desconto = valorCompra > 100 ? valorCompra * 0.10 : valorCompra * 0.05;

let valorFinal = valorCompra - desconto;

console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
