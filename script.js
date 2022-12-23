let humanScore = 0;
let computerScore = 0;  
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, computerGuess, target){
    userValue = Math.abs(target - userGuess)
    computerValue = Math.abs(target - computerGuess)

    if (userValue === 0){
        return true
    }
    if (userValue < computerValue){
        return true
    }

    return false
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore += 1;
    }
    if(winner === 'computer'){
        computerScore += 1;
    }
}

function advanceRound(){
    currentRoundNumber += 1;
}

// Test function generateTarget console.log(generateTarget())