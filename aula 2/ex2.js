// Solicitar o valor da compra
let valor = parseFloat(prompt("Informe o valor da compra:"));

// Aplicando o operador ternário para calcular o desconto
let desconto = valor > 100 ? valor * 0.10 : valor * 0.05;

// Calcular o valor final
let valorFinal = valor - desconto;

// Exibir os resultados
console.log("Valor original: R$ " + valor.toFixed(2));
console.log("Desconto aplicado: R$ " + desconto.toFixed(2));
console.log("Valor final: R$ " + valorFinal.toFixed(2));
