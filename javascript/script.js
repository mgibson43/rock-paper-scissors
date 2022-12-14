'use strict'

const container = document.querySelector('.container');
const btnsContainer = document.querySelector('.btns');
const btns = document.querySelectorAll('.btn');
const results = document.querySelector('.results');
const player = document.querySelector('.playerScore');
const computer = document.querySelector('.computerScore');
const round = document.querySelector('.round');
const reset = document.querySelector('.reset');

const win = ['rockscissors', 'paperrock', 'scissorspaper'];
const winCondition = 4;
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
    if (playerScore > winCondition) return endGame(playerScore, computerScore);
    return `Player wins! ${playerSelection} beats ${computerSelection}.`;
  }

  computerScore++;
  if (computerScore > winCondition) return endGame(playerScore, computerScore);
  return `Computer wins! ${computerSelection} beats ${playerSelection}.`;  
};

const startGame = function() {
  reset.classList.add('hidden-left');
  btns.forEach(btn => btn.addEventListener('click', function() {
    const roundResults = playRound(btn.id.toLowerCase(), getComputerChoice());
    player.textContent = playerScore;
    computer.textContent = computerScore
    round.textContent = roundResults;
  }));
}

const endGame = function(playerScore, computerScore) {
  let message = '';
  btnsContainer.classList.add('hidden-top');
  reset.classList.remove('hidden-left');
  if (playerScore > computerScore) {
    message = `Player wins with a score of ${playerScore} to ${computerScore}!`;
  } else {
    message = `Computer wins with a score of ${computerScore} to ${playerScore}!`;
  };
  return message
}

const resetGame = function() {
  playerScore = computerScore = 0;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  round.textContent = '';
  btnsContainer.classList.remove('hidden-top');
  reset.classList.add('hidden-left');
};

reset.addEventListener('click', resetGame);

startGame();

