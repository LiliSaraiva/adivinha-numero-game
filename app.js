document.addEventListener("DOMContentLoaded", function() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const inputPalpite = document.getElementById("input-palpite");
    const botaoPalpite = document.getElementById("botao-palpite");
    const tituloPrincipal = document.getElementById("titulo-principal");
    const subtitulo = document.getElementById("subtitulo");

    // Função para verificar o palpite
    function verificarPalpite() {
        let palpite = parseInt(inputPalpite.value);
        tentativas++;

        if (palpite === numeroSecreto) {
            tituloPrincipal.textContent = "Você acertou!";
            subtitulo.textContent = `Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}.`;
            botaoPalpite.textContent = "Jogar novamente";
            botaoPalpite.addEventListener("click", reiniciarJogo);
        } else if (palpite > numeroSecreto) {
            tituloPrincipal.textContent = "Você errou!";
            subtitulo.textContent = `Tentativa ${tentativas}: O número secreto é menor que seu palpite.`;
        } else {
            tituloPrincipal.textContent = "Você errou!";
            subtitulo.textContent = `Tentativa ${tentativas}: O número secreto é maior que seu palpite.`;
        }
    }

    // Função para reiniciar o jogo
    function reiniciarJogo() {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        inputPalpite.value = '';
        tituloPrincipal.textContent = "Vamos jogar!";
        subtitulo.textContent = "Descubra o número secreto entre 1 e 100";
        botaoPalpite.textContent = "Enviar";
        botaoPalpite.removeEventListener("click", reiniciarJogo);
        botaoPalpite.addEventListener("click", verificarPalpite);
    }

    // Evento de clique no botão
    botaoPalpite.addEventListener("click", verificarPalpite);

    // Evento de tecla Enter no campo de entrada
    inputPalpite.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            verificarPalpite();
        }
    });
});
