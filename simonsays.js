let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four"];
let cycle = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   if(started == false){
      console.log("game started");
      started = true;


      levelUp();
   }
});


function gameFlash(btn){
    btn.classList.add("gamebtnflash");
    setTimeout(function(){
      btn.classList.remove("gamebtnflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userbtnflash");
    setTimeout(function(){
      btn.classList.remove("userbtnflash");
    },250);
}

function levelUp(){
   let prevLevel = level;
   console.log(prevLevel);
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
   
   let randIdx = Math.floor(Math.random() * 3);
   let randcolor = btns[randIdx];
   let randBtn = document.querySelector(`.${randcolor}`);
   gameSeq.push(randcolor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){

  if(userSeq[idx] == gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,100);
   }
  }
  else{
   h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to restart`;
   document.querySelector("body").style.backgroundColor = "red";
   setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
   }, 150);
   cycle.push(level);
   let prevlevel = level;
   reset();

   console.log(`Prev score is ${prevlevel}`)
   console.log(cycle);
   let max = cycle[0];
   for(let i=0; i<cycle.length; i++){
      if(max<cycle[i]){
         max = cycle[i]
      }
      console.log(`max is ${max}`);
   }
   h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Highest Score is ${max} <br>Press any key to restart`;
  }
} 

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click", btnPress);
}

function reset(){
   started = false;
   level = 0;
   gameSeq = [];
   userSeq = [];
}

