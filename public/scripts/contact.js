const emailButton = document.querySelector('.email');
const emailPopup = document.querySelector('#copyemailpopup');
const emailPrompt = document.querySelector('#copyemailprompt');
const copyEmailBtn = document.querySelector('#copyemail');

if (emailButton && emailPopup && emailPrompt && copyEmailBtn) {
    let isCursorOverPopup = false;

    emailButton.addEventListener('click', () => {
        emailPrompt.style.display = 'flex';
        emailPopup.focus();
    });

    emailPopup.addEventListener('blur', () => {
        if (!isCursorOverPopup) {
            emailPrompt.style.display = 'none';
            copyEmailBtn.textContent = 'Copy email';
        } else {
            emailPopup.focus();
        }
    });

    emailPopup.addEventListener('mouseover', () => {
        isCursorOverPopup = true;
    });

    emailPopup.addEventListener('mouseout', () => {
        isCursorOverPopup = false;
    });

    copyEmailBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('ptmathcircle@gmail.com');
            copyEmailBtn.textContent = 'Copied!';
        } catch (err) {
            console.error('Failed to copy text:', err);
            copyEmailBtn.textContent = 'Try again';
        }
    });
}
