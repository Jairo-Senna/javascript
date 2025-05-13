function imprimirSequencia(valorInicial, valorFinal) {
    
    if (valorInicial <= valorFinal) {
        
        for (let i = valorInicial; i <= valorFinal; i++) {
            document.write(i + " "); 
        }
    } else {
        document.write("Valor inicial não pode ser maior que o valor final.");
    }
}
let valorInicial = parseInt(prompt("Digite o valor inicial:"));
let valorFinal = parseInt(prompt("Digite o valor final:"));

imprimirSequencia(valorInicial, valorFinal);
