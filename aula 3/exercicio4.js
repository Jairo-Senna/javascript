function calculadora() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));
    console.log("--- Operações ---");
    console.log("1 - soma");
    console.log("2 - subtração");
    console.log("3 - multiplicação");
    console.log("4 - divisão");
    console.log("-----------------");
    let operacao = parseInt(prompt("Escolha uma operação:"));
    let resultado;
    switch (operacao) {
        case 1:
            resultado = numero1 + numero2;
            console.log("Resultado da soma: " + resultado);
            break;
        case 2:
            resultado = numero1 - numero2;
            console.log("Resultado da subtração: " + resultado);
            break;
        case 3:
            resultado = numero1 * numero2;
            console.log("Resultado da multiplicação; " + resultado);
            break;
        case 4:
            
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                console.log("Resultado da divisão: " + resultado);
            } else {
                console.log("Erro: Divisão por zero não permitida.");
            }
            break;
        default:
            console.log("Operação inválida.");
            break;
    }
}

calculadora();