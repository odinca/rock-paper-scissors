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

console.log(getComputerChoice())

// Request choice from player as input

// Store player's score

// Function to play a round, comparing players choice with the computer's

// Logic to play a best-of five rounds