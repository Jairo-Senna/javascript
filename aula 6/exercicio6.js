function gerenciarProdutos(produtos, comando, nomeProduto, novaQuantidade) {
  switch (comando) {
    case "listarDisponiveis":
      return produtos.filter(produto => produto.estoque > 0);

    case "buscarProduto":
      return produtos.find(produto => produto.nome === nomeProduto);

    case "calcularValorTotal":
      return produtos.reduce((total, produto) => total + (produto.preco * produto.estoque), 0);

    case "atualizarEstoque":
      const produto = produtos.find(p => p.nome === nomeProduto);
      if (produto) {
        produto.estoque = novaQuantidade;
      }
      return;

    default:
      return "Comando inválido.";
  }
}

const produtos = [
  { nome: "Celular", preco: 2000, estoque: 5 },
  { nome: "Notebook", preco: 3500, estoque: 0 },
  { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

console.log(gerenciarProdutos(produtos, "listarDisponiveis"));

console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));

console.log(gerenciarProdutos(produtos, "calcularValorTotal"));

gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log(produtos[1].estoque);  
