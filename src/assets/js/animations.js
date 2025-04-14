import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    mounted() {
        this.setupObserver();
        this.setupObserverHeader();
        this.setupObserverThreeBlock();


        gsap.registerPlugin(ScrollTrigger);

        // Получаем все элементы с классом .cardAnim
        const containers = document.querySelectorAll('.animScroll');

        containers.forEach(container => {
        const cards = container.querySelectorAll('.cardAnim');
        
          cards.forEach((card, index) => {
            gsap.fromTo(card, {
              opacity: 0,
              y: '20%',
            }, {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: card,
                start: `top+=${index * 50} bottom`,
                end: `bottom+=${index * 20} bottom`,
                scrub: true,
                // markers: true,
              }
            });
          });
        });


        const promoContainers = document.querySelectorAll('.promo-lines');

        promoContainers.forEach((container) => {
          const firstLines = container.querySelectorAll('.first-line');
          const secondLines = container.querySelectorAll('.second-line');
        
          // первая линия крутится влево
          gsap.to(firstLines, {
            rotate: -3,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: `top+=150 bottom`, // старт раньше
                end: `bottom+=150 center`,   // конец позже
                scrub: true,
                // markers: true,
            }
          });
        
          // вторая линия крутится вправо
          gsap.to(secondLines, {
            rotate: 7,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: `top+=150 bottom`,
                end: `bottom+=150 center`,
                scrub: true,
                //   markers: true,
            }
          });
        });
        


        const pillContainers = document.querySelectorAll('.pill-place');

        pillContainers.forEach((container) => {
            const pillAreas = container.querySelectorAll('.pill-area');
            const pillBtns = container.querySelectorAll('.pill-btn');

            // Анимация pill-area (масштаб по X)
            gsap.fromTo(pillAreas, {
                x: '-100%',
                transformOrigin: 'left center',
            }, {
                x: 0,
                ease: 'power3.out',
                scrollTrigger: {
                trigger: container,
                start: `top+=100 bottom`,
                end: `center center`,
                scrub: true,
                markers: true,
                }
            });

            // Анимация pill-btn (масштаб по X + движение слева направо)
            gsap.fromTo(pillBtns, {
                x: -208,
                opacity: 0,
                transformOrigin: 'left center',
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                trigger: container,
                start: `top center`,
                end: `center center`,
                scrub: true,
                markers: true,
                }
            });
        });

        

        
          
          
          
          
                

    },
    methods: {
        setupObserver() {
            // Общий IntersectionObserver для всех элементов
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {

                    // Анимация для swiper-slide
                    if (entry.target.classList.contains('sliderNumber-1')) {

                        const children = entry.target.querySelectorAll('.swiper-slide');  // Замените .child-element на нужный селектор

                        children.forEach((child, index) => {
                            if (entry.isIntersecting) {                 
                                gsap.to(child, {
                                    y: 0,
                                    duration: 1,
                                    delay: index * 0.2,
                                    ease: 'power3.out',
                                });
                            }else{
                                gsap.to(child, {
                                    y: '100%',
                                    duration: 1,
                                    delay: index * 0.2,
                                    ease: 'power3.out',
                                });
                            }
                        });
                    }

                    if (entry.target.classList.contains('sliderNumber-2')) {

                        const children = entry.target.querySelectorAll('.swiper-slide');  // Замените .child-element на нужный селектор

                        children.forEach((child, index) => {
                            if (entry.isIntersecting) {                 
                                gsap.to(child, {
                                    y: 0,
                                    duration: 1.5,
                                    delay: index * 0.2,
                                    ease: 'power3.out',
                                });
                            }else{
                                gsap.to(child, {
                                    y: '100%',
                                    duration: 1.5,
                                    delay: index * 0.2,
                                    ease: 'power3.out',
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
                                duration: 1.5,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                x: '-100%',  // уходит влево
                                duration: 1.5,
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
                                duration: 1.5,
                                ease: 'power3.out',
                            });
                        } else {
                            gsap.to(entry.target, {
                                opacity: 0,
                                x: 50,  // уходит вправо
                                duration: 1.5,
                                ease: 'power3.out',
                            });
                        }
                    }   

                   
                });
            }, {
                threshold: 0.7,
            });

            // Наблюдение за всеми элементами, которые нужно анимировать
            document.querySelectorAll('.sliderNumber-1,.sliderNumber-2,.service-card').forEach((element) => {
                observer.observe(element);
            });
        },


        setupObserverHeader() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.target.tagName.toLowerCase() === 'header') {
                        if (entry.isIntersecting) {                 
                            gsap.fromTo(entry.target, 
                                { y: -68 },
                                {
                                    y: 0,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                        } else {
                            // Если хочешь, можешь вернуть хедер обратно вверх, когда он уходит из видимости
                            gsap.to(entry.target, {
                                y: -68,
                                duration: 1.5,
                                ease: 'power3.out',
                            });
                        }
                    }
                });
            }, {
                threshold: 0,
            });
        
            // Наблюдение за всеми header-элементами
            document.querySelectorAll('header').forEach((element) => {
                observer.observe(element);
            });
        },


        setupObserverThreeBlock() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {


                    if (entry.target.classList.contains('threeBlockAnim')) {

                        const heroName = entry.target.querySelectorAll('.topAnim');
                        const heroTitles = entry.target.querySelectorAll('.leftAnim');
                        const codeSvg = entry.target.querySelectorAll('.rightAnim');                        

                        if (entry.isIntersecting) {                 
                            gsap.fromTo(heroName, 
                                { y: '-600%' },
                                {
                                    y: 20,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.fromTo(heroTitles, 
                                { x: '-200%' },
                                {
                                    x: 0,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.fromTo(codeSvg,
                                { x: '200%' },
                                {
                                    x: 0,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                        }else{
                            gsap.to(heroName, 
                                {
                                    y: '-600%',
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.to(heroTitles, 
                                {
                                    x: '-200%',
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.to(codeSvg,
                                {
                                    x: '200%',
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                        }
                    }


                });
            }, {
                threshold: 0.7,
            });
        
            // Наблюдение за всеми header-элементами
            document.querySelectorAll('.threeBlockAnim').forEach((element) => {
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
  