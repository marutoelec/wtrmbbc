// "use stript";

const shows = document.querySelectorAll(".modal__show");
const closes = document.querySelectorAll(".modal__close");
const backGrounds = document.querySelectorAll(".modal__background");

shows.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.nextElementSibling;
    modal.classList.add("is-show");
    bodyFixedOn();
    
  });
});

closes.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.closest(".modal");
    modal.classList.remove("is-show");
    bodyFixedOff();
  });
});

backGrounds.forEach((clickedHead) => {
  clickedHead.addEventListener("click", () => {
    const modal = clickedHead.closest(".modal");
    modal.classList.remove("is-show");
    bodyFixedOff();
  });
});

// モーダル表示時の背景固定はmobile-menu.jsで設定済

let scrollPosition;
const ua = window.navigator.userAgent.toLowerCase();
const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
const body = document.querySelector('body');

function bodyFixedOn() {
    if(isiOS){
        scrollPosition = window.pageYOffset;
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
    }else {
        body.style.overflow = 'hidden';
    }
}

function bodyFixedOff() {
    if(isiOS){
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        window.scrollTo(0, scrollPosition);
    }else {
        body.style.removeProperty('overflow');
    }
}
