// Function to randomly return a choice from computer
function getComputerChoice(){
    let computerChoice
    const randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt === 1) {
        computerChoice = "Rock";
    }
    else if (randInt === 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice
}

// Request choice from player as input

function getHumanChoice(){
    let humanChoice
    let n = 1;
    while (n === 1) {
        humanChoice = Number(prompt(`Choose your option:
            1 = Rock
            2 = Paper
            3 = Scissors`));
        if (isNaN(humanChoice) || humanChoice < 0 || humanChoice > 3) {
            n = 1;
            console.log("Invalid choice. Please try again")
        }
        else {
            n = 2;
        }
    }
    return humanChoice
}

console.log(getHumanChoice())

// Store player's score

// Function to play a round, comparing players choice with the computer's

// Logic to play a best-of five rounds