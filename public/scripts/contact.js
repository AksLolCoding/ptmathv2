const emailButton = document.querySelector(".email");
const emailPopup = document.querySelector("#copyemailpopup");
const emailPrompt = document.querySelector("#copyemailprompt");
const copyEmailBtn = document.querySelector("#copyemail");
var isCursorOverPopup = false;

emailButton.addEventListener("click", () => {
    emailPrompt.style.display = "flex";
    emailPopup.focus();
});

emailPopup.addEventListener("blur", () => {
    if (!isCursorOverPopup) {
        emailPrompt.style.display = "none";
        copyEmailBtn.innerHTML = "Copy email";
    } else {
        emailPopup.focus();
    }
});

emailPopup.addEventListener("mouseover", () => {
    isCursorOverPopup = true;
});

emailPopup.addEventListener("mouseout", () => {
    isCursorOverPopup = false;
});

copyEmailBtn.addEventListener("click", () => {
    try {
        navigator.clipboard.writeText("ptmathcircle@gmail.com");
        copyEmailBtn.innerHTML = "Copied!";
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});