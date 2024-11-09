import "./styles.css";

function buttonHover(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.firstChild.nextSibling.classList.add("visible");
            button.style.backgroundColor = 'rgb(67, 67, 67)';
        });
    });
}

function buttonHoverOut(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener("mouseout", () => {
            button.firstChild.nextSibling.classList.remove("visible");
            button.style.background = 'none';
        });
    });
}

buttonHover();
buttonHoverOut();