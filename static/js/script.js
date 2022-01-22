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
