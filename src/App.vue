<template>

      <HeaderSection />
      <main class="dark-style container">

      <HeroSection />
      <SliderStack />
      <OurBenefits />
      <SliderProducts />
      
      <OurAdvantages />
      <PillArea />
      <RunningString />
      <FormSection />
      <ServicesCard />
      <PopUp />
      </main>

      <FooterSection />

      <ScriptJs />
      <AnimationsJs />

      <div v-html="sprite"></div>
  </template>
  
  <script>
    import { ref, onMounted } from 'vue';
    import ScriptJs from './assets/js/script.js';
    import AnimationsJs from './assets/js/animations.js';
    import HeaderSection from './components/HeaderSection.vue';
    import HeroSection from './components/HeroSection.vue';
    import RunningString from './components/RunningString.vue';
    import OurBenefits from './components/OurBenefits.vue';
    import SliderProducts from './components/SliderProducts.vue';
    import PillArea from './components/PillArea.vue';
    import SliderStack from './components/SliderStack.vue';
    import FormSection from './components/FormSection';
    import OurAdvantages from './components/OurAdvantages.vue';
    import ServicesCard from './components/ServicesCard.vue';
    import PopUp from './components/PopUp.vue';
    import FooterSection from './components/FooterSection.vue';
    

  
    export default {
        name: 'App',
        components: {
            ScriptJs,
            AnimationsJs,
            PopUp,
            HeaderSection,
            HeroSection,
            RunningString,
            OurAdvantages,
            SliderProducts,
            PillArea,
            SliderStack,
            FormSection,
            OurBenefits,
            ServicesCard,
            FooterSection,
        },
        setup() {
            const sprite = ref('');
            onMounted(async () => {
            const spriteUrl = new URL('@/assets/icon/sprite.svg', import.meta.url).href;
            const response = await fetch(spriteUrl);
            sprite.value = await response.text();
            });
    
            return { sprite };
        },
        
    };
  </script>
  
