let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector(".msg");
let main = document.querySelector("main");

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
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "rgb(147, 6, 6)";
        } else {
            box.innerText = "X";
            box.style.color = "green";
        }
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    main.classList.remove("hide");
}

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
}

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3) {
            msg.innerText =`Congratulations!🎉 Winner is Player ${posVal1}👏🏼`;
            msgContainer.classList.remove("hide");
            disableBoxes();
            main.classList.add("hide");
            return;
        }
    }
}

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
