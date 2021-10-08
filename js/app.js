/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let player = []
let gameBoard = ["", "", "", "", "", "", "", "", ""]
const winnerOfGame = function () {
  let winningPlayer = null

  const checkWinIndexes = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // first diagonal
    [2, 4, 6] // second diagonal
  ]


/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
  let board = document.getElementById('')
}