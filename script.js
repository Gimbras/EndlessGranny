//set canvas 
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.backgroundColor = "#566c56";
canvas.style.border= "30px solid #1d1513";
let intervalId = 0; 
let cWidth = canvas.width;
let cHeight = canvas.height;
let isGameOver = false;
let score = 0;

//off canvas buttons
let start = document.querySelector('#start')


let restart = document.querySelector('#Restart')

//let player
let myGranny = new Image();
myGranny.src = './Images/pixil-frame-0.png';



//set 2 obstacle
let stairs1 = new Image();
stairs1.src = './Images/stairs.png';
let stairs1x =900;
let stairs2x =1200;

let stairs2 = new Image();
stairs2.src = './Images/stairs.png';

//put player on canvas
function drawplayer (){
    ctx.drawImage(myGranny, 20, 506);
   
}
  function drawstairs1 (){
    ctx.drawImage(stairs1, 900, 550, 50 ,50);
   }

//create an array of stairs then loop over them 
let stairsArr = [
    {x: stairs1x, y: 550}, 
    {x: stairs2x, y: 550},
]



//request  animation frame 



//make granny jump


////////////////////////////////////////////

//put fire on canvas --> takes granny out

//gamne functiuon that ill evoce all tother functions

//window event listener




// event listner key up --> window.addEventListener("keyup", keyup_handler, false);

//function fire move

//function start

//put player on canvas
// function drawplayer (){
//     ctx.drawImage(myGranny, 20, 506);
   
// }
// function drawstairs1 (){
//     ctx.drawImage(stairs1, 900, 550, 50 ,50);
//    }


//draw
function draw(){
    drawplayer()
    //drawstairs1()
console.log("Draw function called")
  for (let i=0; i<stairsArr.length; i++ ) {
        ctx.drawImage(stairs1, stairsArr[i].x, stairsArr[i].y)
        stairsArr[i].x = stairsArr[i].x - 3

        if(stairsArr[i].x + stairs1.width < 0 ) {
            stairsArr[i].x = canvas.width
        
    }

    intervalId = requestAnimationFrame(draw)

}



window.addEventListener('load', () => {
    draw()
    // document.addEventListener('#start', () => {
        

})
}