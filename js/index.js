const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const spaseBtn = document.getElementById("spase");
const startBtn = document.getElementById("start");
const value = document.getElementById("value");

spaseBtn.addEventListener("click", onJump);
startBtn.addEventListener("click", onStartGame);

function onStartGame() {
  cactus.classList.add("cactusMov");
  spaseBtn.disabled = false;
}

function onJump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

let GameOver = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft <= 1) {
    totalValue();
  }

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over");
    cactus.classList.remove("cactusMov");

    spaseBtn.disabled = true;
    value.textContent = 0;
  }
}, 10);

function totalValue() {
  currentValue = value.textContent++;
}
let currentValue = 0;
