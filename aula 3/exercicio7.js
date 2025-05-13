function contarPositivosNegativos() {
    let positivos = 0; 
    let negativos = 0;  

    while (true) {
        let numero = parseInt(prompt("Digite um número (digite 0 para sair):"));
        if (numero === 0) {
            break;
        }
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
    }
    document.write("Quantidade de números positivos: " + positivos + "<br>");
    document.write("Quantidade de números negativos: " + negativos);
}

contarPositivosNegativos();
