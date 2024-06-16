// select all button boxes
let boxes = document.querySelectorAll(".box");
// select reset button 
let resetBtn = document.querySelector("#reset-btn");
// Select New game Button
let newGameBtn = document.querySelector("#new-btn");
// Select message container who is winner
let msgContainer = document.querySelector(".msg-container");
// Select message print who is winner
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

// array possibility who is winner in this line vertically or horizontally.

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


// Create reset button function
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// this loop moving is each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // playerO
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      // playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

// disabled the box function
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Enabled the box function
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

// This function show who is winner
const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// This function check who is winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

// Create event on the new game button
newGameBtn.addEventListener("click", resetGame);
// Create event on the reset button
resetBtn.addEventListener("click", resetGame);
