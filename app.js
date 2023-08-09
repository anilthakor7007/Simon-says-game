//sequences 
let gameSeq = [];
let userSeq = [];
console.log(gameSeq);

const colorBtns = ["red","green","yellow","purple"];

//variables declaration 
let gameStarted = false;
let level = 0;
let yourScore = 0;
let highScore = 0;


// select elements from document
let yScore = document.querySelector(".yScore");
let hScore = document.querySelector(".hScore");
let gameArea = document.querySelector(".game");

h2 = document.querySelector("h2");


//start game process step 1
document.addEventListener("keypress", ()=>{
    if(gameStarted == false){
     console.log("game started");
     gameStarted = true;
     levelUp();
    }

});

//btn flash and level up (step 2)
//by game
function gameFalsh(btn){
    btn.classList.add("flash");

    setTimeout(()=>{
      btn.classList.remove("flash");
    },300);
}

//by user
function userFalsh(btn){
    btn.classList.add("userFlash");

    setTimeout(()=>{
      btn.classList.remove("userFlash");
    },250);

}

//gameover
function overScren(area){
    area.classList.add("gameArea");

    setTimeout(()=>{
      area.classList.remove("gameArea");
    },200);


}

function levelUp(){
    userSeq=[];
    yScore.innerHTML = `Your Score : <span>${level} </span>`;
    if(highScore < level){
        highScore = level;
    }

    level++;
    h2.innerText = `Level ${level}`;

   
    //random colorbtn generate
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = colorBtns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    gameFalsh(randomBtn);
}

//check the sequence (step 4)
function checkSeq(idx){
if(userSeq[idx] === gameSeq[idx]){
if(userSeq.length == gameSeq.length){
    setTimeout(() => {
        levelUp();
    }, 800);
}
}
else{
    h2.innerHTML = `<span>Game Over! </span> Press <span>any key</span> to Start`;
    hScore.innerHTML = `High Score : <span>${highScore} </span>`;
    overScren(gameArea);
    gameReset();
}

}

//button access and press the sequence (step 3)
function btnPress(){
   let btn = this;
   userFalsh(btn);
   console.log(this);
    
   //get user color
   let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkSeq(userSeq.length - 1);
   

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}

//reset the game  (step 5)
function gameReset(){
    gameStarted = false;
    level = 0;
    gameSeq = [];
    userSeq = [];

}

//showing (step 6)
yScore.innerHTML = `Your Score : <span>${level} </span>`;
hScore.innerHTML = `High Score : <span>${highScore} </span>`;





