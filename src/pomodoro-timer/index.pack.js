// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

const workBtn = document.getElementById("work-btn");
const shortBreakBtn = document.getElementById("short-break-btn");
const longBreakBtn = document.getElementById("long-break-btn");
const currentStatus = document.getElementById("current-status");
const resetBtn = document.getElementById("reset-btn");
let timeDisplay = document.getElementById("time-display");
let secondsRemaining = 0;

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

setInterval(function () {
  if (secondsRemaining > 0) {
    secondsRemaining--;
    const minutes = pad(Math.floor(secondsRemaining / 60), 2);
    const seconds = pad(Math.ceil(secondsRemaining % 60), 2);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    if (secondsRemaining === 0) {
      audio.play();
    }
  }
}, 1000);

workBtn.addEventListener("click", function () {
  secondsRemaining = 60 * 25;
  currentStatus.textContent = "Keep working";
});

shortBreakBtn.addEventListener("click", function () {
  secondsRemaining = 60 * 5;
    currentStatus.textContent = "You have a 5 minute break";

});

longBreakBtn.addEventListener("click", function () {
  secondsRemaining = 60 * 15;
  currentStatus.textContent = "You have a 15 minute break";

});

resetBtn.addEventListener("click", function() {
    secondsRemaining = 0;
    const minutes = pad(secondsRemaining, 2);
    const seconds = pad(secondsRemaining, 2);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    currentStatus.textContent = "";
})
