window.onload = () => {
    console.log("page loaded");

    const title = document.querySelector('#mainTitle');
    const dayMessage = document.querySelector('#dayMessage');

    const changeTextBtn = document.querySelector('#changeTextBtn');
    const colorBtn = document.querySelector('#colorBtn');
    const colorBox = document.querySelector('#colorBox');

    changeTextBtn.addEventListener('click', () => {
        console.log("change text button pressed");
        title.textContent = "Coding is Awesome!";
    });

    colorBtn.addEventListener('click', () => {
        console.log("color button pressed");
        colorBox.style.backgroundColor = "#b7d4b7";
    });

    const day = new Date().getDay();
    console.log("day number:", day);

    if (day === 0) {
        dayMessage.textContent = "Today is Sunday";
    } else if (day === 1) {
        dayMessage.textContent = "Today is Monday";
    } else if (day === 2) {
        dayMessage.textContent = "Today is Tuesday";
    } else if (day === 3) {
        dayMessage.textContent = "Today is Wednesday";
    } else if (day === 4) {
        dayMessage.textContent = "Today is Thursday";
    } else if (day === 5) {
        dayMessage.textContent = "Today is Friday";
    } else if (day === 6) {
        dayMessage.textContent = "Today is Saturday";
    }
};
