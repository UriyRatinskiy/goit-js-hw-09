const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    startBtn.disabled = true,
    changeBgColor();
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  startBtn.disabled = false,
  clearInterval(timerId); 
});

function changeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


