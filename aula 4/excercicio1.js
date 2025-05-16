function verificarIdade(nome = "visitante", idade) {
  if (idade < 0 || idade > 120) {
    alert("Idade inválida. Digite uma idade entre 0 e 120.");
    return;
  }

  if (idade < 18) {
    alert(`Olá, ${nome}! Você é menor de idade.`);
  } else {
    alert(`Olá, ${nome}! Você é maior de idade.`);
  }
}

while (confirm("Deseja verificar uma idade?")) {
  const nome = prompt("Digite o nome da pessoa:");
  const idadeStr = prompt("Digite a idade da pessoa:");
  const idade = parseInt(idadeStr);

  if (isNaN(idade)) {
    alert("Idade inválida. Por favor, digite um número.");
    continue;
  }

  verificarIdade(nome || "visitante", idade);
}
