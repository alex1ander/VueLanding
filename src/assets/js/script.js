// src/assets/js/script.js

import Lenis from '@studio-freight/lenis';

// Функция для инициализации плавного скролла
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    smoothTouch: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}

// Функция для обработки кликов на кнопки попапа
export function initPopup() {
  const popup = document.querySelector('#pop-up');
  document.querySelectorAll('.btn-pop-up').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Открыть попап
      popup?.classList.toggle('active');

      
    });
  });
}

