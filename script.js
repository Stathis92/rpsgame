//Randomizes computer choice
function getComputerChoice() {
    let randomSelect = Math.floor(Math.random()*choices.length);
    return choices[randomSelect];
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    return;
  }
  
  const choices = ["Rock", "Paper", "Scissors"];
  const playerSelection = "rock";

  const computerSelection = getComputerChoice();
  console.log("Computer Choice: "+ computerSelection);