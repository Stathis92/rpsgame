//Randomizes computer choice
function getComputerChoice() {
  let randomSelect = Math.floor(Math.random() * choices.length);
  return choices[randomSelect];
}
//Fix the playerSelection case
function playerSensitive(playerSelection) {
  result =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  return result;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  return;
}

const choices = ["Rock", "Paper", "Scissors"];
let playerSelection = prompt("Select:\nRock\nPaper\nScissor");
playerSelection = playerSensitive(playerSelection);

const computerSelection = getComputerChoice();
console.log("Computer Choice Was: " + computerSelection);
console.log("Player Choice Was: " + playerSelection);
