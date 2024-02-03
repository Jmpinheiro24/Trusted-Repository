function toggleLampada() {
    // Obtém o elemento da imagem da lâmpada
    var lampada = document.getElementById('lampada');

    // Verifica se a lâmpada está apagada
    if (lampada.src.endsWith('lampada_apagada.jpg')) {
        // Se estiver apagada, muda para a imagem da lâmpada acesa
        lampada.src = 'lampada_acesa.jpg';
    } else {
        // Se estiver acesa, muda para a imagem da lâmpada apagada
        lampada.src = 'lampada_apagada.jpg';
    }
}