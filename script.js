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
  let condition;
  if (playerSelection == computerSelection) condition = 0;
  else if (
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  )
    condition = 2;
  else condition = 1;
  switch (condition) {
    case 0:
      return "It's a draw";
    case 1:
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    case 2:
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const choices = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("Select:\nRock\nPaper\nScissors");
playerSelection = playerSensitive(playerSelection);

const computerSelection = getComputerChoice();

//TEMP OUTPUT LOGS
console.log(playRound(playerSelection, computerSelection));
