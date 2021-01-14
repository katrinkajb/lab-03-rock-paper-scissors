export function rockPaperScissorsFunc(zeroOneTwo) {
    if (zeroOneTwo === 0) {
        return 'Rock'
    }
    else if (zeroOneTwo === 1) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}
// 0 = rock, 1 = paper. 2 = scissors

export function determineWinner(userInput, computerInput) {
    if (userInput === computerInput) {
        return 'draw';
    }
    // losing scenarios
    else if ((userInput === 'Rock') && (computerInput === 'Paper')) {
        return 'rock lose'
    }
    else if ((userInput === 'Paper') && (computerInput === 'Scissors')) {
        return 'paper lose'
    }
    else if ((userInput === 'Scissors') && (computerInput === 'Rock')) {
        return 'scissors lose'
    }
    // Winning scenarios
    else if ((userInput === 'Scissors') && (computerInput === 'Paper')) {
        return 'scissors win'
    }
    else if ((userInput === 'Paper') && (computerInput === 'Rock')) {
        return 'paper win'
    }
    else if ((userInput === 'Rock') && (computerInput === 'Scissors')) {
        return 'rock win'
    }
}