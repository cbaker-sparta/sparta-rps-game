//

function rps(userWins, compWins) {
  for (var i = 0; i < 5; i++) {
    var uWins = userWins;
    var cWins = compWins;
    var userChoice = prompt("Please pick your weapon: rock, paper or scissors?");
    var compChoice = Math.random();
    if (compChoice < 0.34) {
      compChoice = "rock";
      alert("Computer picked rock!");
    }
    else if (compChoice <= 0.67) {
      compChoice = "paper";
      alert("Computer picked paper!");
    }
    else {
      compChoice = "scissors";
      alert("Computer picked scissors!")
    }

    if ((userChoice == "rock" && compChoice == "rock") || (userChoice == "paper" && compChoice == "paper") || (userChoice == "scissors" && compChoice == "scissors")) {
        alert("Draw!");
        alert("The score is: User - " + userWins.length + " vs. Computer - " + compWins.length);
    }
    if ((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
        alert("You won!");
          for (var i = 0; i < 2; i++) {
            uWins[i]++;
          }
        alert("The score is: User - " + userWins.length + " vs. Computer - " + compWins.length);
    }
    if ((userChoice == "rock" && compChoice == "paper") || (userChoice == "paper" && compChoice == "scissors") || (userChoice == "scissors" && compChoice == "rock")) {
        alert("You lost!");
        for (var i = 0; i < 2; i++) {
          cWins[i]++;
        }
        alert("The score is: User - " + userWins.length + " vs. Computer - " + compWins.length);
    }
  }
  return ("Final score: User - " + userWins.length + " vs. Computer - " + compWins.length);
}

var userWins = [];
var compWins = [];
rps (userWins, compWins);
