//set canvas 
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border= "30px solid #1d1513";
let cWidth = canvas.width;
let cHeight = canvas.height;
let isGameOver = false;
let score = 0;
let speed = 4
let jump = false;
let splashScreen = document.getElementById('SplashScreen');
let gameScreen = document.getElementById('gamePage');
let gameOverScreen = document.getElementById('gameOverPage');
let audio = new Audio();
// let done = false;


// let thisTimeout = setTimeout(function() {
//     myFunction();
// }, 1000);

// if ((myGrannyY >= 400) && !done) {
//     myFunction();
// }

// function myFunction() {
//     clearTimeout(thisTimeout);
//     done = true;
//     // Do stuff
// }


let bg = new Image ();
bg.src = './Images/sky.jpg';

//off canvas buttons
let start = document.querySelector('#start')


let restart = document.querySelector('#restart')

//let player
let myGranny = new Image();
myGranny.src = './Images/pixil-frame-0.png';
let myGrannyX = 20, myGrannyY = 500  ;

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
    {x: stairs2x + 500, y: stairsy},
    {x: stairs3x + 1000, y: stairsy},
]

//put player on canvas
function drawplayer (){
    ctx.drawImage(myGranny, myGrannyX, myGrannyY, 100, 100 );
   
}

function drawstairs (){
    
    
 
    for (let i=0; i<stairsArr.length; i++ ) {
        ctx.drawImage(stairs, stairsArr[i].x +20, stairsArr[i].y, 50, 50)
        stairsArr[i].x = stairsArr[i].x - speed

    
    if (myGrannyX < stairsArr[i].x + 40 &&
        myGrannyX + 80 > stairsArr[i].x &&
        myGrannyY < stairsArr[i].y + 40 &&
        80 + myGrannyY > stairsArr[i].y) {
            isGameOver = true;
        }
        if(stairsArr[i].x <= myGrannyX && stairsArr[i].x >= myGrannyX - 10){
            score++
        }
         if(stairsArr[i].x + stairs.width < 0 ) {
        //     score += 6;
             stairsArr[i].x = 1000 
        //     //1st set doesnt count
         }
        document.getElementById('score').innerText = score; 
        if(score >= 25){
            speed = 9
        }
   }



}



//Start screen


//Game Over
function showGameOver(){
    if(isGameOver == true){
        gameScreen.style.display = "none";
        splashScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        audio.pause();
        score = 0

    }
}


function resetAll() {
    myGrannyY = 506;
    myGrannyX = 20;
    stairsArr = [
        {x: stairs1x, y: stairsy}, 
        {x: stairs2x, y: stairsy},
        {x: stairs3x, y: stairsy},
    ]
}

//

//Function jummp + speed

function move (){
    if(jump && myGrannyY > 400){
       myGrannyY = myGrannyY -3.5
    //    if(myGrannyY = 400){
    //        jump = false
    //    }
       
    }
    if(jump == false && myGrannyY <= 500){
        myGrannyY = myGrannyY + 4
    }


}

// //splash
// function splash(){
//     restart.style.display = 'none'
//     start.style.display = 'block'
//     canvas.style.display = 'none'
// }

//draw
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0 , 0)
    drawplayer()
    move()
    
    drawstairs()
    updateScore()
    showGameOver()
    
    background.onload = function(){
        ctx.drawImage(background,0,0);   
    }
    if (isGameOver == true){
        cancelAnimationFrame(intervalId)
      

    }
    else {
        intervalId = requestAnimationFrame(draw)

    }
    
}


function updateScore () {
    ctx.font = "24px Brush Script MT";
    ctx.fillText(`Score: ${score}`, 20, 40);
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
    gameScreen.style.display = "none";
    splashScreen.style.display = "block";
    gameOverScreen.style.display = "none"


    
        start.addEventListener('click',()=>{
            gameScreen.style.display = "block";
            splashScreen.style.display = "none";
            gameOverScreen.style.display = "none"
            
            audio.src = "./Audio/BeeGees.mp3";
            audio.play()
            audio.volume = 0.1;
            draw()

        })

        restart.addEventListener('click', ()=>{
            gameScreen.style.display = "none";
            splashScreen.style.display = "block";
            gameOverScreen.style.display = "none";
            isGameOver = false;
       //     score = 0;
            myGrannyX = 20; 
            myGrannyY = 500;
            stairs1x =800;
            stairs2x =1100;
            stairsy = 550
            stairs3x =1500;
            stairsArr = [
                {x: stairs1x, y: stairsy}, 
                {x: stairs2x, y: stairsy},
                {x: stairs3x, y: stairsy},
            ]
        

        })
        
})
