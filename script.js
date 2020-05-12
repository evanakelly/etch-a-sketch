const container = document.querySelector('#container');

function makeDivs() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
};

function makeBoard(boardSize) {
    if (boardSize <1) {
        boardSize = 1;
    }
    for (i=0; i<(Math.pow(boardSize,2)); i++){
        makeDivs();
    }
    let w = container.offsetWidth;
    let squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.style.width = ((w/boardSize)+'px');
        square.style.height = ((w/boardSize)+'px');
    })
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('on');
        })
    })
};

let numStart = 16;
makeBoard(numStart);

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener("click", () => {
    let size = prompt("What width to redraw?", 16);
    document.querySelectorAll('div.square').forEach(function(x) {
        x.remove();
    })
    makeBoard(size);
});

const colorButton = document.querySelector('#color-button');

function randColor() {
    return `rgb(${Math.round(Math.random()*255)}, 
    ${Math.round(Math.random()*255)},
     ${Math.round(Math.random()*255)})`;
};

function colorIt() {
    document.querySelectorAll('div.square').forEach(function(e) {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = randColor();
            e.style.opacity = '1.0';
        })
    })
};

colorButton.addEventListener('click', colorIt) 


const greyButton = document.querySelector('#grey-button');

let op = 0.0;

greyButton.addEventListener('click', shadeIt);

function shadeIt() {
    document.querySelectorAll('div.square').forEach(function(e) {
        //x.removeEventListener('mouseenter', );
        let opIncrement = 0.1;
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = 'rgb(0,0,0)';
            if (opIncrement <=0.9) {
                opIncrement += 0.1;
            }
            e.style.opacity = `${op+opIncrement}`;
        })
    })
};


