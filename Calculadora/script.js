function realizarOperacao(operacao) {
    // Obtém os valores dos inputs
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);

    // Verifica se os valores são numéricos
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultado').textContent = 'Por favor, insira números válidos.';
        return;
    }

    // Realiza a operação selecionada
    switch (operacao) {
        case 'soma':
            document.getElementById('resultado').textContent = 'Resultado: ' + (numero1 + numero2);
            break;
        case 'subtracao':
            document.getElementById('resultado').textContent = 'Resultado: ' + (numero1 - numero2);
            break;
        case 'multiplicacao':
            document.getElementById('resultado').textContent = 'Resultado: ' + (numero1 * numero2);
            break;
        case 'divisao':
            // Verifica se o divisor é zero
            if (numero2 === 0) {
                document.getElementById('resultado').textContent = 'Não é possível dividir por zero.';
            } else {
                document.getElementById('resultado').textContent = 'Resultado: ' + (numero1 / numero2);
            }
            break;
        default:
            document.getElementById('resultado').textContent = 'Operação inválida.';
    }
}