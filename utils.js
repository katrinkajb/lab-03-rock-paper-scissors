export function rockPaperScissorsFunc(zeroOneTwo) {
    if (zeroOneTwo === 0) {
        return 'rock'
    }
    else if (zeroOneTwo === 1) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}
// 0 = rock, 1 = paper. 2 = scissors

export function determineWinner(userInput, computerInput) {
    if (userInput === computerInput) {
        return 'draw';
    }
    // losing scenarios
    else if ((userInput === 'rock') && (computerInput === 'paper')) {
        return 'Paper covers rock. You lose.'
    }
    else if ((userInput === 'paper') && (computerInput === 'scissors')) {
        return 'Scissors cut paper. You lose.'
    }
    else if ((userInput === 'scissors') && (computerInput === 'rock')) {
        return 'Rock smashes scissors. You lose.'
    }
    // Winning scenarios
    else if ((userInput === 'scissors') && (computerInput === 'paper')) {
        return 'Scissors cut paper. You win!'
    }
    else if ((userInput === 'paper') && (computerInput === 'rock')) {
        return 'Paper covers rock. You win!'
    }
    else if ((userInput === 'rock') && (computerInput === 'scissors')) {
        return 'Rock smashes scissors. You win!'
    }
}