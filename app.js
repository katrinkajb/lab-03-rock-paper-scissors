import { rockPaperScissorsFunc, determineWinner } from './utils.js';


// import functions and grab DOM elements
const shootButton = document.getElementById('shoot-button');
const computerResult = document.getElementById('computer-result');
const resultsArea = document.getElementById('results-area');
const winsCount = document.getElementById('wins-count');
const lossesCount = document.getElementById('losses-count');
const totalGamesCount = document.getElementById('total-games-count');


// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
// a) Store computer's throw
    const computerThrow = Math.round(Math.random() * 3);
    total++

//     -Set up a function to randomly pick between rock, scissors, and paper
    const computerRockPaperScissors = rockPaperScissorsFunc(computerThrow);

    console.log(computerRockPaperScissors);
// b) Store user's throw
//     -grab selected input and get its value
const radioSelection = document.querySelector('input[type="radio"]:checked');
const userChoice = radioSelection.value;

// c) Compare user choice and computer throw. Write a function
    const winner = determineWinner(userChoice, computerRockPaperScissors);
    console.log(winner);
// d) Display results of throw.
    updateResults();
})

function updateResults() {
    // resultsArea.textContent = winner; NEED TO DO IN FUNCTION
    winsCount.textContent = wins;
    lossesCount.textContent = total - wins;
    totalGamesCount.textContent = total;
}



