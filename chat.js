document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("questionInput");
    const messages = document.getElementById("messages");

    if (!input || !messages) {
        console.error("Chat elements not found.");
        return;
    }

    function addMessage(text, type) {

        const message = document.createElement("div");

        message.className = "message " +
            (type === "user"
                ? "user-message-chat"
                : "ai-message-chat");

        message.textContent = text;

        messages.appendChild(message);

        messages.scrollTop = messages.scrollHeight;
    }


    window.sendQuestion = function () {

        const question = input.value.trim();

        if (!question) return;

        addMessage(question, "user");

        input.value = "";

        setTimeout(() => {

            addMessage(
                "🤖 AI system එක තාම connect කරලා නැහැ. Real AI එක ඊළඟට connect කරමු!",
                "ai"
            );

        }, 600);
    };


    window.quickQuestion = function (subject) {

        input.value = "Help me learn " + subject;

        input.focus();
    };


    input.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            event.preventDefault();
            sendQuestion();
        }

    });

});
