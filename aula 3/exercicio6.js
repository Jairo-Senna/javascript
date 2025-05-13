function somaPares() {
    let N = parseInt(prompt("Digite um número inteiro N:"));

    let soma = 0;
    for (let i = 1; i <= N; i++) {
        
        if (i % 2 === 0) {
            soma += i;
        }
    }
    document.write("A soma dos números pares de 1 até " + N + " é: " + soma);
}

somaPares();
