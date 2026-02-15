const emailButton = document.querySelector(".email");
const emailPopup = document.querySelector("#copyemailpopup");
const emailPrompt = document.querySelector("#copyemailprompt");
const copyEmailBtn = document.querySelector("#copyemail");

emailButton.addEventListener("click", () => {
    emailPrompt.style.display = "flex";
    emailPopup.focus();
});

emailPopup.addEventListener("blur", () => {
    setTimeout(() => {
        emailPrompt.style.display = "none";
    }, 75);
});

copyEmailBtn.addEventListener("click", () => {
    try {
        navigator.clipboard.writeText("ptmathcircle@gmail.com");
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});