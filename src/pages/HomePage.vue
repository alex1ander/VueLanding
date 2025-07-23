<template>
  <HeaderSection />
  <CursorCircle />
  <main>
    <VolumeFigure />
    <HeroSection @open-contact-form="handleOpenContactForm" />
    <SliderStack />
    <OurBenefits />
    <SliderProducts />
    <OurAdvantages />
    <PillArea @open-contact-form="handleOpenContactForm" />
    <ServicesCard @open-contact-form="handleOpenContactForm" />
    <RunningString />
    <FormSection />
    <OurWorks />
  </main>
  <FooterSection />
  <PopUp
    :service="popupService"
    :active="popupVisible"
    @close="popupVisible = false"
  />

  <FigureFirst />
  <FigureSecond />
  <SvgSprite />
</template>

<script>
import { onMounted, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

import HeaderSection from '@/components/HeaderSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import RunningString from '@/components/RunningString.vue'
import OurBenefits from '@/components/OurService.vue'
import SliderProducts from '@/components/SliderProducts.vue'
import PillArea from '@/components/PillArea.vue'
import SliderStack from '@/components/SliderStack.vue'
import FormSection from '@/components/FormSection.vue'
import OurWorks from '@/components/OurWorks.vue'
import OurAdvantages from '@/components/OurAdvantages.vue'
import ServicesCard from '@/components/ServicesCard.vue'
import PopUp from '@/components/PopUp.vue'
import FooterSection from '@/components/FooterSection.vue'
import FigureFirst from '@/components/FigureFirst.vue'
import FigureSecond from '@/components/FigureSecond.vue'
import SvgSprite from '@/components/SvgSprite.vue'
import VolumeFigure from '@/components/VolumeFigure.vue'
import CursorCircle from '@/components/CursorCircle.vue'
import { initSmoothScroll } from '@/assets/js/script.js'
import { initAnimations } from '@/assets/js/animations.js' // предполагается, что такая функция экспортируется

export default {
  name: 'HomePage',
  components: {
    VolumeFigure,
    CursorCircle,
    HeaderSection,
    HeroSection,
    RunningString,
    OurBenefits,
    SliderProducts,
    PillArea,
    SliderStack,
    FormSection,
    OurWorks,
    OurAdvantages,
    ServicesCard,
    PopUp,
    FooterSection,
    FigureFirst,
    FigureSecond,
    SvgSprite,
  },

  setup() {
    const { t } = useI18n()

    watchEffect(() => {
      document.title = t('meta.title')
      const metaDescription = document.querySelector('meta[name="description"]')

      if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'))
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = t('meta.description')
        document.head.appendChild(meta)
      }
    })

    onMounted(() => {
      initSmoothScroll()
      initAnimations()
    })
  },

  data() {
    return {
      popupVisible: false,
      popupService: '',
    }
  },

  methods: {
    handleOpenContactForm(serviceName) {
      this.popupService = serviceName
      this.popupVisible = true
    },
  },
}
</script>
