//* Declare function "getUserChoice" which takes in a userInput argument
const getUserChoice = userInput => {
    //* userInput needs to be lowercase
    userInput = userInput.toLowerCase();
    //* Control flow to determine if someone enters a "valid" argument 
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput;
    } else {
        console.log('Please enter Rock/Paper/Scissors');
    }
}





function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log('The Game is a tie')
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('The computer wins.')
        } else if (computerChoice === 'scissors') {
            console.log('The player wins.')
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('The computer wins.')
        } else if (computerChoice === 'rock') {
            console.log('The player wins.')
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('The computer wins.')
        } else if (computerChoice === 'paper') {
            console.log('The player wins.')
        }
    }

}

function playGame () {
    let userChoice = getUserChoice('Rock');
    let computerChoice = getComputerChoice();
    console.log (`The computer chooses ${computerChoice}. The player selected ${userChoice}.`);

    determineWinner(userChoice, computerChoice);
}

playGame();