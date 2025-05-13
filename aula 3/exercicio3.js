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
