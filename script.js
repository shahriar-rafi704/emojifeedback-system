// JavaScript code for the enhanced feedback system
const emojis = document.querySelectorAll(".emoji");
const selectedEmoji = document.getElementById("selected-emoji");
const emojiDescription = document.getElementById("emoji-description");
const feedbackText = document.getElementById("feedback-text");
const ratingInput = document.getElementById("rating");
const submitButton = document.getElementById("submit-feedback");

// Emoji descriptions
const emojiDescriptions = {
    "😄": "This emoji represents extreme happiness and joy. You must be having a great day!",
    "😍": "A heart-eyed emoji! You must really love something right now.",
    "😊": "A warm, smiling emoji. You seem content and satisfied.",
    "😐": "A neutral, expressionless emoji. You're feeling neither good nor bad.",
    "😕": "A slightly sad and puzzled emoji. Something on your mind?",
    "😞": "A disappointed face. You might be feeling down.",
    "😢": "A crying emoji. Sorry to hear you're feeling this way.",
};

emojis.forEach((emoji) => {
    emoji.addEventListener("click", function () {
        const emojiValue = emoji.getAttribute("data-emoji");
        selectedEmoji.textContent = `You selected '${emojiValue}'`;
        emojiDescription.textContent = emojiDescriptions[emojiValue];
    });
});

submitButton.addEventListener("click", function () {
    const selectedEmojiValue = selectedEmoji.textContent;
    const feedback = feedbackText.value;
    const rating = parseInt(ratingInput.value);

    if (selectedEmojiValue && feedback && !isNaN(rating) && rating >= 1 && rating <= 5) {
        // Send feedback data to the server (simulated)
        alert("Feedback submitted successfully!");
        // Clear form fields
        feedbackText.value = "";
        ratingInput.value = "";
        selectedEmoji.textContent = "";
        emojiDescription.textContent = "";
    } else {
        alert("Please fill in all fields correctly.");
    }
});