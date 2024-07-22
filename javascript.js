
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
        winner.textContent = "It's a tie!";
    }
    else if (human == "Rock" && computer == "Scissors" || human == "Paper" && computer == "Rock" || human == "Scissors" && computer == "Paper") {
        humanScore++;
        winner.textContent = `${human} beats ${computer}. Human wins!`;
    }
    else {
        computerScore++;
        winner.textContent = `${computer} beats ${human}. Computer wins!`;
    }
    updateResults();
    if (isGameOver()) {
        displayWinner();
        restartButton();
    }
}

function updateResults() {
    results.textContent = `
    Human: ${humanScore}
    Computer: ${computerScore}`;
}

function isGameOver() {
    return humanScore === 5 || computerScore === 5;
}

function displayWinner() {
    if (humanScore === 5) {
        winner.textContent = "Human wins the game! Yay for humanity!";
    }
    else if (computerScore === 5) {
        winner.textContent = "Computer wins! All hail our new overlords!"
    }
}

function restartButton() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.remove());
    const button = document.createElement("button");
    button.textContent = "Restart";
    button.setAttribute("id", "restart");
    results.parentNode.insertBefore(button, results);
    button.addEventListener("click", () => location.reload());
}

// Store player's score
let humanScore = 0;
let computerScore = 0;

// DOM methods to capture user input

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const winner = document.querySelector("#winner");

rock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("Scissors", getComputerChoice()));

updateResults();