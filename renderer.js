
let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;


const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

// Win combinations
const winLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],   
  [0, 3, 6], [1, 4, 7], [2, 5, 8],   
  [0, 4, 8], [2, 4, 6]             
];

// Returns true if the current player has three in a row
function hasWon() {
  for (let i = 0; i < winLines.length; i++) {
    const line = winLines[i];
    const a = line[0];
    const b = line[1];
    const c = line[2];

    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }
  return false;
}


function showBoard() {
  for (let i = 0; i < 9; i++) {
    if (board[i] === "X") {
      cells[i].innerHTML = '<img src="face-x.png" class="face">';
    } else if (board[i] === "O") {
      cells[i].innerHTML = '<img src="face-o.png" class="face">';
    } else {
      cells[i].innerHTML = "";
    }
  }
}


function playMove(position) {
  if (gameOver === true || board[position] !== "") {
    return;
  }

  board[position] = player;
  showBoard();

  if (hasWon()) {
    message.textContent = player + " wins!";
    gameOver = true;
  } else if (!board.includes("")) {
    message.textContent = "It's a draw!";
    gameOver = true;
  } else {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
    message.textContent = player + "'s turn";
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  gameOver = false;
  message.textContent = "X's turn";
  showBoard();
}


for (let i = 0; i < 9; i++) {
  cells[i].onclick = function () {
    playMove(i);
  };
}

resetButton.onclick = resetGame;