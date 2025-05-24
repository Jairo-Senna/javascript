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

