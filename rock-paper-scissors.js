let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const results = document.createElement("div")
const text = document.createElement("p");
results.appendChild(text);


function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        default: return "scissors"
}}

function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors!");
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    

    //Draw
    if (humanChoice === computerChoice) {
        text.textContent = "It's a draw!";
    }
    //Rock
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            text.textContent = "Rock beats scissors. You win!";
        }
        else {
            computerScore++;
            text.textContent = "Paper beats rock. You lose!";
        }
    }
    //Paper
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            text.textContent = "Paper beats Rock. You win!";
        }
        else {
            computerScore++;
            text.textContent = "Scissors beats paper. You lose!";
        }
    }
    //Scissors
    else {
        if (computerChoice === "paper") {
            humanScore++;
            text.textContent = "Scissors beats paper. You win!";
        }
        else {
            computerChoice++;
            text.textContent = "Rock beats scissors. You lose!";
        }
    }
    body.appendChild(results);
}

function playGame() {
    const btns = document.querySelectorAll("button");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            playRound(btn.textContent);
        })  
    })
    

  /*  if (humanScore > computerScore) {
        console.log("Final score " + humanScore + " : " + computerScore + " You won the match!");
    }
    else if (humanScore < computerScore) {
        console.log("Final score " + humanScore + " : " + computerScore + " You lost the match!");
    }
    else {
        console.log("Final score " + humanScore + " : " + computerScore + ". You draw the match!");
    } */
}

console.log(playGame());