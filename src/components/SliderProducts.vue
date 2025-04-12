<template>
    <section class="dark-style information-section container">

        <div class="content top-part-section sliderNumber-3-top-part">

            <div class="two-part-content">
                <h2>Ми пишаємось цими проектами</h2>

                <div class="slider-buttons">
                    <div class="arrow-slider-prev slider-btn" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-8b42af03d429eaf8" aria-disabled="false">
                        <svg width="24" height="24" class="sprite-svg-fill">
                            <use href="#arrow-slider"></use>
                        </svg>
                    </div>
                    <div class="arrow-slider-next slider-btn swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-8b42af03d429eaf8" aria-disabled="true">
                        <svg width="24" height="24" class="sprite-svg-fill">
                            <use href="#arrow-slider"></use>
                        </svg>
                    </div>
                </div>
            </div>

        </div>

        <swiper
        :slides-per-view="3.5"
        :space-between="30"
        :pagination="{ clickable: true }"
        :navigation="{
            prevEl: '.arrow-slider-prev',
            nextEl: '.arrow-slider-next'
        }"
        :modules="modules"
        :breakpoints="breakpoints"
        class="swiper content sliderNumber-2"
        >
            <swiper-slide class="swiper-slide">
                <div class="page-card ">
                    <img class="card-image" src="../assets/images/service1.png" alt="">
                    <div class="card-text">
                        <span>Пластична хірургія</span>
                        <svg width="24" height="24" class="sprite-svg-fill">
                    <use href="#arrow-slider"></use>
                </svg>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="swiper-slide">
                <div class="page-card">
                    <img class="card-image" src="../assets/images/service1.png" alt="">
                    <div class="card-text">
                        <span>Пластична хірургія</span>
                        <svg width="24" height="24" class="sprite-svg-fill">
                    <use href="#arrow-slider"></use>
                </svg>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="swiper-slide">
                <div class="page-card">
                    <img class="card-image" src="../assets/images/service1.png" alt="">
                    <div class="card-text">
                        <span>Пластична хірургія</span>
                        <svg width="24" height="24" class="sprite-svg-fill">
                    <use href="#arrow-slider"></use>
                </svg>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="swiper-slide">
                <div class="page-card">
                    <img class="card-image" src="../assets/images/service1.png" alt="">
                    <div class="card-text">
                        <span>Пластична хірургія</span>
                        <svg width="24" height="24" class="sprite-svg-fill">
                    <use href="#arrow-slider"></use>
                </svg>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide class="swiper-slide">
                <div class="page-card">
                    <img class="card-image" src="../assets/images/service1.png" alt="">
                    <div class="card-text">
                        <span>Пластична хірургія</span>
                        <svg width="24" height="24" class="sprite-svg-fill">
                    <use href="#arrow-slider"></use>
                </svg>
                    </div>
                </div>
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

import { Navigation } from 'swiper/modules';

// import required modules



export default {
    components: {
    Swiper,
    SwiperSlide,
    },
    setup() {
        const breakpoints = {
            // Если ширина экрана больше 1200px
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 30,
            },
            // Если ширина экрана больше 992px
            992: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            // Если ширина экрана больше 768px
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            // Если ширина экрана меньше 768px
            576: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            // Для всех экранов меньше 576px
            0: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
        };
      return {
        modules: [Navigation],
        breakpoints,
      };
    },

};
</script>

