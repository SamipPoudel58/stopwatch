const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const start = document.querySelector(".start");

let running = false;
let count = 0;

start.addEventListener("click", (e) => {
  running = !running;
  if (running) {
    e.target.innerText = "Stop";
    if (count === 0) {
      setInterval(increase, 1000);
    }
  }
});

function increase() {
  if (!running) {
    start.innerText = "Start";
    return;
  }
  count++;
  second.innerText = count;
  if (count > 59) {
    count = 0;
    minute.innerText++;
  }
  if (minute.innerText > 59) {
    minute.innerText = 0;
    hour.innerText++;
  }
}
