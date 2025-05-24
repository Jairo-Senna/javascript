//exercicio 1 /////////////////////////////////////////////////////////////////////////

function criarUsuario(nome, idade, email) {
  return { nome, idade, email };
}

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
console.log(usuario);


//exercicio 2 /////////////////////////////////////////////////////////////////////////

function atualizarIdade(usuario, novaIdade) {
  usuario.idade = novaIdade;
}


const usuario = { nome: "Marcos", idade: 19, email: "marquinhos@hotmail.com" };

atualizarIdade(usuario, 25);

console.log(usuario.idade);  



//exercicio 3 /////////////////////////////////////////////////////////////////////////

function explorarObjeto(objeto, operacao) {
  if (operacao === "chaves") {
    return Object.keys(objeto);
  } else if (operacao === "valores") {
    return Object.values(objeto);
  } else if (operacao === "entradas") {
    return Object.entries(objeto);
  } else {
    return "Operação inválida.";
  }
}

const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));   
console.log(explorarObjeto(pessoa, "valores"));  
console.log(explorarObjeto(pessoa, "entradas")); 
console.log(explorarObjeto(pessoa, "teste"));   

//exercicio 4 /////////////////////////////////////////////////////////////////////////

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


//exercicio 5 /////////////////////////////////////////////////////////////////////////

function protegerObjeto(objeto, modo) {
  if (modo === "extensivel") {
    Object.preventExtensions(objeto);
  } else if (modo === "selado") {
    Object.seal(objeto);
  } else if (modo === "congelado") {
    Object.freeze(objeto);
  } else {
    return { erro: "Modo de proteção inválido." };
  }

  return {
    extensivel: Object.isExtensible(objeto),
    selado: Object.isSealed(objeto),
    congelado: Object.isFrozen(objeto)
  };
}
const produto = { nome: "Câmera", preco: 1200 };
const resultado = protegerObjeto(produto, "congelado");
console.log(resultado);



//exercicio 6 /////////////////////////////////////////////////////////////////////////

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
