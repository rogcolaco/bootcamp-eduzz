let order = [];
let clickedOrder = [];
let score = 0;
let time = 400;

// 0 - vermelho
// 1 - azul
// 2 - amarelo
// 3 - verde

const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


// cria array aleatorio de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order.push(colorOrder);
    clickedOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        darkColor(elementColor , Number(i) + 1)
    }
}

//percorre array de cores sorteadas
let darkColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number-350);
    setTimeout(() => {
        element.classList.remove('selected')
    },number-150);
}

// checa a ordem dos cliques
let checkOrder = () => {
    for (let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação = ${score}\n Você acertou, iniciando próximo nível!!!!`);
        setTimeout(() => {
            nextLevel();
        },2000);
    }
}

// funcao que trata o clique do usuario
let click = (color) => {
    clickedOrder.push(color);
    createColorElement(color).classList.add('selected');
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    },250);

}

// funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0){
        return red;
    }
    else if (color == 1){
        return blue;
    }
    else if (color == 2){
        return yellow;
    }
    else if (color == 3){
        return green;
    }
}

// proximo nivel
let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//funcao perde o jogo
let gameOver = () => {
    alert(`Pontuação = ${score-1}\n GAME OVER \n Clique em OK para iniciar novo jogo!`);
    clickedOrder = [];
    order = [];
    
    playGame();
}

// inicia o jogo
let playGame = () => {
    alert('Bem Vindo! \n Iniciando novo jogo!!!!')
    score = 0;
    nextLevel();
}

red.onclick = () => click(0);
blue.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);

playGame();