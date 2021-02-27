//Creating an alert that asks the user for an input of Rock, Paper or Scissors
var userInput = window.prompt("Enter R, P or S", userInput);
console.log(userInput);

var computerChoiceArray = ["R","P","S"];

//Create a variable that is a random selection of the above array, then alert that variable to the user.

var computerChoice = computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)]
window.alert("The computer chose " + computerChoice);