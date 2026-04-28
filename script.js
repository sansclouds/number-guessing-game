// Pick a random whole number from 1 to 100.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let triesLeft = 10;

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const tries = document.getElementById("tries");

checkButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess) {
    message.textContent = "Please enter a number first.";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Use a number between 1 and 100.";
    return;
  }

  triesLeft -= 1;
  tries.textContent = `Tries left: ${triesLeft}`;

  if (userGuess === secretNumber) {
    message.textContent = `Great job! ${secretNumber} is correct.`;
    endGame();
    return;
  }

  if (triesLeft === 0) {
    message.textContent = `Game over. The number was ${secretNumber}.`;
    endGame();
    return;
  }

  if (userGuess < secretNumber) {
    message.textContent = "Too low. Try a higher number.";
  } else {
    message.textContent = "Too high. Try a lower number.";
  }
}

function endGame() {
  checkButton.disabled = true;
  guessInput.disabled = true;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  triesLeft = 10;
  guessInput.value = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  message.textContent = "New game started. Make your first guess!";
  tries.textContent = "Tries left: 10";
}
