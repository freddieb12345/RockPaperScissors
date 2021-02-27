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
var userWins =0;
var userDraws =0;
var userLosses =0;

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
    userLosses ++;
}
if (userInput === "R" && computerChoice === "P") {
    window.alert("You lose");
    userLosses ++;
}
if (userInput === "P" && computerChoice === "S") {
    window.alert("You lose");
    userLosses ++;
}
//Draw
if (userInput === computerChoice) {
    window.alert("Draw");
    userDraws ++;
}

//Alert that shows your stats with a button on it that resets all the initial variables (not the tally), allowing for the game to restart
window.confirm ("Stats:\n" + "Wins = " + userWins + "\nDraws = " + userDraws  + "\nLosses = " + userLosses + "\nPress ok to play again");

//Creating condition that would loop the game back to the start if the user presses okay but would end the game if the user presses cancel
reset = true;
while (reset = true) {
    if (confirm ("Stats:\n" + "Wins = " + userWins + "\nDraws = " + userDraws  + "\nLosses = " + userLosses + "\nPress ok to play again") === true){
        computerChoice;
        userInput;

        userInput = window.prompt("Enter R, P or S", userInput);
        computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)];
        window.alert("The computer chose " + computerChoice);
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
            userLosses ++;
        }
        if (userInput === "R" && computerChoice === "P") {
            window.alert("You lose");
            userLosses ++;
        }
        if (userInput === "P" && computerChoice === "S") {
            window.alert("You lose");
            userLosses ++;
        }
        //Draw
        if (userInput === computerChoice) {
            window.alert("Draw");
            userDraws ++;
        }
        window.confirm ("Stats:\n" + "Wins = " + userWins + "\nDraws = " + userDraws  + "\nLosses = " + userLosses + "\nPress ok to play again");
    } else {
        window.alert("Game Over");
        reset = false;
    }
}