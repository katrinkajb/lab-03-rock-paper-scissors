// IMPORT MODULES under test here:
import { rockPaperScissorsFunc } from '../utils.js'

const test = QUnit.test;

test('When 0 is given, it should return "Rock"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rockPaperScissorsFunc(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('When 1 is given, it should return "Paper"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rockPaperScissorsFunc(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('When 0 is given, it should return "Scissors"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rockPaperScissorsFunc(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
