function executarComAtraso(mensagem, callback) {
  setTimeout(() => {
    console.log(mensagem); 
    if (typeof callback === "function") {
      callback();
    }
  }, 2000);
}


function saudacaoFinal() {
  console.log("Saudação final: Seja bem-vindo ao nosso sistema!");
}

executarComAtraso("Aguarde... carregando informações.", saudacaoFinal);
