<template>

    <HeaderSection />
    <main class="dark-style container">

    <HeroSection />
    <SliderStack />
    <OurBenefits />
    <SliderProducts />
    
    <OurAdvantages />
    <PillArea />
    <ServicesCard />
    <RunningString />
    <FormSection />
    <PopUp />
    </main>
    <FooterSection />

    <ScriptJs />
    <AnimationsJs />
    <FigureFirst />
    <FigureSecond />

    <div v-html="sprite"></div>
</template>

<script setup>
    import { ref, onMounted, watchEffect } from 'vue'
    import { useI18n } from 'vue-i18n'

    import { initSmoothScroll, initPopup } from './assets/js/script.js' 

    import ScriptJs from './assets/js/script.js'
    import AnimationsJs from './assets/js/animations.js'

    import HeaderSection from './components/HeaderSection.vue'
    import HeroSection from './components/HeroSection.vue'
    import RunningString from './components/RunningString.vue'
    import OurBenefits from './components/OurService.vue'
    import SliderProducts from './components/SliderProducts.vue'
    import PillArea from './components/PillArea.vue'
    import SliderStack from './components/SliderStack.vue'
    import FormSection from './components/FormSection.vue'
    import OurAdvantages from './components/OurAdvantages.vue'
    import ServicesCard from './components/ServicesCard.vue'
    import PopUp from './components/PopUp.vue'
    import FooterSection from './components/FooterSection.vue'
    import FigureFirst from './components/FigureFirst.vue'
    import FigureSecond from './components/FigureSecond.vue'

    // i18n: автообновление title и description
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

    // загрузка SVG спрайта
    const sprite = ref('')
    onMounted(async () => {
        const spriteUrl = new URL('@/assets/icon/sprite.svg', import.meta.url).href
        const response = await fetch(spriteUrl)
        sprite.value = await response.text()
        initSmoothScroll() // Инициализируем плавный скролл
        initPopup() 
    })
</script>


