/*-------------------------------- Constants --------------------------------*/

  const winIndexes = [
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

let board = [null, null, null, null, null, null, null, null, null]
let clickedBoxes, currentPlayer, winner

/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.board')
const boxes = document.querySelectorAll('.box')


/*----------------------------- Event Listeners -----------------------------*/

boxes.forEach((box) => {
  box.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  clickedBoxes = [null, null, null, null, null, null, null, null, null] // no player is yet on the board
  currentPlayer = 1
  winner = null
  render()
}

function render() {
  for (i = 0; i < clickedBoxes.length; i++) {
    if (clickedBoxes[i] === 1) {
      boxes[i].innerText = 'X'
    } else if (clickedBoxes[i] === -1) {
      boxes[i].innerText = 'O'
    } else {
      boxes[i].innerText = ''
    }
  }
}

function handleClick(event) {
  let i = parseInt(event.target.id[2]) // what is the id of the clicked box // I now know that parseInt needs a number only in order to work, that took forever 
  if (clickedBoxes[i] !== null) {
  return
  }
 
clickedBoxes[i] = currentPlayer
currentPlayer = currentPlayer * -1

render() // render function does not need innerText of boxes, just update clickedBoxes & call render
}

