let counter = 0;
let counterText = document.getElementById('counter-text')
counterText.innerText = counter;

function timerIncrease() {
    counter++;
    counterText.innerText = counter;
}




