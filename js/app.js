/*-------------------------------- Constants --------------------------------*/

  const winningCombos = [
   [0, 1, 2], // top row
   [3, 4, 5], // middle row
   [6, 7, 8], // bottom row
   [0, 3, 6], // left column
   [1, 4, 7], // middle column
   [2, 5, 8], // right column
   [0, 4, 8], // first diagonal
   [2, 4, 6], // second diagonal

  ]

/*---------------------------- letiables (state) ----------------------------*/

//let board = [null, null, null, null, null, null, null, null, null]
let board, currentPlayer, winner

/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.board')
const boxes = document.querySelectorAll('.box')
const gameStatus = document.querySelector('#message')
const replayButton = document.querySelector('button')


/*----------------------------- Event Listeners -----------------------------*/

boxes.forEach((box) => {
  box.addEventListener('click', handleClick)
})

replayButton.addEventListener('click', init)// replay button just needs to call the init function and then render

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null] // no player is yet on the board
  currentPlayer = 1
  winner = null
  gameStatus.innerText = ''
  render()
}

function render() {
  if (currentPlayer === 1) {
    gameStatus.innerText = 'Choose a box player X '
  } else if (currentPlayer === -1) {
    gameStatus.innerText = 'Your turn player O '
  }
  for (i = 0; i < board.length; i++) {
    if (board[i] === 1) {
      boxes[i].innerText = 'X'
    } else if (board[i] === -1) {
      boxes[i].innerText = 'O'
    } else {
      boxes[i].innerText = ''
     }
    }
    if (winner !== null) {
			updateWin(winner)
			return
		}
}

function updateWin(winner) {
  if (winner === 1) {
    gameStatus.innerText = "X wins!"
  } else if (winner === -1) {
    gameStatus.innerText = "O wins!"
  } else if (winner === 'T') {
    gameStatus.innerText = "It's a Draw!"
  }
  return
}

function handleClick(event) {
  let i = parseInt(event.target.id[2]) // what is the id of the clicked box // I now know that parseInt needs a number only in order to work, that took forever 
  if (board[i] !== null || winner !== null) {
		return
	}
board[i] = currentPlayer
currentPlayer = currentPlayer * -1

getWinner()
render() // render function does not need innerText of boxes, just update board & call render
}

function getWinner() {
	winningCombos.forEach(function (combo) {
		let counter = 0
		combo.forEach(function (num) {
			counter += board[num]
			if (Math.abs(counter) === 3) {
				winner = counter / 3
			} else if (winner === null && !board.includes(null)){
        winner = 'T'
			}
		})
	})
}
