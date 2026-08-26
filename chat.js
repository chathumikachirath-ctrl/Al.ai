document.addEventListener("DOMContentLoaded", function () {

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

        message.scrollIntoView({
            behavior: "smooth"
        });
    }


    window.sendQuestion = function () {

        const question = input.value.trim();

        if (question === "") {
            return;
        }

        addMessage(question, "user");

        input.value = "";

        setTimeout(function () {

            addMessage(
                "🤖 AI system එක තාම connect කරලා නැහැ. අපි ඊළඟට real AI එක connect කරමු!",
                "ai"
            );

        }, 600);
    };


    window.quickQuestion = function (subject) {

        input.value = "Help me learn " + subject;

        input.focus();
    };


    input.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            window.sendQuestion();
        }

    });

});
