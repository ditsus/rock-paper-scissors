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

function getHumanChoice() {
    return (prompt("Enter either rock, paper, or scissors", ""));   
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else {
        console.log("You tied!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log(`You beat the super complex ai! ${humanScore} - ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lost to the super complex ai! ${humanScore} - ${computerScore}`);
    }
    else {
        console.log(`You somehow tied with the super complex ai! ${humanScore} - ${computerScore}`);
    }
}

let humanScore = 0, computerScore = 0;
playGame();