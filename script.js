window.addEventListener("load", start);

function start() {
  document.querySelector("#coin1_container").addEventListener("click", onClick);
  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", reset);
}

function onClick() {
  console.log("click");
  // so you can only click on the coin once.
  document.querySelector("#coin1_container").removeEventListener("click", onClick);
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom_out");
}

function reset() {
  // below removes paused and zoom_out so you can see coin again
  document.querySelector("#coin1_container").classList.remove("paused");
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  // below resets animation.
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetLeft;
  document.querySelector("#coin1_container").classList.add("falling");

  // below enables you to click on the coin again. when the next animation starts
  document.querySelector("#coin1_container").addEventListener("click", onClick);
}
