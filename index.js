
//Dice for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

//Dice for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

//h1 statement
if(sessionStorage.getItem('flag')===null){
  document.querySelector("h1").innerHTML = "Refresh me";
  sessionStorage.setItem('flag','1');
} else {
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
}