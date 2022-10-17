'use strict'

const getComputerChoice = function() {
  const num = Math.trunc((Math.random() * 3) + 1);
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  if (num === 3) return "scissors"
}

const computerSelection = getComputerChoice();
