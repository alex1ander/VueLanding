<!-- LogoText.vue -->
<template>
  <a href="#hero-content" class="logo-text" ref="textContainer">
    <span v-for="(char, index) in textArray" :key="index" class="char">{{ char }}</span>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Анимация текста
const text = '<AlexDigital/>'  // Текст для анимации
const textArray = text.split('') // Разделение текста на отдельные символы
const textContainer = ref(null)

onMounted(() => {
  const chars = textContainer.value.querySelectorAll('.char')
  gsap.set(chars, { opacity: 1, color: 'rgb(255, 50, 150)' })
  gsap.to(chars, {
    opacity: 1,
    color: 'rgb(255, 189, 46)',
    duration: 2,
    ease: 'power1.inOut',
    repeat: -1,
    repeatDelay: 1,
    stagger: 0.1,
    yoyo: true,
  })
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
.logo-text span {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: rgb(255, 189, 46);
  font-size: 24px;
}
</style>
