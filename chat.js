const input = document.getElementById("questionInput");
const messages = document.getElementById("messages");

function addMessage(text, type) {
    const message = document.createElement("div");

    message.classList.add("message");

    if (type === "user") {
        message.classList.add("user-message-chat");
    } else {
        message.classList.add("ai-message-chat");
    }

    message.textContent = text;

    messages.appendChild(message);

    // Automatically scroll to latest message
    message.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


function sendQuestion() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    // Add user's message
    addMessage(question, "user");

    // Clear input
    input.value = "";

    // Temporary AI response
    setTimeout(function () {

        addMessage(
            "🤖 I'm still being connected to the AI system. Soon I'll be able to answer your A/L questions!",
            "ai"
        );

    }, 600);
}


// Quick subject buttons
function quickQuestion(subject) {

    input.value = "Help me learn " + subject;

    input.focus();
}


// Press Enter to send
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendQuestion();
    }

});
