document.addEventListener("DOMContentLoaded", function() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let userGuessInput = document.getElementById("userGuess");
    let submitBtn = document.getElementById("submitBtn");
    let guessResult = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");
    let attempts = 0;
  
    submitBtn.addEventListener("click", function() {
      let userGuess = parseInt(userGuessInput.value);
      attempts++;
  
      if (userGuess === randomNumber) {
        guessResult.textContent = "Congratulations! You guessed the correct number.";
        userGuessInput.value = "";
      } else if (userGuess < randomNumber) {
        guessResult.textContent = "Your guess is too low. Guess again!";
        userGuessInput.value = ""; 
      } else {
        guessResult.textContent = "Your guess is too high. Guess again!";
        userGuessInput.value = ""; 
      }
  
      attemptsDisplay.textContent = `Attempts: ${attempts}`; 
    });
  });