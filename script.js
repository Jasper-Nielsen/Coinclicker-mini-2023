window.addEventListener("load", start);

function start() {
    // document.querySelector("#coin1_container").classList.add("falling");
  document.querySelector("#coin1_container").addEventListener("click", onClick);
  document.querySelector("#coin1_container")
    .addEventListener("animationend", reset);
}

function onClick() {
    // document
    //   .querySelector("#coin1_container")
    //   .removeEventListener("click", onClick);
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom_out");
}

function reset() {
    document.querySelector("#coin1_container").classList.remove("paused");
    document.querySelector("#coin1_sprite").classList.remove("zoom_out");
}
