function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice > 2/3) {
        return("rock");
    }
    else if (computerChoice > 1/3) {
        return("paper");
    }
    else {
        return("scissors");
    }
}


//Event delegation
let humanScore = 0, computerScore = 0;
let choiceButtons = document.querySelector("#choiceButtons");
let results = document.querySelector("#results");
results.style.textAlign = "center";


choiceButtons.addEventListener("click", (event) => {
   let target = event.target;
   
   if (humanScore < 5 && computerScore < 5) {
    switch(target.id) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
   }
   }
});

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        results.textContent = `You lose! Rock loses to paper. YOU: ${humanScore} - AI: ${computerScore}`; 
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        results.textContent = `You lose! Paper loses to scissors. YOU: ${humanScore} - AI: ${computerScore}`;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        results.textContent = `You lose! Scissors loses to rock. YOU: ${humanScore} - AI: ${computerScore}`;
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore++;
        results.textContent = `You win! Paper beats Rock. YOU: ${humanScore} - AI: ${computerScore}`;
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore++;
        results.textContent = `You win! Scissors beats Paper. YOU: ${humanScore} - AI: ${computerScore}`;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore++;
        results.textContent = `You win! Rock beats Scissors. YOU: ${humanScore} - AI: ${computerScore}`;
    }
    else {
        results.textContent = `You tied! YOU: ${humanScore} - AI: ${computerScore}`;
    }

    if (humanScore === 5) {
        const final = document.createElement("p");
        const gameSection = document.querySelector("#gameSection");
        gameSection.appendChild(final);
        final.style.textAlign = "center";
        final.textContent = `You beat the super complex ai!`;

        const restart = document.createElement("button");
        restart.textContent = `Restart`;
        restart.style.padding = "5px 10px";
        restart.style.borderRadius = "10px";
        document.querySelector("#gameSection").appendChild(restart);

        restart.addEventListener("click", (event) => {
            computerScore = 0;
            humanScore = 0;
            gameSection.removeChild(final);
            gameSection.removeChild(restart);
            results.textContent = "PRESS ONE TO START";
        });
    }
    else if (computerScore === 5) {
        const final = document.createElement("p");
        const gameSection = document.querySelector("#gameSection");
        gameSection.appendChild(final);
        final.style.textAlign = "center";
        final.textContent = `You lost to the super complex ai!`;

        const restart = document.createElement("button");
        restart.textContent = `Restart`;
        restart.style.padding = "5px 10px";
        restart.style.borderRadius = "10px";
        document.querySelector("#gameSection").appendChild(restart);

        restart.addEventListener("click", (event) => {
            computerScore = 0;
            humanScore = 0;
            gameSection.removeChild(final);
            gameSection.removeChild(restart);
            results.textContent = "PRESS ONE TO START";
        });
    }
}


