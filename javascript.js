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

// function getHumanChoice() {
//     return (prompt("Enter either rock, paper, or scissors", ""));   
// }


//Event delegation
let choiceButtons = document.querySelector("#choiceButtons");

choiceButtons.addEventListener("click", (event) => {
   let target = event.target;
   
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
});

let results = document.querySelector("#results");

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
        results.textContent = `You beat the super complex ai! YOU: ${humanScore} - AI: ${computerScore}`;
        choiceButtons.idList.remove("#choiceButtons");
    }
    else if (computerScore === 5) {
        results.textContent = `You lost to the super complex ai! YOU: ${humanScore} - AI: ${computerScore}`;
        choiceButtons.idList.remove("#choiceButtons");
    }
}

// function playGame() {
//     // for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     // }
//     if (humanScore > computerScore) {
//         console.log(`You beat the super complex ai! ${humanScore} - ${computerScore}`);
//     }
//     else if (computerScore > humanScore) {
//         console.log(`You lost to the super complex ai! ${humanScore} - ${computerScore}`);
//     }
//     else {
//         console.log(`You somehow tied with the super complex ai! ${humanScore} - ${computerScore}`);
//     }
// }

let humanScore = 0, computerScore = 0;
// playGame();
