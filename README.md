# Rock, Scissors, Paper app

## HTML setup
    1) 3 radio buttons (rock, scissors, paper)
        -images for each option
        -add 'name' to each
        -add 'value' to each
    2) Throw button
    3) Empty divs for:
        -wins
        -losses
        -total
        -current computer throw
        -results for current throw

## Javascript
    1) grab DOM elements by id
        -throw button
        -rock, scissor, paper elements(?)
    2) Initialize state
        -wins: 0
        -total: 0
    3) add event listeners to throw button(on click)
        a) Store computer's throw
            -Set up a function to randomly pick between rock, scissors, and paper
        b) Store user's throw
            -grab selected input and get its value
        c) Compare user choice and computer throw
        d) Display results of throw