// ===============================
// A/L AI - Main JavaScript
// ===============================

// Start AI Chat
function startChat() {
    alert(
        "🤖 A/L AI Tutor\n\n" +
        "The AI tutor will be available soon!\n\n" +
        "We are currently building the AI system."
    );
}


// Scroll to subjects
function scrollToSubjects() {
    const subjects = document.getElementById("subjects");

    if (subjects) {
        subjects.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Select subject
function selectSubject(subject) {

    alert(
        "📚 " + subject + "\n\n" +
        "Great choice! 🎓\n\n" +
        "The AI tutor for " + subject +
        " will be available soon."
    );
}


// Login button
const loginButton = document.querySelector(".login-btn");

if (loginButton) {

    loginButton.addEventListener("click", function () {

        alert(
            "🔐 Login\n\n" +
            "Login system is coming soon!"
        );

    });

}


// Add a small welcome message when page loads
window.addEventListener("load", function () {

    console.log(
        "🚀 A/L AI website loaded successfully!"
    );

});
