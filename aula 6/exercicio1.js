function criarUsuario(nome, idade, email) {
  return { nome, idade, email };
}

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
console.log(usuario);
