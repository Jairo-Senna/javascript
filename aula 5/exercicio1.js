function gerenciarTarefas(tarefas, acao, novaTarefa) {
  switch (acao) {
    case "adicionarInicio":
      if (novaTarefa) tarefas.unshift(novaTarefa);
      break;
    case "adicionarFim":
      if (novaTarefa) tarefas.push(novaTarefa);
      break;
    case "removerInicio":
      tarefas.shift();
      break;
    case "removerFim":
      tarefas.pop();
      break;
    default:
      console.log("Ação inválida.");
  }
}

const tarefas = ["Estudar", "Treinar", "Ler"];

const acao = prompt("Digite a ação:\n- adicionarInicio\n- adicionarFim\n- removerInicio\n- removerFim");

let novaTarefa = null;
if (acao === "adicionarInicio" || acao === "adicionarFim") {
  novaTarefa = prompt("Digite a nova tarefa:");
}

gerenciarTarefas(tarefas, acao, novaTarefa);

console.log("Tarefas atualizadas:", tarefas);
alert("Tarefas atualizadas:\n" + tarefas.join("\n"));