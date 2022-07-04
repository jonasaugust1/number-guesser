let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10 - 1);
  }
  
  function compareGuesses(userGuess, computerGuess, secretTarget) {
    let compDifference = Math.abs(computerGuess - secretTarget);
    let userDiffrence = Math.abs(userGuess - secretTarget);
    if (userGuess > 9) {
      alert("Você deve escolher um número entre 0 e 9");
    }
    if (userDiffrence === compDifference) {
      return true;
    } else if (userDiffrence < compDifference) {
      return true;
    }
    return false;
  }
  
  function updateScore(value) {
    if (value === "human") {
      humanScore++;
    } else if (value === "computer") {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;

