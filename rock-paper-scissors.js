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

console.log(getHumanChoice());