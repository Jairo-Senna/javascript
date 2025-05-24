function exibirCatalogo(produtos) {
  console.log("Catálogo de Produtos:");
  
  for (let i in produtos) {
    const produto = produtos[i];
    console.log(`${produto.nome} - R$${produto.preco}`);
  }
}

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Webcam", preco: 250 }
];

exibirCatalogo(produtos);
