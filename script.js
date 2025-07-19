
let options = document.querySelectorAll("#rock, #paper, #scissor");
let user_Score = document.querySelector("#user-score");
let comp_Score = document.querySelector("#comp-score");
let draw_Score = document.querySelector("#draw");
let scorecard = document.querySelectorAll(".scorecard");
let winMsg = document.querySelector(".msg");
let reStart = document.querySelector(".reStart");

let userScore = 0;
let compScore = 0;
let drawScore = 0;

let compChoice = () =>{
    let opt = ["rock","paper","scissor"];
    let randIndx = Math.floor(Math.random()*3);
    return opt[randIndx];
}

reStart.addEventListener("click",()=>{
     userScore = 0;
     compScore = 0;
     drawScore = 0;
     user_Score.textContent = userScore;
     comp_Score.textContent = compScore;
     draw_Score.textContent = drawScore;
})


let showWinner =(userWin)=>{
    if(userWin){
        userScore++;
        user_Score.textContent = userScore;
        winMsg.innerHTML = "You Win!"
        winMsg.style.fontSize = "40px" 
    }
    else{
        compScore++;
        comp_Score.textContent = compScore;
        winMsg.innerHTML = "Computer Win!"
        winMsg.style.fontSize = "40px" 
    }
}

let drawGame = ()  =>{
    drawScore++;
    draw_Score.textContent = drawScore;
    winMsg.innerHTML = "Game Draw!"
}

let playGame = (userChoice)=>{
    let comp = compChoice();
    if (userChoice === comp) {
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
           userWin= comp == "paper" ? false:true; 
        }else if(userChoice==="paper"){
            userWin= comp === "scissors" ? false:true;
        }else{
            userWin = comp === "rock" ? false:true;
        }
        showWinner(userWin);
    }
    
}





options.forEach((option) => {
    option.addEventListener("click",()=>{
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
});



