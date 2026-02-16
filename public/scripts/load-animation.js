const logo = document.querySelector(".logo-img");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");

setTimeout(() => {
    logo.setAttribute("data-state", "load");
    setTimeout(() => {
        title.setAttribute("data-state", "load");
        setTimeout(() => {
            subtitle.setAttribute("data-state", "load");
        }, 300);
    }, 300);
}, 300);
