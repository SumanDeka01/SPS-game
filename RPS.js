let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");


const drawGame = () => {
    console.log("The gave was draw.");
    msg.innerHTML = "Gave was draw! Play again.";
    msg.style.background = "#081b31";


}



const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerHTML= userScore;

        msg.innerHTML = 'YOU WIN!';
        msg.style.background = "green";
    } else {
        CompScore++;
        compScorePara.innerHTML= CompScore;

        msg.innerHTML = "YOU LOSE! ";
        msg.style.background = "red";

    }
}

const genCompChoice = () => {
    const options = ["rock", "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice)

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice ==="paper" ? false : true;
        } else if(userChoice === "paper") {
            compChoice === "scissors" ? false : true;
        } else {
            compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }


}
choices.forEach((choice) => {
    console.log(choice);

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice)

    });
});

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
