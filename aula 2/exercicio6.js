let nome = prompt("Qual é o seu nome?");
let peso = parseFloat(prompt("Qual é o seu peso em kg?"));
let altura = parseFloat(prompt("Qual é a sua altura em metros?"));

let imc = peso / (altura * altura);

let confirmar = confirm(`Seus Dados:
Nome: ${nome}
Peso: ${peso} kg
Altura: ${altura} m
Deseja continuar?`);

confirmar 
  ? alert(`${nome}, seu IMC é ${imc.toFixed(2)}`) 
  : alert("Você saiu do programa.");
