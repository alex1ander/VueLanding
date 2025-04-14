document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.btn-pop-up').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); 
        document.querySelector('#pop-up').classList.toggle('active');
      });
    });
});



import Lenis from '@studio-freight/lenis';

export default {
  mounted() {
    // Инициализация Lenis
    const lenis = new Lenis({
      lerp: 0.1, // Параметр для плавности (от 0 до 1)
      smoothWheel: true, // Включение плавной прокрутки колесиком мыши
      smoothTouch: true, // Плавность для сенсорных экранов
    });

    // Анимация прокрутки
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  
}
