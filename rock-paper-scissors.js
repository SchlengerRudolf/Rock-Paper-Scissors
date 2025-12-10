let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return "rock"
            break;

        case 2:
            return "paper"

        default: return "scissors"
}}

function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors!");
}

function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore++;
            console.log("Rock beats scissors. You win!");
        }
        else {
            computerScore++;
            console.log("Paper beats rock. You lose!");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            console.log("Paper beats Rock. You win!");
        }
        else {
            computerScore++;
            console.log("Scissors beats paper. You lose!");
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore++;
            console.log("Scissors beats paper. You win!");
        }
        else {
            computerChoice++;
            console.log("Rock beats scissors. You lose!");
        }
    }
}

console.log(playRound());