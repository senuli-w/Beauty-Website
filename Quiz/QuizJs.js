function startQuiz() {
  var score = 0;

  var answer1 = prompt("What is the most common hair color?");
  if (answer1 === null) {
    return; // Cancelled, exit the quiz
  }
  if (answer1 && answer1.toLowerCase() === "brown") {
    score += 2;
  } else {
    score -= 1;
  }

  var answer2 = prompt("What product is commonly used to style hair?");
  if (answer2 === null) {
    return; // Cancelled, exit the quiz
  }
  if (answer2 && answer2.toLowerCase() === "gel") {
    score += 2;
  } else {
    score -= 1;
  }

  var answer3 = prompt("Which vitamin is beneficial for hair health?");
  if (answer3 === null) {
    return; // Cancelled, exit the quiz
  }
  if (
    (answer3 && answer3.toLowerCase() === "vitamin e") ||
    answer3.toLowerCase() == "e"
  ) {
    score += 2;
  } else {
    score -= 1;
  }

  var answer4 = prompt("What is the primary function of conditioner?");
  if (answer4 === null) {
    return; // Cancelled, exit the quiz
  }
  if (answer4 && answer4.toLowerCase() === "moisturize") {
    score += 2;
  } else {
    score -= 1;
  }

  var answer5 = prompt("What type of brush is commonly used to detangle hair?");
  if (answer5 === null) {
    return; // Cancelled, exit the quiz
  }
  if (answer5 && answer5.toLowerCase() === "wide-tooth comb") {
    score += 2;
  } else {
    score -= 1;
  }

  // Store the score in localStorage
  localStorage.setItem("quizScore", score);

  // Display the final score
  showScore(score);
}

function showScore(score) {
  var resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "block";
  if (score >= 0) {
    resultsDiv.textContent =
      "You have earned " +
      score +
      " points. You can claim the points in your next purchase.";
  } else {
    resultsDiv.textContent =
      "Unfortunately, you scored " + score + " points. Better luck next time!";
  }
}

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var querySubject = document.querySelector('input[name="q-subject"]:checked');

  if (!name || !email || !querySubject) {
    document.getElementById("error-msg").style.display = "block";
    return false;
  }

  // Display the success message
  alert("Your query has been sent!\nThank you!");

  return true;
}
