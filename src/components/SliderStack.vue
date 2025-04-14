<template>
    <section class="information-section padding-0">

        <swiper
        :slidesPerView="8"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :loop="true"
        :speed="800"
        :effect="'slide'"
        :modules="modules"
        class="swiper content sliderNumber-1"
        >
            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-html.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-css.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-js.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-php.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-laravel.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-react.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-vue.png" alt="">
            </swiper-slide>

            
            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-wordpress.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-figma.png" alt="">
            </swiper-slide>

               
            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-telegram.png" alt="">
            </swiper-slide>


            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-android.png" alt="">
            </swiper-slide>

            <swiper-slide class="swiper-slide">
              <img src="../assets/upload/gr-apple.png" alt="">
            </swiper-slide>






        </swiper>
    </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import { Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
  
<style>

.sliderNumber-1 img{
  height: 64px;
  width: 64px;
  margin: auto;
  display: flex;
  filter: hue-rotate(-23deg) brightness(1.5) grayscale(0.4);
}
</style>