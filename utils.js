export function computerThrowFunc(zeroOneTwo) {
    if (zeroOneTwo === 0) return 'Rock';
    if (zeroOneTwo === 1) return 'Paper';
    if (zeroOneTwo === 2) return 'Scissors';
}

export function determineWinnerFunc(userInput, computerInput) {
    if (userInput === computerInput) return 'draw';
    if ((userInput === 'Rock') && (computerInput === 'Paper')) return 'lose';
    if ((userInput === 'Paper') && (computerInput === 'Scissors')) return 'lose';
    if ((userInput === 'Scissors') && (computerInput === 'Rock')) return 'lose';
    if ((userInput === 'Scissors') && (computerInput === 'Paper')) return 'win';
    if ((userInput === 'Paper') && (computerInput === 'Rock')) return 'win';
    if ((userInput === 'Rock') && (computerInput === 'Scissors')) return 'win';
}




export function resultsAreaFunc(userInput, computerInput) {
   
    if ((userInput === 'Rock') && (computerInput === 'Paper')) return 'rock lose';
    if ((userInput === 'Paper') && (computerInput === 'Scissors')) return 'paper lose';
    if ((userInput === 'Scissors') && (computerInput === 'Rock')) return 'scissors lose';
    if ((userInput === 'Scissors') && (computerInput === 'Paper')) return 'scissors win';
    if ((userInput === 'Paper') && (computerInput === 'Rock')) return 'paper win';
    if ((userInput === 'Rock') && (computerInput === 'Scissors')) return 'rock win';
}