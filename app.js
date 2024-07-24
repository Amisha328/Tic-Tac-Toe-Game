let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector(".msg");

let turnO = true; // playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "rgb(147, 6, 6)";
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "green";
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 !== "" && posVal2 !== "" || posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
               msg.innerText = `Congratuation!! Winner is Player ${posVal1}`;
               msgContainer.classList.remove("hide");
               disableBoxes();
            }
        }
    }
}

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);