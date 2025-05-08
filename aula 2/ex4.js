// Solicitar a quantidade atual no estoque
let estoque = parseInt(prompt("Informe a quantidade atual no estoque:"));

// Solicitar a quantidade a ser removida
let remover = parseInt(prompt("Informe a quantidade que deseja remover:"));

// Verificar se a quantidade a ser removida é válida
if (remover >= 0 && remover <= estoque) {
    estoque -= remover;  // Atualiza o estoque
    console.log("Estoque atualizado: " + estoque);
} else {
    console.log("Operação inválida: quantidade insuficiente no estoque");
}
