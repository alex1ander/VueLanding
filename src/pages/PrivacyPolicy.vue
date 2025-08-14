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

    <ScriptJs />
    <AnimationsJs />
    <FigureFirst />
    <FigureSecond />

    <SvgSprite />
</template>

<script>
import { watchEffect } from 'vue'
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ScriptJs from '@/assets/js/script.js'
import AnimationsJs from '@/assets/js/animations.js'
import FigureFirst from '@/components/FigureFirst.vue'
import FigureSecond from '@/components/FigureSecond.vue'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
  name: 'PrivacyPolicy',
  components: {
    HeaderSection,
    FooterSection,
    ScriptJs,
    AnimationsJs,
    FigureFirst,
    FigureSecond,
    SvgSprite,
  },

  setup() {
    watchEffect(() => {
      document.title = 'Our contacts'
    })
  },

}
</script>

