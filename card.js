// export class Card {

//     x = 50;
//     y = 50;
//     width = 50;
//     height = 50;
//     canvas;
//     pencil;


//     constructor(canvas, pencil) {
//         this.canvas = canvas;
//         this.pencil = pencil;
//     }
// }


//tutorial below
// let cardList = [
//     "Red",
//     "Blue",
//     "Green",
//     "Yellow",
//     "Orange",
//     "Purple",
//     "Brown",
// ]

// let cardSet;
// let board = [];
// let rows = 4;
// let columns = 5;

// window.onload = function() {
//     shuffleCards();
//     startGame();
// }

// function shuffleCards() {
//     cardSet = cardList.concat(cardList); //two of each card
//     console.log(cardSet);
//     //shuffle
//     for (let i = 0; i < cardSet.length; i++) {
//         let j = Math.floor(Math.random() * cardSet.length); //get random index
//         //swap
//         let temp = cardSet[i];
//         cardSet[i] = cardSet[j];
//         cardSet[j] = temp;
//     }
//     console.log(cardSet)
// }

// function startGame() {
//     //arange the board 4x5
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < columns; c++) {
//             let cardImg = cardSet.pop()
//         }
//     }
// }
//tutorial above