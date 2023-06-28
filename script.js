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
  if (playerSelection == computerSelection) return "Draw";
  else if (
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  )
    return "Lose";
  else return "Win";
}

const choices = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("Select:\nRock\nPaper\nScissors");
playerSelection = playerSensitive(playerSelection);

const computerSelection = getComputerChoice();
let condition = playRound(playerSelection, computerSelection);


//TEMP OUTPUT LOGS
console.log("Player Choice Was: " + playerSelection);
console.log("Computer Choice Was: " + computerSelection);
console.log("Condition: " + condition);
