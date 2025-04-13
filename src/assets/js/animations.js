import { gsap } from 'gsap';

export default {
    mounted() {
        this.setupObserver();
    },
    methods: {
        setupObserver() {
            // Общий IntersectionObserver для всех элементов
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // Анимация для swiper-slide
                    if (entry.target.classList.contains('sliderNumber-1')) {

                        const children = entry.target.querySelectorAll('.swiper-slide');  // Замените .child-element на нужный селектор

                        children.forEach(child => {
                            if (entry.isIntersecting) {                 
                                gsap.to(child, {
                                    y: 0,
                                    duration: 1,
                                    ease: 'power3.out',
                                });
                            } else {
                                // Если swiper-slide выходит из области видимости, скрываем дочерний элемент
                                gsap.to(child, {
                                    y: '100%',
                                    duration: 0,
                                    ease: 'none',
                                });
                            }
                        });
                    }

                    // Анимация для h2 (появление слева)
                    if (entry.target.classList.contains('two-part-content')) {
                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                opacity: 1,
                                x: 0,  // сдвиг слева
                                duration: 1,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                x: -50,  // уходит влево
                                duration: 1,
                                ease: 'power3.out',
                            });
                        }
                    }

                    // Анимация для slider-buttons (появление справа)
                    if (entry.target.classList.contains('slider-buttons')) {
                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                opacity: 1,
                                x: 0,  // сдвиг справа
                                duration: 1,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                x: 50,  // уходит вправо
                                duration: 1,
                                ease: 'power3.out',
                            });
                        }
                    }

                    // Анимация для .the-grid-card
                    if (entry.target.classList.contains('the-grid-card')) {
                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                opacity: 1,
                                y: 0,
                                duration: 1,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                y: 50,
                                duration: 1,
                                ease: 'power3.out',
                            });
                        }
                    }

                    if (entry.target.classList.contains('advantage')) {
                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                opacity: 1,
                                x: 0,
                                duration: 1,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                x: 50,
                                duration: 1,
                                ease: 'power3.out',
                            });
                        }
                    }

                    if (entry.target.classList.contains('pill-area')) {

                        // Начальная позиция с использованием translateX
                        gsap.to(entry.target, {
                            scaleY: 0,
                            duration: 0,
                            ease: 'none',
                            delay: 0,
                        });
    
                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                scaleY: 1,
                                ease: 'power3.out',
                                duration: 1,
                                delay: 0.5,
                            });
                        } else {
                            gsap.to(entry.target, {
                                scaleY: 0,
                                ease: 'none',
                                duration: 0,
                                delay: 0,
                            });
                        }
                    }
                    
                    
                    
                    if (entry.target.classList.contains('pill-btn')) {

                        gsap.to(entry.target, {
                            opacity: 0,
                            x: -320,
                            duration: 0,
                            ease: 'none',
                            delay: 0,
                        });

                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                opacity: 1,
                                x: 0,
                                duration: 1,
                                ease: 'power3.out',
                                delay: 1,
                            });
                        } else{
                            gsap.to(entry.target, {
                                x: 0,
                                duration: 0,
                                ease: 'none',
                                delay: 0,
                            });
                        }
                    }


                    if (entry.target.classList.contains('first-line')) {
                        gsap.to(entry.target, {
                            rotate: 0,
                            duration: 0,
                            ease: 'none',
                            delay: 0,
                        });

                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                rotate: -3,
                                duration: 1.5,
                                ease: 'power3.out',
                                delay: 1,
                            });
                        } else{
                            gsap.to(entry.target, {
                                rotate: 0,
                                duration: 0,
                                ease: 'none',
                                delay: 0,
                            });
                        }
                    }

                    if (entry.target.classList.contains('second-line')) {
                        gsap.to(entry.target, {
                            rotate: 0,
                            duration: 0,
                            ease: 'none',
                            delay: 0,
                        });

                        if (entry.isIntersecting) {
                            gsap.to(entry.target, {
                                rotate: 7,
                                duration: 1.5,
                                ease: 'power3.out',
                                delay: 1,
                            });
                        } else{
                            gsap.to(entry.target, {
                                rotate: 0,
                                duration: 0,
                                ease: 'none',
                                delay: 0,
                            });
                        }
                    }
                   
                });
            }, {
                threshold: 0.5,
            });

            // Наблюдение за всеми элементами, которые нужно анимировать
            document.querySelectorAll('.sliderNumber-1,.two-part-content,.the-grid-card,.advantage,.pill-area,.pill-btn,.service-card,.container-lines').forEach((element) => {
                observer.observe(element);
            });
        },
    },
};


document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth >= 500) return;
  
    const elementsBnf = document.querySelectorAll('.the-grid-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          entry.target.classList.add('simulated-hover');
        } else {
          entry.target.classList.remove('simulated-hover');
        }
      });
    }, {
      threshold: 1.0
    });
  
    elementsBnf.forEach(el => observer.observe(el));
});
  