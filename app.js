import { computerThrowFunc, determineWinnerFunc } from './utils.js';

const shootButton = document.getElementById('shoot-button');
const computerResult = document.getElementById('computer-result');
const resultsArea = document.getElementById('results-area');
const winsCount = document.getElementById('wins-count');
const lossesCount = document.getElementById('losses-count');
const totalGamesCount = document.getElementById('total-games-count');
const resetButton = document.getElementById('reset-button');
const resetClicks = document.getElementById('reset-counter');

// initialize state
let wins = 0;
let total = 0;
let draws = 0;
let resets = 0;

// set event listeners to update state and DOM
shootButton.addEventListener('click', () => {
    total++;

    const computerThrow = Math.round(Math.random() * 3);
    const computerRockPaperScissors = computerThrowFunc(computerThrow);
    const radioSelection = document.querySelector('input[type="radio"]:checked');
    const userChoice = radioSelection.value;
    
    computerResult.textContent = 'Computer threw: ' + computerRockPaperScissors;
    const winner = determineWinnerFunc(userChoice, computerRockPaperScissors);
   
    if (winner === 'draw') draws++;
    if (winner === 'win') wins++;
    
    if (winner === 'draw') resultsArea.textContent = "It's a draw!";
    if (winner === 'rock lose') resultsArea.textContent = 'Paper covers rock. You lose.';
    if (winner === 'paper lose') resultsArea.textContent = 'Scissors cut paper. You lose.';
    if (winner === 'scissors lose') resultsArea.textContent = 'Rock smashes scissors. You lose.';
    if (winner === 'scissors win') resultsArea.textContent = 'Scissors cut paper. You win!';
    if (winner === 'paper win') resultsArea.textContent = 'Paper covers rock. You win!';  
    if (winner === 'rock win') resultsArea.textContent = 'Rock smashes scissors. You win!';
    
    updateResults();
});


function updateResults() {
    winsCount.textContent = wins;
    lossesCount.textContent = total - wins - draws;
    totalGamesCount.textContent = total;
}

resetButton.addEventListener('click', () => {
    wins = 0;
    total = 0;
    draws = 0;
    resets++;

    computerResult.textContent = '';
    resultsArea.textContent = '';
    updateResults();
    resetClicks.textContent = resets + ' reset(s)';
});
