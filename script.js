const container = document.querySelector('#container');

function makeDivs() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

function makeBoard(boardSize) {
    for (i=0; i<(Math.pow(boardSize,2)); i++){
        makeDivs();
    };
    let w = container.offsetWidth;
    let sq = document.querySelectorAll('div.square');
    sq.forEach((square) => {
        square.style.width = ((w/boardSize));
        square.style.height = ((w/boardSize));
        console.log(square.style.width);
        console.log(square.style.height);
    })
};

let numStart = 16;
makeBoard(numStart);

function addOn() {
    let squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('on');
        });
    });
}

addOn();

const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener("click", () => {
    let size = prompt("What width to redraw?", 16);
    document.querySelectorAll('div.square').forEach(function(x) {
        x.remove();
    });

    makeBoard(size);
    addOn();

});