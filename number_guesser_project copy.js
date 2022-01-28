let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10)
};

const compareGuesses = (human, computer, secretTarget) => {
  if ((Math.abs(secretTarget - human) <= Math.abs(secretTarget - computer))) { //Takes the absolute values of the differences and compares them.
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') { 
    //Ensures that the value and data type are the same
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++; //Increments the number of rounds
}