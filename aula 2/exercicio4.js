let estoque = parseInt(prompt("Informe a quantidade atual no estoque:"));
let remover = parseInt(prompt("Informe a quantidade que deseja remover:"));

let resultado = (remover <= estoque && remover >= 0) 
    ? `Estoque atualizado: ${estoque - remover}` 
    : "Operação inválida: quantidade insuficiente no estoque";

console.log(resultado);
