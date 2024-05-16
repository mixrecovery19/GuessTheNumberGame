document.addEventListener("DOMContentLoaded", function() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let userGuessInput = document.getElementById("userGuess");
  let submitBtn = document.getElementById("submitBtn");
  let guessResult = document.getElementById("message");
  let attemptsDisplay = document.getElementById("attempts");
  let attemptsRecord = document.getElementById("attemptsRecord");
  let attempts = 0;
  let lowestAttempts = Infinity; // Initialize lowestAttempts with a very high number
  
  submitBtn.addEventListener("click", function() {
    let userGuess = parseInt(userGuessInput.value);
    attempts++;
    
    if (userGuess === randomNumber) {
      guessResult.textContent = "Congratulations! You guessed the correct number.";
      lowestAttempts = attempts;
      attemptsRecord.textContent = `Lowest Attempts: ${lowestAttempts}`;
      userGuessInput.value = "";
      attempts = 0;

    } else if (userGuess < randomNumber) {
      guessResult.textContent = "Your guess is too low. Guess again!";
      userGuessInput.value = ""; 
    } else {
      guessResult.textContent = "Your guess is too high. Guess again!";
      userGuessInput.value = ""; 
    }
  
    attemptsDisplay.textContent = `Attempts: ${attempts}`; 
    
    // Update lowestAttempts if the current attempts are lower than the recorded lowestAttempts
    //if (guessResult < lowestAttempts + attempts < lowestAttempts) {
      //lowestAttempts = attempts;
      //attemptsRecord.textContent = `Lowest Attempts: ${lowestAttempts}`;
    //}
    //while (userGuess === randomNumber) {
      
    //}
  });
});