'use strict'

const win = ['rockscissors', 'paperrock', 'scissorspaper'];

const getComputerChoice = function() {
  const num = Math.trunc((Math.random() * 3) + 1);
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  if (num === 3) return "scissors"
}

const playRound = function(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) return `Draw, ${computerSelection} ties with ${playerSelection}`;

  if (win.includes(playerSelection + computerSelection)) return `Player wins! ${playerSelection} beats ${computerSelection}.`;

  return `You lose! ${computerSelection} beats ${playerSelection}.`;
};

const playerSelection = "rock".trim().toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection));