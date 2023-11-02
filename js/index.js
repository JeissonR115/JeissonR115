const typewriter = (element, text = "", speed = 100) => {
    let index = 0;
    const type = () => {
        if (index <= text.length) {
            element.textContent = text.slice(0, index);
            index++;
        }
    };

    const animation = () => {
        element.style.animation = "bling .5s infinite step-end alternate";
    };

    const startTyping = () => {
        type();
        animation();
    };

    const intervalId = setInterval(startTyping, speed);

    return {
        stop: () => {
            clearInterval(intervalId);
        },
    };
};

const parentElements = document.querySelectorAll('.typewriter-effect__container');

parentElements.forEach(parentElement => {
    const childElement = parentElement.querySelector('a, p, span');
    const childText = childElement.textContent;

    let typewriterInstance;

    parentElement.addEventListener('mouseenter', () => {
        if (childElement) {
            typewriterInstance = typewriter(childElement, childText,75);
        }
    });
});
