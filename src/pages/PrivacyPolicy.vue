<template>
    <HeaderSection />
    <main>
        <section id="privacy-policy" class="information-section">
            <div class="content">
                <h1>{{ $t('privacyPolicyTitle') }}</h1>

                <p>{{ $t('privacyPolicyIntro') }}</p>

                <h2>{{ $t('privacyCollectionTitle') }}</h2>
                <ul>
                <li>{{ $t('privacyCollectionName') }}</li>
                <li>{{ $t('privacyCollectionEmail') }}</li>
                <li>{{ $t('privacyCollectionCookies') }}</li>
                </ul>

                <h2>{{ $t('privacyUseTitle') }}</h2>
                <p>{{ $t('privacyUseText') }}</p>

                <h2>{{ $t('privacyRightsTitle') }}</h2>
                <p>{{ $t('privacyRightsText') }}</p>

                <p class="updated">{{ $t('privacyUpdated') }}</p>
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
      document.title = 'Privacy Policy'
    })
  },

}
</script>

