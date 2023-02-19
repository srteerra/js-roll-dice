let dice = document.getElementById("dice");
let dice2 = document.getElementById("dice2");
let result = document.getElementById("result");

result.innerHTML = "Start the game!";

function rollDice() {
  dice.classList.add("animate");
  dice2.classList.add("animate");

  setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    dice.style.backgroundImage = `url('../assets/dice-six-faces-${randomNumber1}.png')`;

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice2.style.backgroundImage = `url('../assets/dice-six-faces-${randomNumber2}.png')`;

    dice.classList.remove("animate");
    dice2.classList.remove("animate");

    if (randomNumber1 > randomNumber2) {
      result.innerHTML = "Player 1 win!";
    } else {
      result.innerHTML = "Player 2 win!";
    }
  }, 2000);
}
