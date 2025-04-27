let boxes = document.querySelectorAll(".box");
let resetButtom = document.querySelector(".resetButton");
let winner = document.querySelector("#winner");
let newGame = document.querySelector(".Startover");

let turnO = false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
    turnO = false;
    for(let box of boxes){
        box.disabled = false;
        box.style.backgroundColor = '#ffffff';
        box.innerText = ""; 
    }
    winner.innerText = "";
};

const start = () => {
    window.location.href = "index.html";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!turnO) {
            box.innerText = "X"; 
            box.disabled = true; 
            turnO = true; 
            checkWinner(); 
            if (!checkWinner()) { 
                computerPlay(); 
            }
        }
    });
});

function computerPlay() {
    let o;
    const emptyBoxes = Array.from(boxes).filter(box => box.innerText === "");
    if (emptyBoxes.length === 0) {
        return; 
    }
    let index = genNUMBER() - 1; 
    while (index >= emptyBoxes.length) {
        index = genNUMBER() - 1;
    }

    o = emptyBoxes[index];

    o.innerText = "O"; 
    o.disabled = true; 
    checkWinner(); 
    turnO = false;
}

function genNUMBER(){
while (true){
    const number = Math.floor(Math.random() * 10);
    if (number >= 1 && number <= 9){
        return number;
    }
}
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="X"){
            winner.innerText = `The winner is X`;
            boxes[pattern[0]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[1]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[2]].style.backgroundColor = '#C2FFC7';
            for(let box of boxes){
                box.disabled = true;
            }
            return;
        }
        else if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="O"){
            winner.innerText = `The winner is Computer`;
            boxes[pattern[0]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[1]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[2]].style.backgroundColor = '#C2FFC7';
            for(let box of boxes){
                box.disabled = true;
            }
            return;
        }
    }
    }
    const allBoxesFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allBoxesFilled) {
        winner.innerText = "It's a draw!";
    }
};

resetButtom.addEventListener("click",reset);
newGame.addEventListener("click",start);
