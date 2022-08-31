const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const spaseBtn = document.getElementById("spase");
const startBtn = document.getElementById("start");

spaseBtn.addEventListener("click", onJump);
startBtn.addEventListener("click", onStartGame);

function onStartGame() {
  cactus.classList.add("cactusMov");
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

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over");
    cactus.classList.remove("cactusMov");
  }
}, 10);
