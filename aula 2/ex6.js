// Solicitar os dados do usuário
let nome = prompt("Qual é o seu nome?");
let peso = parseFloat(prompt("Informe seu peso (em kg):"));
let altura = parseFloat(prompt("Informe sua altura (em metros):"));

// Calcular o IMC
let imc = peso / (altura * altura);

// Exibir uma mensagem de confirmação com os dados inseridos
let confirmacao = confirm(`Seus Dados:
Nome: ${nome}
Peso: ${peso} kg
Altura: ${altura} m
Deseja continuar?`);

// Verificar a resposta do usuário
if (confirmacao) {
    alert(`${nome}, seu IMC é ${imc.toFixed(2)}`);
} else {
    alert("Você saiu do programa.");
}
