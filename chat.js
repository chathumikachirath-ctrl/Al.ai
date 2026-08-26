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

    if (!question) {
        return;
    }

    // Show user's message
    addMessage(question, "user");

    // Clear input
    input.value = "";

    // Temporary loading message
    addMessage("🤖 Thinking...", "ai");

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


        // Remove "Thinking..."
        const aiMessages =
            document.querySelectorAll(".ai-message-chat");

        if (aiMessages.length > 0) {
            aiMessages[aiMessages.length - 1].remove();
        }


        if (!response.ok) {

            console.error("Backend error:", data);

            addMessage(
                "❌ Sorry, AI එකෙන් answer එක ගන්න බැරි වුණා.",
                "ai"
            );

            return;
        }


        addMessage(
            data.answer || "AI එකෙන් answer එකක් ලැබුණේ නැහැ.",
            "ai"
        );


    } catch (error) {

        console.error("Connection error:", error);

        const aiMessages =
            document.querySelectorAll(".ai-message-chat");

        if (aiMessages.length > 0) {
            aiMessages[aiMessages.length - 1].remove();
        }

        addMessage(
            "❌ AI server එකට connect වෙන්න බැරි වුණා.",
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
