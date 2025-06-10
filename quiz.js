// Function Declaration
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare with the correct answer
        const feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no option is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
