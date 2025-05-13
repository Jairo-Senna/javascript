//exercicio 1 //////////////////////////////////////////////////////////////////

function verificarHabilitacao() {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
    let anoAtual = parseInt(prompt("Digite o ano atual:"));
    let idade = anoAtual - anoNascimento;
    if (idade >= 18) {
        console.log(`Você completa ${idade} anos em ${anoAtual} e poderá tirar a habilitação.`);
    } else {
        console.log(`Você completa ${idade} anos em ${anoAtual} e ainda não poderá tirar a habilitação.`);
    }
}

verificarHabilitacao();

//exercicio 2 /////////////////////////////////////////////////////////////////

let idade = prompt("Qual a sua idade?");

idade = parseInt(idade);

if (idade >= 65) {
    console.log("Você é um idoso.");
} else if (idade >= 18) {
    console.log("Você é um adulto.");
} else if (idade >= 13) {
    console.log("Você é um adolescente.");
} else {
    console.log("Você é uma criança.");
}

//exercicio 3 //////////////////////////////////////////////////////////////

function calcularIMC() {
    let peso = parseFloat(prompt("Digite seu peso (em kg):"));
    let altura = parseFloat(prompt("Digite sua altura (em metros):"));
    let imc = peso / (altura * altura);
    document.write("Seu IMC é: " + imc.toFixed(2) + "<br>");
    if (imc < 18.5) {
        document.write("Você está abaixo do peso.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.write("Você tem peso normal.");
    } else if (imc >= 25 && imc <= 29.9) {
        document.write("Você está com sobrepeso.");
    } else if (imc >= 30 && imc <= 34.9) {
        document.write("Você tem obesidade grau 1.");
    } else if (imc >= 35 && imc <= 39.9) {
        document.write("Você tem obesidade grau 2.");
    } else {
        document.write("Você tem obesidade grau 3.");
    }
}

calcularIMC();

//exercicio 4 ////////////////////////////////////////////////////////////

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

//exercicio 5 //////////////////////////////////////////////////////////////////////////////////////

function imprimirSequencia(valorInicial, valorFinal) {
    
    if (valorInicial <= valorFinal) {
        
        for (let i = valorInicial; i <= valorFinal; i++) {
            document.write(i + " "); 
        }
    } else {
        document.write("Valor inicial não pode ser maior que o valor final.");
    }
}
let valorInicial = parseInt(prompt("Digite o valor inicial:"));
let valorFinal = parseInt(prompt("Digite o valor final:"));

imprimirSequencia(valorInicial, valorFinal);

//exercicio 6 //////////////////////////////////////////////////////////////////////////////////////

function somaPares() {
    let N = parseInt(prompt("Digite um número inteiro N:"));

    let soma = 0;
    for (let i = 1; i <= N; i++) {
        
        if (i % 2 === 0) {
            soma += i;
        }
    }
    document.write("A soma dos números pares de 1 até " + N + " é: " + soma);
}

somaPares();

//exercicio 7 /////////////////////////////////////////////////////////////////////////////////////////

function contarPositivosNegativos() {
    let positivos = 0; 
    let negativos = 0;  

    while (true) {
        let numero = parseInt(prompt("Digite um número (digite 0 para sair):"));
        if (numero === 0) {
            break;
        }
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
    }
    document.write("Quantidade de números positivos: " + positivos + "<br>");
    document.write("Quantidade de números negativos: " + negativos);
}

contarPositivosNegativos();

//exercicio 8 ///////////////////////////////////////////////////////////////////////////////

function solicitarSenha() {
    const senhaCorreta = "2025"; 
    let senhaDigitada;
    do {
        senhaDigitada = prompt("Digite a senha:");
        if (senhaDigitada !== senhaCorreta) {
            document.write("Senha incorreta. Tente novamente.<br>");
        }
    } while (senhaDigitada !== senhaCorreta);
    document.write("Acesso liberado.");
}
solicitarSenha();
