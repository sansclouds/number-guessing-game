// Pick a random whole number from 1 to 100.
let secretNumber = Math.floor(Math.random() * 100) + 1;
const difficultySettings = {
  easy: 12,
  medium: 10,
  hard: 7,
};

const difficulty = document.getElementById("difficulty");
let triesLeft = difficultySettings[difficulty.value];

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");
const tries = document.getElementById("tries");

checkButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
difficulty.addEventListener("change", resetGame);

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
  const selectedDifficulty = difficulty.value;
  const maxTries = difficultySettings[selectedDifficulty];

  secretNumber = Math.floor(Math.random() * 100) + 1;
  triesLeft = maxTries;
  guessInput.value = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  message.textContent = `New ${selectedDifficulty} game started. Make your first guess!`;
  tries.textContent = `Tries left: ${maxTries}`;
}
