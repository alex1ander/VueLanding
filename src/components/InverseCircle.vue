<template>
    <div class="inverse-circle" ref="circle"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'
  
  const circle = ref(null)
  
  const handleMouseMove = (event) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
  
    // Вычисляем инверсные координаты относительно центра
    const offsetX = centerX - (event.clientX - centerX)
    const offsetY = centerY - (event.clientY - centerY)
  
    // Анимируем круг к инверсной позиции
    gsap.to(circle.value, {
      x: offsetX - 25, // смещение на половину ширины круга
      y: offsetY - 25,
      duration: 0.5,
      ease: 'power2.out'
    })
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
  </script>
  
  <style scoped>
 .inverse-circle {
  position: fixed;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  pointer-events: none;
  top: 0;
  left: 0;

  background: linear-gradient(134deg, rgba(62, 176, 212, 0.5) 0%, rgba(150, 99, 200, 0.5) 100%);
  box-shadow:
    0 0 20px rgba(62, 176, 212, 0.6),
    0 0 40px rgba(150, 99, 200, 0.4),
    0 0 60px rgba(150, 99, 200, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  mix-blend-mode: screen;
  transition: all 0.3s ease;
}

  </style>
  