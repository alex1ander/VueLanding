<script setup>
import { watch, ref, defineProps,  } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: null
  }
})

// const emit = defineEmits(['close-menu'])
const { t } = useI18n()
const animateMenu = ref(false)

const menuItems = [
  { labelKey: 'menuOurServices', href: '#our-service' },
  { labelKey: 'menuOurWorks', href: '#our-products' },
  { labelKey: 'menuAboutUs', href: '#advantages' },
  { labelKey: 'menuPrice', href: '#price' },
]

watch(() => props.isOpen, (newVal) => {
  if (newVal === true) {
    animateMenu.value = false
    setTimeout(() => {
      animateMenu.value = true
    }, 50)
  } else if (newVal === false) {
    animateMenu.value = false
  }
})
</script>

<template>
  <ul 
    class="main-menu" 
    :class="{ animate: animateMenu, 'no-animate': props.isOpen === null }"
  >
    <li
      v-for="(item, index) in menuItems"
      :key="index"
      class="menu-item"
      :style="props.isOpen !== null ? { '--delay': (index * 0.15) + 's' } : {}"
    >
      <router-link 
        :to="{hash: item.href }" 
      >
        {{ t(item.labelKey) }}
      </router-link>
    </li>
  </ul>
</template>



<style scoped>
.main-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Стили анимации — только для мобильного меню, когда isOpen передан */
.main-menu.animate .menu-item {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: var(--delay);
}

.main-menu:not(.animate) .menu-item {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: var(--delay);
}

/* Если isOpen не передан — показываем все сразу без анимации */
.main-menu.no-animate .menu-item {
  opacity: 1 !important;
  transform: translateX(0) !important;
  transition: none !important;
}
</style>
