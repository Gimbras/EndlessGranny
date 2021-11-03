//set canvas 
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.backgroundColor = "#566c56";
canvas.style.border= "30px solid #1d1513";
let cWidth = canvas.width;
let cHeight = canvas.height;
let isGameOver = false;
let score = 0;
let jump = false;
let onPlateform = true


//off canvas buttons
let start = document.querySelector('#start')


let restart = document.querySelector('#Restart')

//let player
let myGranny = new Image();
myGranny.src = './Images/pixil-frame-0.png';
let myGrannyX = 20, myGrannyY = 506  ;

//background
let background = new Image();
background.src = "./Images/bg.gif";



//set 2 obstacle
let stairs = new Image();
stairs.src = './Images/stairs.png';
let stairs1x =800;
let stairs2x =1100;
let stairsy = 550
let stairs3x =1500;
let stairsw = stairs.width
//create an array of stairs then loop over them 
let stairsArr = [
    {x: stairs1x, y: stairsy}, 
    {x: stairs2x, y: stairsy},
    {x: stairs3x, y: stairsy},
]

//put player on canvas
function drawplayer (){
    ctx.drawImage(myGranny, myGrannyX, myGrannyY);
   
}

function drawstairs (){
 
    for (let i=0; i<stairsArr.length; i++ ) {
        ctx.drawImage(stairs, stairsArr[i].x, stairsArr[i].y, 50, 50)
        stairsArr[i].x = stairsArr[i].x - 0.7     

        if(stairsArr[i].x + stairs.width < 0 ) {
            stairsArr[i].x = 1000 //
        }
   }
}

//Function boot

function move (){
    if(jump && myGrannyY > 420){
       myGrannyY = myGrannyY -2
       
    }
    if(jump == false && myGrannyY <= 500){
        myGrannyY = myGrannyY + 3
    }
    // if (!jump && onPlateform) {
    //     myGrannyY = myGrannyY - 20
    //     jump = true
    // } else if(myGrannyY <= 500) {
    //     myGrannyY = myGrannyY + 20
    // }

}

  //request  animation frame (in the end)



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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawplayer()
    move()
    
    drawstairs()
    //move not working just makes it harder
    
    
    // if (snailX == tanks[i].x +  tankW) {
    //     score++
    // }
    background.onload = function(){
        ctx.drawImage(background,0,0);   
    }
    
    intervalId = requestAnimationFrame(draw)
}


document.addEventListener('keydown', (event) => {
if(event.key == ' ' & (myGrannyY >= 419) ) {
  jump = true
} 
})
document.addEventListener('keyup', (event) => {
    if(event.key == ' '){
    jump = false
    } 
})
window.addEventListener('load', () => {

    // document.addEventListener('#start', () => {
        start.addEventListener('click',()=>{
            draw()
        })

        restart.addEventListener(' click',()=>{

        })
        
})
