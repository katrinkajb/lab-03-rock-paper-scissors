import { determineWinner } from '../utils.js'

const test = QUnit.test;

test('user and computer choose same thing, return "draw"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Losing scenarios
test('user chooses rock and computer chooses paper, return "Paper covers rock. You lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Paper covers rock. You lose.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses paper and computer chooses scissors, return "Scissors cut paper. You lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Scissors cut paper. You lose.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses scissors and computer chooses rock, return "Rock smashes scissors. You lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock smashes scissors. You lose.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Winning Scenarios
test('user chooses scissors and computer chooses paper, return "Rock smashes scissors. You lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Scissors cut paper. You win!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('scissors', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses paper and computer chooses rock, return "Paper covers rock. You win!"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Paper covers rock. You win!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses rock and computer chooses scissors, return "Rock smashes scissors. You win!"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock smashes scissors. You win!';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});