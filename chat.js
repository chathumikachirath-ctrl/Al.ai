const input = document.getElementById("questionInput");
const messages = document.getElementById("messages");

const AI_BACKEND =
    "https://cold-bonus-bd43.chathumikachirath.workers.dev/api/chat";


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


async function sendQuestion() {

    const question = input.value.trim();

    if (!question) return;

    addMessage(question, "user");

    input.value = "";

    const thinking = document.createElement("div");

    thinking.className = "message ai-message-chat";
    thinking.textContent = "🤖 Thinking...";

    messages.appendChild(thinking);

    try {

        const response = await fetch(AI_BACKEND, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: question
            })

        });


        const data = await response.json();

        thinking.remove();


        if (!response.ok) {

            console.error("Backend error:", data);

            let errorText = "❌ AI Error\n\n";

            if (data.error) {
                errorText += data.error;
            }

            if (data.status) {
                errorText += "\nStatus: " + data.status;
            }

            if (data.details) {
                errorText += "\n\nDetails: " +
                    JSON.stringify(data.details);
            }

            addMessage(errorText, "ai");

            return;
        }


        addMessage(
            data.answer || "❌ Gemini didn't return an answer.",
            "ai"
        );


    } catch (error) {

        thinking.remove();

        addMessage(
            "❌ Connection Error\n\n" + error.message,
            "ai"
        );

    }
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
