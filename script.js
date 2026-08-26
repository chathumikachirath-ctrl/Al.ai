function startChat() {
    alert("🤖 A/L AI Tutor\n\nAI Tutor is coming soon!");
}

function scrollToSubjects() {
    const subjects = document.getElementById("subjects");

    if (subjects) {
        subjects.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function selectSubject(subject) {
    alert("📚 " + subject + "\n\nYou selected " + subject + "!");
}


// Login button
document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector(".login-btn");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            alert("🔐 Login system is coming soon!");
        });
    }

});
