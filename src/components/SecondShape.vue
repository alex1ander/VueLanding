<template>
    <div class="second-shape" ref="shape"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { gsap } from 'gsap'
  
  const shape = ref(null)
  const mouseX = ref(window.innerWidth / 2) // начальная X-позиция
  
  const updatePosition = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollPercent = window.scrollY / maxScroll
    const yPos = scrollPercent * window.innerHeight

    const rotation = scrollPercent * 360 // или 180, если хочешь меньше вращения

    gsap.to(shape.value, {
        x: mouseX.value - 40,
        y: yPos,
        rotation: rotation,
        duration: 0.5,
        ease: 'power2.out',
    })
    }

  
  const handleMouseMove = (event) => {
    mouseX.value = event.clientX
    updatePosition()
  }
  
  const handleScroll = () => {
    updatePosition()
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .second-shape {
    position: fixed;
    width: 100px;
    height: 100px;
    border-radius: 20%;
    pointer-events: none;
    top: 0;
    left: 0;
    transform: translate(0,-50%);
    background: linear-gradient(134deg, rgba(255, 189, 46, 0.5) 0%, rgba(255, 50, 150, 0.5) 100%);
    box-shadow:
      0 0 20px rgba(255, 189, 46, 0.6),
      0 0 40px rgba(255, 50, 150, 0.4),
      0 0 60px rgba(255, 50, 150, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    mix-blend-mode: screen;
    transition: all 0.3s ease;
  }
  </style>
  