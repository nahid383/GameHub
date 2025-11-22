let userscore = 0;
let aiscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorep = document.querySelector("#user-score");
const aiscorep = document.querySelector("#ai-score");

const generateaichoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const showWinner = (userWin, userchoice, aichoice) => {
    if(userWin){
        console.log("You Won");
        userscore++;
        userscorep.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${aichoice}`;
        msg.style.backgroundColor = "green";
    } else{
        console.log("You Lost");
        aiscore++;
        aiscorep.innerText = aiscore;
        msg.innerText = `You Lost! ${aichoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
    msg.classList.add("glow");
    setTimeout(() => msg.classList.remove("glow"), 500);
}


const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game Draw. Play Again!";
    msg.style.backgroundColor = "#6c757d";
    msg.classList.add("glow");
    setTimeout(() => msg.classList.remove("glow"), 500);
}


const playgame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    //generate ai choice
    const aichoice = generateaichoice();
    console.log("ai choice the : ", aichoice);

    if(userchoice==aichoice){
        drawGame();
    } else{
        let userWin = true;
        if(userchoice=="rock"){
            userWin = aichoice==="paper" ? false: true;
        } else if(userchoice=="paper"){
            userWin = aichoice === "scissors"? false : true;
        } else{
            userWin = aichoice === "rock"? false:true;
        }

        showWinner(userWin, userchoice, aichoice);
    }

}
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})