// Add event listener and call playRound function
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

//Randomizes computer choice
function getComputerChoice() {
  let randomSelect = Math.floor(Math.random() * choices.length);
  return choices[randomSelect];
}

// playRound conditions
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) condition = 0;
  else if (
    (playerSelection == "Paper" && computerSelection == "Scissor") ||
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Scissor" && computerSelection == "Rock")
  )
    condition = 2;
  else condition = 1;
  switch (condition) {
    case 0:
      document.getElementById("results").innerHTML = "It's a draw";
      break;
    case 1:
      document.getElementById(
        "results"
      ).innerHTML = `You Win! <br>${playerSelection} beats ${computerSelection}`;
      playerWins++;
      break;
    case 2:
      document.getElementById(
        "results"
      ).innerHTML = `You Lose! <br>${playerSelection} loses to ${computerSelection}`;
      computerWins++;
      break;
  }

  // Reset the game and announce the winner
  if (playerWins == MAXGAMES || computerWins == MAXGAMES) {
    document.getElementById("score").innerHTML = `Game Over!`;

    endGame(playerWins, computerWins);
    playerWins = 0;
    computerWins = 0;
  } else {
    document.getElementById(
      "score"
    ).innerHTML = `Score is: ${playerWins} - ${computerWins}`;
  }
}

function endGame(playerWins, computerWins) {
  if (playerWins > computerWins) {
    document.getElementById(
      "results"
    ).innerHTML = `You've won the game to a score of:<br>${playerWins} - ${computerWins}`;
  } else {
    document.getElementById(
      "results"
    ).innerHTML = `You've lost the game to a score of:<br>${playerWins} - ${computerWins}`;
  }
}

//Game Options and number of rounds
const choices = ["Rock", "Paper", "Scissor"];
let playerWins = 0,
  computerWins = 0,
  //Total points needed to win a game
  MAXGAMES = 5;
