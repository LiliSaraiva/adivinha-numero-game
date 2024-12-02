# 🎮 JS Game: Descubra o Número Secreto

Bem-vindo ao **JS Game: Descubra o Número Secreto**! Este é um jogo simples onde o jogador tenta adivinhar um número secreto entre 1 e 100. 

## 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura básica da página
- **CSS**: Estilos e layout da página
- **JavaScript**: Lógica do jogo e interatividade

## 📂 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Contém a estrutura HTML da página.
- `style.css`: Contém os estilos CSS para a página.
- `app.js`: Contém a lógica do jogo em JavaScript.

## 📄 Código HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>JS Game</title>
</head>
<body>
    <div class="container">
        <div class="container__conteudo">
            <img src="./img/robot.png" alt="robô mergulhador" class="container__imagem-robo" />
            <div class="container__informacoes">
                <img src="./img/trophy.png" alt="ícone de um troféu" />
                <div class="container__texto">
                    <h1 id="titulo-principal">Vamos jogar!</h1>
                    <h2 id="subtitulo">Descubra o número secreto entre 1 e 100</h2>
                    <input type="number" id="input-palpite" placeholder="Seu palpite">
                    <button id="botao-palpite" class="container__botao">Enviar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js" defer></script>
</body>
</html>
