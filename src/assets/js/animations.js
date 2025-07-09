// src/assets/js/animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  let gridCount;

  const screenWidth = window.innerWidth;

  if (screenWidth <= 500) {
    gridCount = 1;
  } else if (screenWidth <= 1024) {
    gridCount = 2;
  } else {
    gridCount = 3;
  }

  gsap.registerPlugin(ScrollTrigger);

  // === Все анимации ScrollTrigger ===
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
        }
      });
    });
  });

  const promoContainers = document.querySelectorAll('.promo-lines');
  promoContainers.forEach((container) => {
    const firstLines = container.querySelectorAll('.first-line');
    const secondLines = container.querySelectorAll('.second-line');

    gsap.to(firstLines, {
      rotate: -3,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: `top+=150 bottom`,
        end: `bottom+=150 center`,
        scrub: true,
      }
    });

    gsap.to(secondLines, {
      rotate: 7,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: `top+=150 bottom`,
        end: `bottom+=150 center`,
        scrub: true,
      }
    });
  });

  const pillContainers = document.querySelectorAll('.pill-place');
  pillContainers.forEach((container) => {
    const pillAreas = container.querySelectorAll('.pill-area');
    const pillBtns = container.querySelectorAll('.pill-btn');

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
      }
    });

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
      }
    });
  });

  const scrollAnimation = document.querySelectorAll('.scrollAnimation');
  scrollAnimation.forEach((container) => {
    const leftAnim = container.querySelectorAll('.leftAnim');
    const rightAnim = container.querySelectorAll('.rightAnim');
    const opacityAnim = container.querySelectorAll('.opacityAnim');

    gsap.fromTo(leftAnim, { x: '-100%' }, {
      x: 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: `top bottom`,
        end: `center center`,
        scrub: true,
      }
    });

    gsap.fromTo(rightAnim, { x: '100%' }, {
      x: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: `top bottom`,
        end: `center center`,
        scrub: true,
      }
    });

    gsap.fromTo(opacityAnim, { opacity: 0 }, {
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    });
  });

  // Наблюдатель хедера
  const setupObserverHeader = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.tagName.toLowerCase() === 'header') {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target, { y: -68 }, {
              y: 0,
              duration: 1.5,
              delay: 0.1,
              ease: 'power3.out',
            });
          } else {
            gsap.to(entry.target, {
              y: -68,
              duration: 1.5,
              ease: 'power3.out',
            });
          }
        }
      });
    }, { threshold: 0 });

    document.querySelectorAll('header').forEach((element) => {
      observer.observe(element);
    });
  };

  const setupObserverFooter = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const container = entry.target.querySelector('.footer-container');
        if (!container) return;

        if (entry.isIntersecting) {
          gsap.fromTo(container, { y: 200 }, {
            y: 0,
            duration: 1,
            delay: 0.1,
            ease: 'power3.out',
          });
        } else {
          gsap.to(container, {
            y: 200,
            duration: 1,
            ease: 'power3.out',
          });
        }
      });
    }, { threshold: 0 });

    document.querySelectorAll('footer').forEach((footerEl) => {
      observer.observe(footerEl);
    });
  };

  const setupObserverThreeBlock = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.target.classList.contains('threeBlockAnim')) return;

        const topAnim = entry.target.querySelectorAll('.topAnim');
        const leftAnim = entry.target.querySelectorAll('.leftAnim');
        const rightAnim = entry.target.querySelectorAll('.rightAnim');

        if (entry.isIntersecting) {
          gsap.fromTo(topAnim, { y: '-600%' }, {
            y: 20,
            duration: 1.5,
            delay: 0.1,
            ease: 'power3.out',
          });
          gsap.fromTo(leftAnim, { x: '-200%' }, {
            x: 0,
            duration: 1.5,
            delay: 0.1,
            ease: 'power3.out',
          });
          gsap.fromTo(rightAnim, { x: '200%' }, {
            x: 0,
            duration: 1.5,
            delay: 0.1,
            ease: 'power3.out',
          });
        } else {
          gsap.to(topAnim, { y: '-600%', duration: 1.5, delay: 0.1, ease: 'power3.out' });
          gsap.to(leftAnim, { x: '-200%', duration: 1.5, delay: 0.1, ease: 'power3.out' });
          gsap.to(rightAnim, { x: '200%', duration: 1.5, delay: 0.1, ease: 'power3.out' });
        }
      });
    }, { threshold: 0.7 });

    document.querySelectorAll('.threeBlockAnim').forEach((element) => {
      observer.observe(element);
    });
  };

  setupObserverHeader();
  setupObserverFooter();
  setupObserverThreeBlock();

  // Mobile only "hover" simulation
  if (window.innerWidth < 500) {
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
  }
}
