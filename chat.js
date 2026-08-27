const input = document.getElementById("questionInput");
const messages = document.getElementById("messages");

const AI_BACKEND =
    "https://al-ai-tutor.chathumikachirath.workers.dev/api/chat";


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


async function sendQuestion() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    const thinking = document.createElement("div");

    thinking.classList.add(
        "message",
        "ai-message-chat"
    );

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

            console.error("AI Error:", data);

            addMessage(
                "❌ AI එකෙන් answer එක ගන්න බැරි වුණා.\n\n" +
                (data.error || "Unknown error"),
                "ai"
            );

            return;
        }


        addMessage(
            data.answer || "AI එකෙන් answer එකක් ලැබුණේ නැහැ.",
            "ai"
        );


    } catch (error) {

        thinking.remove();

        console.error(error);

        addMessage(
            "❌ AI server එකට connect වෙන්න බැරි වුණා.",
            "ai"
        );

    }
}


function quickQuestion(subject) {

    input.value =
        "Help me learn " + subject;

    input.focus();
}


input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendQuestion();

        }

    }
);
