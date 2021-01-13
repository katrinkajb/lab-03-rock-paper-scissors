import { rockPaperScissorsFunc, determineWinner } from './utils.js';


// import functions and grab DOM elements
const shootButton = document.getElementById('shoot-button');
const computerResult = document.getElementById('computer-result');
const resultsArea = document.getElementById('results-area');
const winsCount = document.getElementById('wins-count');
const totalGamesCount = document.getElementById('total-games-coun');


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

// b) Store user's throw
//     -grab selected input and get its value
const radioSelection = document.querySelector('input[type="radio"]:checked');
const userChoice = radioSelection.value;

// c) Compare user choice and computer throw. Write a function
   
// d) Display results of throw

})




