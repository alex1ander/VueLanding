<template>
  <div 
    class="cursor-circle" 
    :class="{ 'cursor-small': isHovering }" 
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const isHovering = ref(false)

function onMouseMove(e) {
  x.value = e.clientX
  y.value = e.clientY
}

function onMouseOver(e) {
  if (e.target.classList.contains('hover-target')) {
    isHovering.value = true
  }
}

function onMouseOut(e) {
  if (e.target.classList.contains('hover-target')) {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mouseout', onMouseOut)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mouseout', onMouseOut)
})
</script>

<style scoped>
.cursor-circle {
  position: fixed;
  pointer-events: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #3EB0D4;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
  z-index: 100000;
  mix-blend-mode: difference;
}

.cursor-small {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
