//Creating an alert that asks the user for an input of Rock, Paper or Scissors
var userInput = window.prompt("Enter R, P or S", userInput);
console.log(userInput);

//Creating an array and then creating a variable that is a random selection of the array, then alert that variable to the user.

var computerChoiceArray = ["R","P","S"];
var computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
window.alert("The computer chose " + computerChoice);

//Compare the userInput to the computerChoice and decide who wins by setting rules.
//Also need to create variables to tally how many wins draws and losses you have
//Wins
var Wins =0;
var Draws =0;
var Losses =0;

if (userInput === "R" && computerChoice === "S") {
    window.alert("You win");
    userWins ++;
}
if (userInput === "P" && computerChoice === "R") {
    window.alert("You win");
    userWins ++;
}
if (userInput === "S" && computerChoice === "P") {
    window.alert("You win");
    userWins ++;
}
//Losses
if (userInput === "S" && computerChoice === "R") {
    window.alert("You lose");
    userlosses ++;
}
if (userInput === "R" && computerChoice === "P") {
    window.alert("You lose");
    userlosses ++;
}
if (userInput === "P" && computerChoice === "S") {
    window.alert("You lose");
    userlosses ++;
}
//Draw
if (userInput === computerChoice) {
    window.alert("Draw");
    userDraws ++;
}