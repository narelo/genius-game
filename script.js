let order = []; //ordens das luzes
let clickedOrder = []; //ordem dos cliques
let score = 0; //pontos

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {//cria ordem aleatória de cores
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {//acende a próxima cor
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkOrder = () => {//checa se os botões clicados são os mesmos da ordem gerada no jogo
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nParabéns! Inicie próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {//função para o click do usuário
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

let createColorElement = (color) => {//retorna a cor
    if(color == 0){ return green; } 
    else if(color == 1){ return red; } 
    else if (color == 2){ return yellow; } 
    else if (color == 3){ return blue; }
}

let nextLevel = () => {//próximo nível
    score++;
    shuffleOrder();
}

let gameOver = () => {//game over
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo :(\nClique em OK para jogar novamente!`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {//start
    alert('Bem vindo ao Genius! Inicie o jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();