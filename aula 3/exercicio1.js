
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
