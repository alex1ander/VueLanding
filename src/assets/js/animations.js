import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
    mounted() {
        let gridCount;

        const screenWidth = window.innerWidth;

        if (screenWidth <= 500) {
            gridCount = 1;
        } else if (screenWidth <= 1024) {
            gridCount = 2;
        } else {
            gridCount = 3;
        }
        this.setupObserverHeader();
        this.setupObserverFooter();
        this.setupObserverThreeBlock();


        gsap.registerPlugin(ScrollTrigger);

        // Получаем все элементы с классом .cardAnim
        const containers = document.querySelectorAll('.animScroll');

        containers.forEach(container => {
            const cards = container.querySelectorAll('.cardAnim');

            cards.forEach((card, index) => {
                gsap.fromTo(card, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: card,
                        start: `top+=${(index % gridCount) * 100} bottom`,
                        end: `bottom bottom`,
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
                // markers: true,
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
                // markers: true,
                }
            });
        });


        const scrollAnimation = document.querySelectorAll('.scrollAnimation');

        scrollAnimation.forEach((container) => {
            const leftAnim = container.querySelectorAll('.leftAnim');
            const rightAnim = container.querySelectorAll('.rightAnim');
            const opacityAnim = container.querySelectorAll('.opacityAnim');

            // Анимация слева
            gsap.fromTo(leftAnim, {
                x: '-100%',
                transformOrigin: 'left center',
            }, {
                x: 0,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: container,
                    start: `top bottom`,
                    end: `center center`,
                    scrub: true,
                    // markers: true,
                }
            });

            // Анимация справа
            gsap.fromTo(rightAnim, {
                x: '100%',
                transformOrigin: 'left center',
            }, {
                x: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: `top bottom`,
                    end: `center center`,
                    scrub: true,
                    // markers: true,
                }
            });

            // Анимация появления
            gsap.fromTo(opacityAnim, {
                opacity: 0,
            }, {
                opacity: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: container,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    // markers: true,
                }
            });
        });




    },
    methods: {
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

        setupObserverFooter() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const container = entry.target.querySelector('.footer-container');
                    if (!container) return;
        
                    if (entry.isIntersecting) {
                        gsap.fromTo(container,
                            { y: 200 },
                            {
                                y: 0,
                                duration: 1,
                                delay: 0.1,
                                ease: 'power3.out',
                            }
                        );
                    } else {
                        gsap.to(container, {
                            y: 200,
                            duration: 1,
                            ease: 'power3.out',
                        });
                    }
                });
            }, {
                threshold: 0,
            });
        
            // Наблюдение за всеми footer-элементами
            document.querySelectorAll('footer').forEach((footerEl) => {
                observer.observe(footerEl);
            });
        },
        
        


        setupObserverThreeBlock() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {


                    if (entry.target.classList.contains('threeBlockAnim')) {

                        const topAnim = entry.target.querySelectorAll('.topAnim');    
                        const leftAnim = entry.target.querySelectorAll('.leftAnim');
                        const rightAnim = entry.target.querySelectorAll('.rightAnim');                        

                        if (entry.isIntersecting) {
                            gsap.fromTo(topAnim, 
                                { y: '-600%' }, 
                                {
                                    y: 20,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.fromTo(leftAnim, 
                                { x: '-200%' }, 
                                {
                                    x: 0,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                            gsap.fromTo(rightAnim, 
                                { x: '200%' }, 
                                {
                                    x: 0,
                                    duration: 1.5,
                                    delay: 0.1,
                                    ease: 'power3.out',
                                }
                            );
                        } else {
                            gsap.to(topAnim, {
                                y: '-600%',
                                duration: 1.5,
                                delay: 0.1,
                                ease: 'power3.out',
                            });
                            gsap.to(leftAnim, {
                                x: '-200%',
                                duration: 1.5,
                                delay: 0.1,
                                ease: 'power3.out',
                            });

                            gsap.to(rightAnim, {
                                x: '200%',
                                duration: 1.5,
                                delay: 0.1,
                                ease: 'power3.out',
                            });
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
  