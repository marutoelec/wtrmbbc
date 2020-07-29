"use strict";

const acdHeads = document.querySelectorAll(".acd_menu_head");
const acdcHeads = document.querySelectorAll(".acdc_menu_head");

acdHeads.forEach((clickedHead) => {
    clickedHead.addEventListener("click", () => {
      const acdBody = clickedHead.nextElementSibling;
      acdBody.style.transition = "height 0.2s ease-out";
      
      if (acdBody.style.height) {
        acdBody.style.height = null;
        acdBody.classList.remove('acd-active');
      } else {
        acdBody.style.height = acdBody.scrollHeight + "px";
      }
    });
  });
  acdcHeads.forEach((clickedHead) => {
    clickedHead.addEventListener("click", () => {
      const acdcBody = clickedHead.nextElementSibling;
      acdcBody.style.transition = "height 0.2s ease-out";
      const acdBody = clickedHead.parentElement;
      acdBody.style.transition = "height 0.2s ease-out";
      
      if (acdcBody.style.height) {
        acdcBody.style.height = null;
      } else {
        acdcBody.style.height = acdcBody.scrollHeight + "px";
        acdBody.classList.add('acd-active');
      }
  });
});
