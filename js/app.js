/*-------------------------------- Constants --------------------------------*/

  const checkWinIndexes = [
   [0, 1, 2], // top row
   [3, 4, 5], // middle row
   [6, 7, 8], // bottom row
   [0, 3, 6], // left column
   [1, 4, 7], // middle column
   [2, 5, 8], // right column
   [0, 4, 8], // first diagonal
   [2, 4, 6], // second diagonal

  ]

  
/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// can I use the individual ids of the boxes to make a JS board?


// use onload to start game when web page is load. But How?
// onClick will mark select the right box, class = box




function startGame() {
  document.currentPlayer = "X"  // at the start of the game X is the current Player
}

function move(box) {
  const boxIndex = box.id[2]
  if (box.innerText == '') // only mark the box if the str is empty first
  box.innerText = document.currentPlayer // mark box with X when clicked
  nextPlayer()
}

function nextPlayer() {
 if (document.currentPlayer == 'X') {
   document.currentPlayer = 'O'
 } else {
   document.currentPlayer = 'X'
 }
 


}
