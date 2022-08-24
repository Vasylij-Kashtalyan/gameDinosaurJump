const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", onJump);

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
  }
}, 10);
