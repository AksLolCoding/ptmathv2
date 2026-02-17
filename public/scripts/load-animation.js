const introItems = document.querySelectorAll('.intro-item');

introItems.forEach((item, index) => {
    window.setTimeout(() => {
        item.classList.add('is-ready');
    }, 180 + index * 140);
});
