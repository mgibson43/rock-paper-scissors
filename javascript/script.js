'use strict'

const btns = document.querySelectorAll('.btn');
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
  btns.forEach(btn => btn.addEventListener('click', function() {
    const roundResults = playRound(btn.textContent.toLowerCase(), getComputerChoice());
    player.textContent = playerScore;
    computer.textContent = computerScore
    round.textContent = roundResults;
  }));
}

const endGame = function(playerScore, computerScore) {
  let message = '';
  btns.forEach(btn => btn.disabled = true);
  if (playerScore > computerScore) {
    message = `Player wins with a score of ${playerScore} to ${computerScore}!`;
  } else {
    message = `Computer wins with a score of ${computerScore} to ${playerScore}!`;
  };
  reset.classList.remove('hidden');
  return message
}

const resetGame = function() {
  btns.forEach(btn => btn.disabled = false);
  playerScore = computerScore = 0;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  round.textContent = '';
  reset.classList.add('hidden');
};

reset.addEventListener('click', resetGame);

startGame();

