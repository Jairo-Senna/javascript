function calcular(num1 = 0, num2 = 0, operador = "+") {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Erro: Divisão por zero!";
      }
      return num1 / num2;
    case "%":
      if (num2 === 0) {
        return "Erro: Módulo por zero!";
      }
      return num1 % num2;
    default:
      return "Erro: Operador inválido!";
  }
}

while (true) {
  let num1 = prompt("Digite o primeiro número:");
  let num2 = prompt("Digite o segundo número:");
  let operador = prompt("Digite o operador (+, -, *, /, %):");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Erro: Um ou ambos os números são inválidos!");
    continue;
  }

  const resultado = calcular(num1, num2, operador);
  alert(`Resultado: ${resultado}`);

  const continuar = prompt("Deseja fazer outro cálculo? (sim ou não)").toLowerCase();
  if (continuar !== "sim") {
    alert("Programa encerrado. Obrigado por usar!");
    break;
  }
}
