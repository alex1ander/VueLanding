<!-- LogoText.vue -->
<template>
  <div class="logo-text" ref="textContainer">
    <span v-for="(char, index) in textArray" :key="index" class="char">{{ char }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

// Анимация текста
const text = '<AlexDigital/>'  // Текст для анимации
const textArray = text.split('') // Разделение текста на отдельные символы
const textContainer = ref(null)

onMounted(() => {
  gsap.set('.char', { opacity: 1, color: 'rgb(255, 255, 255)' })
  gsap.to('.char', {
    opacity: 1,
    color: 'rgb(255, 189, 46)',
    duration: 3,
    ease: 'power1.inOut',
    repeat: -1,  // Бесконечное повторение
    repeatDelay: 1,
    yoyo: true,  // Анимация будет двигаться вперед и назад
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
