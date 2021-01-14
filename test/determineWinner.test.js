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
test('user chooses rock and computer chooses paper, return "rock lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Rock', 'Paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses paper and computer chooses scissors, return "paper lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Paper', 'Scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses scissors and computer chooses rock, return "scissors lose"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Scissors', 'Rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// Winning Scenarios
test('user chooses scissors and computer chooses paper, return "scissors win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Scissors', 'Paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses paper and computer chooses rock, return "paper win"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Paper', 'Rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user chooses rock and computer chooses scissors, return "rock win"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineWinner('Rock', 'Scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});