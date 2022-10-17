'use strict'

const win = ['rockscissors', 'paperrock', 'scissorspaper'];
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function() {
  const num = Math.trunc((Math.random() * 3) + 1);
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  if (num === 3) return "scissors"
}

const playRound = function(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) return `Draw, ${computerSelection} ties with ${playerSelection}`;

  if (win.includes(playerSelection + computerSelection)) {
    playerScore++;
    return `Player wins! ${playerSelection} beats ${computerSelection}.`;
  }

  computerScore++;
  return `You lose! ${computerSelection} beats ${playerSelection}.`;
};

const game = function() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper, or Scissors?').trim().toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) console.log("Player wins!");
  else if (computerScore > playerScore) console.log("Computer wins!");
  else console.log("Tie game!")
  playerScore = computerScore = 0;
}

game();




