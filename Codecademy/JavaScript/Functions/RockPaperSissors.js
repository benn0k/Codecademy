//1. The user should be able to choose  rock, paper, or sissors when the game starts
// using const and arrow function, create a function named getUserChoice that takes a single parameter, userInput

const getUserChoice = userInput => {
    //2.Since a user can pass rock as "ROCK", we use toLowerCase to make the input all lowercase
    userInput = userInput.toLowerCase();
    //3. we need to check if userInput is equal to rock, paper, or scissors by using the following
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
        return userInput;
    } else {
        console.log('Error! userInput not defined as rock/paper/scissors');
    }
}


//debug break
// console.log(getUserChoice('fork'));

//4. create a function to have the computer randomly call rock/paper/scissors
const getComputerChoice = randomNumber => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

//debug break
//console.log(getComputerChoice());
//5. create a funciton to determine the winner. This takes two inputs, userChoice and computerChoice, compares them, and determines a winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}
//debug break
//console.log(determineWinner('rock', 'rock'));`
 //6. create a function to call the functions that give us values for user/computer choice, followed by calling the function to determine the winner
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();

    if (userChoice === 'bomb'){
        console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
        console.log('You win!');
    }
    else{
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
}

playGame();