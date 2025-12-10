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

    //Draw
    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    }
    //Rock
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
    //Paper
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
    //Scissors
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Score " + humanScore + " : " + computerScore);
    }
    
    if (humanScore > computerScore) {
        console.log("Final score " + humanScore + " : " + computerScore + " You won the match!");
    }
    else if (humanScore < computerScore) {
        console.log("Final score " + humanScore + " : " + computerScore + " You lost the match!");
    }
    else {
        console.log("Final score " + humanScore + " : " + computerScore + ". You draw the match!");
    }
}

console.log(playGame());