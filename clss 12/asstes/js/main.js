//swiper js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //AOS
  AOS.init();

// CounterUp2
const counterUp = window.counterUp.default;

const callback = (entries) => {
    entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
            counterUp(el, {
                duration: 2000,
                delay: 16,
            });
            el.classList.add('is-visible');
        }
    });
};

// Use querySelectorAll to select all elements with the class "counter"
const elements = document.querySelectorAll('.counter');

// Create an IntersectionObserver for each "counter" element
elements.forEach((el) => {
    const IO = new IntersectionObserver(callback, { threshold: 1 });
    IO.observe(el);
});