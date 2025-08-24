<template>
  <HeaderSection />

  <main>
    <section id="contact" class="information-section">
      <div class="content">
        <h1>{{ $t('contactTitle') }}</h1>

        <p>{{ $t('contactIntro') }}</p>

        <h2>{{ $t('contactAddressTitle') }}</h2>
        <p>{{ $t('contactAddressText') }}</p>

        <h2>{{ $t('contactPhoneTitle') }}</h2>
        <p>{{ $t('contactPhoneText') }}</p>

        <h2>{{ $t('contactEmailTitle') }}</h2>
        <p>{{ $t('contactEmailText') }}</p>

        <h2>{{ $t('contactFormTitle') }}</h2>
        <p>{{ $t('contactFormText') }}</p>
      </div>
    </section>
  </main>

  <FooterSection />

  <FigureFirst />
  <FigureSecond />
  <SvgSprite />
</template>

<script>
import { onMounted } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import FigureFirst from '@/components/FigureFirst.vue'
import FigureSecond from '@/components/FigureSecond.vue'
import SvgSprite from '@/components/SvgSprite.vue'

import { initSmoothScroll } from '@/assets/js/script.js'
import { initAnimations } from '@/assets/js/animations.js'

export default {
  name: 'PrivacyPolicy',
  components: {
    HeaderSection,
    FooterSection,
    FigureFirst,
    FigureSecond,
    SvgSprite,
  },
  setup() {
    onMounted(() => {
      document.title = 'Our contacts'

      // Инициализация анимаций и скролла
      initSmoothScroll()
      initAnimations()
    })
  },
}
</script>

<style scoped>
/* твои стили, если нужны */
</style>
