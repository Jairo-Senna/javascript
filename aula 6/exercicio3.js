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