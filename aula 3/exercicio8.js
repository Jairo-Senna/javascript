
function solicitarSenha() {
    const senhaCorreta = "2025"; 
    let senhaDigitada;
    do {
        senhaDigitada = prompt("Digite a senha:");
        if (senhaDigitada !== senhaCorreta) {
            document.write("Senha incorreta. Tente novamente.<br>");
        }
    } while (senhaDigitada !== senhaCorreta);
    document.write("Acesso liberado.");
}
solicitarSenha();
