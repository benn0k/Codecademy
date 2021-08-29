let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winnerText;
let winner;

// Write random number from 1 - 9
const generateTarget = () => {
  const random = Math.ceil(Math.random() * 9);
  return random;
};

//difference function
function difference(a, b) {
  return Math.abs(a - b);
}

// Write compareGuesses
// declare and take in 3 variables
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  //create result of human, result of computer. use difference function to get absolute value
  let humanResult = difference(humanGuess, secretTarget); // get absolute value of human result
  let computerResult = difference(computerGuess, secretTarget); // get absolute value of machine result

  //debug
  // console.log (humanResult);
  // console.log (computerResult);

  //if absolute value of computer is larger (they're farther from number, golf rules)
  //then computer wins
  if (humanResult < computerResult) {
    winner = true;
    // debug
    console.log("human win");
    return winner;
  } else if (computerResult < humanResult) {
    winner = false;
    console.log("computer win");
    return winner;
  }
  //tie state goes to human
  else if (computerResult === humanResult) {
    winner = true;
    console.log("human win");
    return winner;
  }
};

//write update score function

const updateScore = (winner) => {
  let winnerText = "";

  if (winner === true) {
    winnerText = "human";
    humanScore++;
    console.log(winnerText);
  } else if (winner === false) {
    winnerText = "computer";
    computerScore++;
    console.log(winnerText);
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};

console.log(compareGuesses(1, 9, 3));
updateScore(winner);
console.log(humanScore);
advanceRound();
console.log(currentRoundNumber);
