let humanScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const results = document.createElement("div")
const text = document.createElement("p");
const standings = document.createElement("p");
results.appendChild(text);
results.appendChild(standings);


function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        default: return "scissors"
}}

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
    standings.textContent = humanScore + " : " + computerScore;
    body.appendChild(results);

    if (endGame()) {
        body.textContent = "";
        if (humanScore > computerChoice) {
            text.textContent = standings.textContent + " PLAYER WON THE GAME!"
        }
        else {
            text.textContent = standings.textContent + " COMPUTER WON THE GAME!"
        }
        body.appendChild(text);
    }
}

function endGame() {
    return (humanScore >= 5 || computerScore >= 5);
}

function playGame() {
    const btns = document.querySelectorAll("button");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            playRound(btn.textContent);
        })  
    })
}

playGame();