
// Function to randomly return a choice from computer

function getComputerChoice(){
    let choice
    const randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt === 1) {
        choice = "Rock";
    }
    else if (randInt === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice
}

// Function to play a round, comparing players choice with the computer's

function playRound(human, computer) {
    if (human == computer){
        return "It's a tie!"
    }
    else if (human == "Rock" && computer == "Scissors" || human == "Paper" && computer == "Rock" || human == "Scissors" && computer == "Paper") {
        humanScore++;
        return `${human} beats ${computer}. Human wins!`
    }
    else {
        computerScore++;
        return `${computer} beats ${human}. Computer wins!`
    }
}

// Store player's score
let humanScore = 0;
let computerScore = 0;

// Logic to play a best-of five rounds
/*
function playGame() {
    let round = 1
    while (round <= 5) {
        console.log(`Round ${round}`)
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Current score:
            Human: ${humanScore}
            Computer: ${computerScore}`)
        if (round == 5 && humanScore == computerScore) {
            round--;
        }
        else {
            round++;
        }
    }
    if (humanScore > computerScore) {
        console.log("Human wins the game! Yay for humanity!")
        }
    else {
        console.log("Computer wins! All hail our new overlords!")
        }
    
}
*/
// DOM methods to capture user input

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const winner = document.querySelector("#winner");

const anyButton = document.querySelector("button");

rock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

results.textContent = `
Human: ${humanScore}
Computer: ${computerScore}`;
