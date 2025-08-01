function checkAnswer() {
    const correctAnswer = "4"; // Example correct answer
    const userAnswer = document.querySelector("quiz").value;
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

const button = document.getElementById("submit-answer");

button.addEventListener("click", checkAnswer);