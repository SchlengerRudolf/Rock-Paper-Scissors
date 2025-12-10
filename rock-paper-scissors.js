console.log("Hello World!");

function getComputerChoice() {
    switch(Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return "rock"
            break;

        case 2:
            return "paper"

        default: return "scissors"
}}