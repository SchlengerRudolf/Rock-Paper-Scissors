body = document.querySelector("body");
results = document.createElement("div")
text = document.createElement("p");
standings = document.createElement("p");

results.appendChild(text);
results.appendChild(standings);

class RockPaperScissors {
    #humanScore;
    #computerScore;

    constructor() {
        this.#humanScore = 0;
        this.#computerScore = 0; 
    }


    #getComputerChoice() {
        switch(Math.floor(Math.random() * 3 + 1)) {
            case 1:
                return "rock"
            case 2:
                return "paper"
            default: return "scissors"
    }}

    #playRound(humanChoice) {
        let computerChoice = this.#getComputerChoice();
        
        //Draw
        if (humanChoice === computerChoice) {
            text.textContent = "It's a draw!";
        }
        //Rock
        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                this.#humanScore++;
                text.textContent = "Rock beats scissors. You win!";
            }
            else {
                this.#computerScore++;
                text.textContent = "Paper beats rock. You lose!";
            }
        }
        //Paper
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                this.#humanScore++;
                text.textContent = "Paper beats Rock. You win!";
            }
            else {
                this.#computerScore++;
                text.textContent = "Scissors beats paper. You lose!";
            }
        }
        //Scissors
        else {
            if (computerChoice === "paper") {
                this.#humanScore++;
                text.textContent = "Scissors beats paper. You win!";
            }
            else {
                this.#computerScore++;
                text.textContent = "Rock beats scissors. You lose!";
            }
        }
        standings.textContent = this.#humanScore + " : " + this.#computerScore;
        body.appendChild(results);

        if (this.#endGame()) {
            body.textContent = "";
            if (this.#humanScore > this.#computerScore) {
                text.textContent = standings.textContent + " PLAYER WON THE GAME!"
            }
            else {
                text.textContent = standings.textContent + " COMPUTER WON THE GAME!"
            }
            body.appendChild(text);
        }
    }

    #endGame() {
        return (this.#humanScore >= 5 || this.#computerScore >= 5);
    }

    playGame() {
        const btns = document.querySelectorAll("button");

        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                this.#playRound(btn.textContent);
            })  
        })
    }
}

const rps1 = new RockPaperScissors();
rps1.playGame();