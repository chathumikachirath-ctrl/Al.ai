const input = document.getElementById("questionInput");
const messages = document.getElementById("messages");

const AI_BACKEND =
  "https://al-ai-tutor.chathumikachirath.workers.dev/";

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

  if (!question) return;

  addMessage(question, "user");
  input.value = "";

  const thinking = document.createElement("div");
  thinking.classList.add("message", "ai-message-chat");
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
      console.error(data);

      addMessage(
        "❌ AI Error: " + (data.error || "Unknown error"),
        "ai"
      );

      return;
    }

    addMessage(data.answer, "ai");

  } catch (error) {
    console.error(error);

    thinking.remove();

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

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendQuestion();
  }
});
