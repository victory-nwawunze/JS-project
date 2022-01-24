/** @format */

// Challenge 1: Your age in days
function ageInDays() {
  var birthYear = prompt("what year were you born........my good friend?");
  var ageInDayss = (2018 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

// Adding the Reset function
function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat generate
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif"';
  div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors (javascript)
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log("computer choice: ", botChoice);
  results = decideWinner(humanChoice, botChoice); //[0 - 1] human lost | bot won
  console.log("Results ==> ", results);
  message = finalMessage(results); //{message:"You won", color:"green"} !
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, paper: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Won", color: "Green" };
  }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  //  Let remove all the images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanImageChoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
  botDiv.innerHTML =
    "<img src='" +
    imageDatabase[botImageChoice] +
    "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
  messageDiv.innerHTML =
    "<h1 style='color': " +
    finalMessage["color"] +
    "; font-size: 60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
}

//  Challenge 4: color changer (Javascript)
var all_buttons = document.getElementsByTagName("button");
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value === "reset") {
    buttonColorReset();
  } else if (buttonThingy.value === "random") {
    randomColor();
  }
}

// Change all button color to Red
function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
// Change all button color to Green
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

// button Rest functionality
function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

// button Random functionality
function randomColor() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
