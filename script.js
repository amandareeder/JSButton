const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
//added a delay to make the speeding up noticeable
let count = 0;
let intervalId;
let currentDelay = 200; // First delay in order to hold button
const speedUpFactor = 0.8; // Reduce delay when holding

function updateCountDisplay() {
    countSpan.textContent = count;
}

function increment() {
    count++;
    updateCountDisplay();
}

incrementButton.addEventListener('click', () => {
    // normal click
    if (!intervalId) {
        increment();
    }
});

incrementButton.addEventListener('mousedown', () => {
    //holding
    currentDelay = 200; // Reset delay for new hold
    intervalId = setInterval(() => {
        increment();
        // Speed up 
        currentDelay = Math.max(50, currentDelay * speedUpFactor); // Delay
        clearInterval(intervalId);
        intervalId = setInterval(increment, currentDelay); 
    }, currentDelay);
});

incrementButton.addEventListener('mouseup', () => {
    clearInterval(intervalId);
    intervalId = null;
});

incrementButton.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    intervalId = null;
});

updateCountDisplay(); //make this all visible