// Function to map integers to player choices
function getChoice(n) {
    let choice
    if (n === 1) {
        choice = "Rock";
    }
    else if (n === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice
}

// Function to randomly return a choice from computer
function getComputerChoice(){
    const randInt = Math.floor(Math.random() * 3) + 1;
    return getChoice(randInt)
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

console.log(getComputerChoice())

// Store player's score

// Function to play a round, comparing players choice with the computer's

// Logic to play a best-of five rounds