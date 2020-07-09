document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
  const _toggleSlideAnimation = function (el, inview) {
    if (inview) {
      hero.start();
    } else {
      hero.stop();
    }
  };

  const _textAnimation = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
    }
  };

  const _inviewAnimation = function (el, inview) {
    if (inview) {
      el.classList.add("inview");
    } else {
      el.classList.remove("inview");
    }
  };

  

  new ScrollObserver(".animate-title", _textAnimation);

  new ScrollObserver(".cover-slide", _inviewAnimation);
  
  new ScrollObserver(".swiper-container", _toggleSlideAnimation);

  new MobileMenu();
});
