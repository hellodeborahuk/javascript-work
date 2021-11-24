const body = document.body;
const screensaver = document.getElementById("screensaver");
const orb = document.getElementById("orb");
let FPS = 60;
let timer;
let countEl = document.getElementById("count-el");
let count = 3;
let milliseconds = 1000;
let modalOpen = false;
let saverInterval;

function add() {
  count += 1;
  countEl.textContent = count;
}

function sub() {
  count -= 1;
  countEl.textContent = count;
}

screensaver.addEventListener("click", countdown);
body.addEventListener("mousemove", countdown);

countdown();

function countdown() {
  if (timer) {
    screensaver.style.display = "none";
    clearTimeout(timer);
    clearInterval(saverInterval);
  }
  timer = setTimeout(() => {
    if (modalOpen === false) {
      screensaver.style.display = "flex";
      saverFunc();
    }
  }, count * milliseconds);
}

let width,
  height,
  velocityX = 1,
  velocityY = 1,
  pause = true;

let saverFunc = () => {
  saverInterval = setInterval(() => {
    if (pause) return;

    let rect = orb.getBoundingClientRect();

    let left = rect.x;
    let top = rect.y;

    if (left + rect.width >= width || left <= 0) {
      velocityX = -velocityX;
    }
    if (top + rect.height >= height || top <= 0) {
      velocityY = -velocityY;
    }

    orb.style.left = rect.x + velocityX + "px";
    orb.style.top = rect.y + velocityY + "px";
  }, 700 / FPS);
};

const reset = () => {
  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  pause =
    width <= orb.getBoundingClientRect().width ||
    height <= orb.getBoundingClientRect().height;

  orb.style.left = "calc(50vw - 150px)";
  orb.style.top = "calc(50vh - 28px)";
};

reset();

window.addEventListener("resize", reset, true);

const modal = document.getElementById("myModal");
const cog = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

cog.onclick = function () {
  if (modal.style.display === "none") {
    modal.style.display = "block";
    modalOpen = true;
  } else {
    modal.style.display = "none";
    modalOpen = false;
  }
};

span.onclick = function () {
  modal.style.display = "none";
  modalOpen = false;
};
