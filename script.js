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
      console.log("It's a draw");
      break;
    case 1:
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      break;
    case 2:
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      break;
  }
  return condition;
}

//Game Function
function game() {
  let playerSelection = prompt("Select:\nRock\nPaper\nScissors");
  playerSelection = playerSensitive(playerSelection);
  const computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  if (result == 1) {
    playerWins++;
  } else if (result == 2) {
    computerWins++;
  }
}

//Game Options and number of rounds
const choices = ["Rock", "Paper", "Scissors"];
const gameRounds = 5;
let playerWins = 0,
  computerWins = 0;

for (let i = 0; i < gameRounds; i++) {
  game();
}

//Print Results
if (playerWins == computerWins) {
  console.log("Draw");
} else if (playerWins > computerWins) {
  console.log("You win! With a total of " + playerWins + " victories!");
} else {
  console.log(
    "You lost! The computer had a total of " + computerWins + " victories!"
  );
}
