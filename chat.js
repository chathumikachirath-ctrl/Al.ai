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

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}


function sendQuestion() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    setTimeout(function () {

        addMessage(
            "🤖 I'm currently a demo version. Real AI will be connected soon!",
            "ai"
        );

    }, 500);
}


function quickQuestion(subject) {

    input.value = "Help me learn " + subject;

    input.focus();
}


function showComingSoon() {

    alert("📎 File upload will be available soon!");

}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendQuestion();

    }

});
