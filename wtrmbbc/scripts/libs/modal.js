"use stript";

const shows = document.querySelectorAll(".modal__show");
const closes = document.querySelectorAll(".modal__close");
const backGrounds = document.querySelectorAll(".modal__background");

shows.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.nextElementSibling;
    modal.classList.add("is-show");
  });
});

closes.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.closest(".modal");
    modal.classList.remove("is-show");
  });
});

backGrounds.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.closest(".modal");
    modal.classList.remove("is-show");
  });
});
