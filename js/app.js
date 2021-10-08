/*-------------------------------- Constants --------------------------------*/
// const clickedBoxes = document.querySelectorAll("box")
// const gameBoard = document.getElementById("game-play")

// const box = document.querySelector("box")
// const currentGame = Array.from(box)


// const boxes = Array.from(document.getElementById('box'))
// console.log(boxes)

// const gameBoard = () => {
//   boxes.forEach((box,index) => {

//   })
// }

/*---------------------------- Variables (state) ----------------------------*/

// need somewhere to put an array of the current clicked boxes
// let gameBoard = new Array(9).fill("")
// let playerMove = 'X'

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

// document.querySelectorAll('box').map((box) => box.addEventListener('click', (event) => handleBoxClick(event)))

// const handleBoxClick = (Element) => {
//   const index = Element.target.clickedArray[1]

// if(xPlayer) {
//   Element.target.clickedArray.add('x')
//   xPlayer = !xPlayer
// } else {
//   Element.target.clickedArray.add('o')
//   xPlayer = !xPlayer
// }
// console.log(clickedArray)
// }


/*-------------------------------- Functions --------------------------------*/

// function init() {

// const box = document.querySelector('box')
// const currentGame = Array.from(box)
// let gameBoard = [0,1,2,3,4,5,6,7,8]

// box.forEach((box) => {
//   box.addEventListener("click", (event) => {
//     const index = currentGame.indexOf(event.target)
//   }) 
// }) 
// console.log(index)
// }


//use onload to start game when web page is load. But How?
//onClick will mark select the right box, class = box

function startGame() {
  document.currentPlayer = "X"  // at the start of the game X is the current Player
}

function move(box) {
  box.innerText = document.currentPlayer // mark box with X when clicked
}
