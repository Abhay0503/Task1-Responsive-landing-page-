let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapList = document.getElementById("lapList");

// Update Timer Display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${h}:${m}:${s}`;
}

// Start Timer
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;

    timer = setInterval(() => {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 1000);
  }
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;

  updateDisplay();

  lapList.innerHTML = "";
});

// Lap Time
lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const lapTime = display.innerText;

    const li = document.createElement("li");
    li.innerText = `Lap ${lapList.children.length + 1}: ${lapTime}`;

    lapList.appendChild(li);
  }
});

// Initial Display
updateDisplay();