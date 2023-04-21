"use script";

const toggle = document.getElementById("toggle");

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// Toggle Nav
toggle.addEventListener("click", function (e) {
  console.log(e.target);
  document.body.classList.toggle("show-nav");
});

// Show Modal
open.addEventListener("click", function (e) {
  modal.classList.add("show-modal");
});

// Hide Modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide Modal clicking outside the modal
window.addEventListener("click", function (e) {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});

// ESC keyboard
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("show-modal")) {
    modal.classList.remove("show-modal");
  }
});
