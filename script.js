'use strict'

const btns = document.querySelectorAll('.btn');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');
const round = document.querySelector('.round');

const win = ['rockscissors', 'paperrock', 'scissorspaper'];
let playerScore = 0;
let computerScore = 0;
player.textContent = playerScore;
computer.textContent = computerScore;

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

btns.forEach(btn => btn.addEventListener('click', function() {
  const roundResults = playRound(btn.textContent.toLowerCase(), getComputerChoice());
  player.textContent = playerScore;
  computer.textContent = computerScore
  round.textContent = roundResults;
}));
