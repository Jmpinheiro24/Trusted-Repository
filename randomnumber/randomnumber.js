function gerarNumeroAleatorio() {
    // Gera um número aleatório de 1 a 10
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    // Exibe o número gerado
    document.getElementById('resultado').textContent = 'Número Aleatório: ' + numeroAleatorio;
}