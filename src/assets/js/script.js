// src/assets/js/script.js
import Lenis from '@studio-freight/lenis'

let lenisInstance = null

// Инициализация плавного скролла
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    smooth: true,
    smoothTouch: true,
  })

  lenisInstance = lenis // Сохраняем для других функций

  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

// Плавный скролл по якорным ссылкам (например, .main-menu a)
export function initAnchorLinks() {
  if (!lenisInstance) return

  document.querySelectorAll('.main-menu a, .logo-text').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()

      const href = btn.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      const target = document.querySelector(href)
      if (target) {
        lenisInstance.scrollTo(target, {
          offset: 0, // смещение, если есть фиксированный header
          duration: 1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      }
    })
  })
}
