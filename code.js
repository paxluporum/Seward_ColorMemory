import { Toolbox } from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil
let toolbox = new Toolbox();

function gameLoop() {

// let myFavoriteLetters = ["a", "b", "c"];
console.log(toolbox.getRandomColor());

pencil.fillStyle = toolbox.getRandomColor();
pencil.fillRect(50, 50, 100, 100);

}
setInterval(gameLoop, 50);
//HANDLES Timer
let time = 0;

//score goes up every second
function raiseTime() {
    time += 1;
    let timeElement = document.getElementById("timeDisplay");
    timeElement.innerHTML = "TIME" + time;
}
setInterval(raiseTime, 1000);