let boxes = document.querySelectorAll(".box");
let resetButtom = document.querySelector(".resetButton");
let winner = document.querySelector("#winner");
let newGame = document.querySelector(".Startover");

let player1 = prompt("Player 1");
let player2 = prompt("Player 2");

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

const start = () => {
    window.location.href = "index.html";
};

const reset = () => {
    let temp = player1;
    player1 = player2;
    player2 = temp;
    turnO = false;
    for(let box of boxes){
        box.disabled = false;
        box.style.backgroundColor = '#ffffff';
        box.innerText = ""; 
    }
    winner.innerText = "";
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
        box.innerText = "O";
        turnO = false;
        } 
        else{
            box.innerText = "X";
            turnO = true;
        }    
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="X"){
            winner.innerText = `The winner is ${player1}`;
            boxes[pattern[0]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[1]].style.backgroundColor = '#C2FFC7';
            boxes[pattern[2]].style.backgroundColor = '#C2FFC7';
            for(let box of boxes){
                box.disabled = true;
            }
            return;
        }
        else if(pos1Val === pos2Val && pos2Val === pos3Val && pos1Val==="O"){
            winner.innerText = `The winner is ${player2}`;
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



