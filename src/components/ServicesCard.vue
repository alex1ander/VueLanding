<template>
    <section id="price" class="information-section">
        <div class="content">


            <input type="checkbox" id="toggle" class="toggleCheckbox" />
            <label for="toggle" class='toggleContainer'>
                <div>{{ $t('btnDevelopment') }}</div>   
                <div>{{ $t('btnSupport') }}</div>
            </label>

            <div class="service-relative animScroll">
                <div class="servise-grid-wrapper developmentCards">
                    <div class="service-card reverse-style cardAnim ">

                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_1')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_1')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_1') }}</p>
                           <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_1'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>


                        <img src="../assets/upload/bg (1).png" alt="" class="bg-abs bg-abs-1">
                        <img src="../assets/upload/bg (2).png" alt="" class="bg-abs bg-abs-2">
                        <img src="../assets/upload/bg (3).png" alt="" class="bg-abs bg-abs-3">
                        <img src="../assets/upload/bg (4).png" alt="" class="bg-abs bg-abs-4">
                        <img src="../assets/upload/bg (5).png" alt="" class="bg-abs bg-abs-5">
                    </div>

                    <div class="service-card reverse-style cardAnim ">

                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_2')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_2')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_2') }}</p>
                            <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_2'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>

                        <img src="../assets/upload/bg (6).png" alt="" class="bg-abs bg-abs-6">
                        <img src="../assets/upload/bg (7).png" alt="" class="bg-abs bg-abs-7">
                        <img src="../assets/upload/bg (8).png" alt="" class="bg-abs bg-abs-8">
                        <img src="../assets/upload/bg (9).png" alt="" class="bg-abs bg-abs-9">
                        <img src="../assets/upload/bg (10).png" alt="" class="bg-abs bg-abs-10">
                    </div>

                    <div class="service-card reverse-style cardAnim ">
                        
                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_3')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_3')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_3') }}</p>
                            <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_3'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>

                        <img src="../assets/upload/bg (11).png" alt="" class="bg-abs bg-abs-11">
                        <img src="../assets/upload/bg (12).png" alt="" class="bg-abs bg-abs-12">
                        <img src="../assets/upload/bg (13).png" alt="" class="bg-abs bg-abs-13">
                        <img src="../assets/upload/bg (14).png" alt="" class="bg-abs bg-abs-14">
                        <img src="../assets/upload/bg (15).png" alt="" class="bg-abs bg-abs-15">
                    </div>
                </div>

                <div class="servise-grid-wrapper supportCards">
                    <div class="service-card cardAnim">

                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_4')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_4')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_4') }}</p>
                            <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_4'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>


                    </div>

                    <div class="service-card cardAnim ">

                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_5')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_5')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_5') }}</p>
                            <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_5'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>

                    </div>

                    <div class="service-card cardAnim ">
                        <div class="top-part">
                            <h3 v-html="$t('serviceCardTitle_6')"></h3>
                            <div class="content-part" v-html="$t('serviceCardText_6')"></div>
                        </div>

                        <div class="bottom-part">
                            <p class="price">{{ $t('serviceCardPrice_6') }}</p>
                            <button class="btn-240 gr-fill btn-pop-up" @click="$emit('open-contact-form', $t('serviceCardTitle_6'))">
                                <span class="btn-text">{{ $t('consultBtn') }}</span>
                                <div class="btn-after"><svg width="14" height="14" class="sprite-svg-fill"><use href="#arrow-service"></use></svg></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>


<script>
export default {
  methods: {
    setService(serviceText) {
      this.$emit('open-contact-form', serviceText)
    }
  }
}
</script>



<style scoped lang="scss">

.service-card {
    background-color: #f7f7f7;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.service-card:hover {
    animation: pulse 0.5s ease-in-out 1;
}

.service-card h3 {
    font-size: 1.6em;
    align-self: self-start;
}

p {
    line-height: 1.5;
}

.service-features {
    list-style: none;
}

.top-part{
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.content-part{
    display: flex;
    flex-direction: column;
    gap:16px;
}
.bottom-part{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.price{
    font-size: 32px;
    margin: 20px 0;
    font-weight: 600;
}

@media (max-width: 768px) {
    .services {
        flex-direction: column;
        align-items: center;
    }
}

.bg-abs {
    height: 64px;
    width: 64px;
    position: absolute;
    transform: rotate(0deg);
    z-index: -1;
    opacity: 0.6;
}

/* Разбросанные, сбалансированные по всей области */
.bg-abs-1 {
    top: calc(5% + 10px);
    right: calc(3% - 5px);
    transform: rotate(8deg);
}

.bg-abs-2 {
    top: 50%;
    right: -23px;
    transform: rotate(-12deg);
}

.bg-abs-3 {
    top: calc(25% + 5px);
    left: calc(20% - 15px);
    transform: rotate(5deg);
}

.bg-abs-4 {
    top: calc(45% - 10px);
    right: calc(25% + 5px);
    transform: rotate(-7deg);
}

.bg-abs-5 {
    top: calc(70% + 10px);
    left: calc(10% + 5px);
    transform: rotate(11deg);
}

.bg-abs-6 {
    bottom: calc(10% - 10px);
    right: calc(5% + 20px);
    transform: rotate(-4deg);
}

.bg-abs-7 {
    bottom: calc(60% + 10px);
    left: calc(15% - 5px);
    transform: rotate(6deg);
}

.bg-abs-8 {
    bottom: calc(45% + 5px);
    right: 20px;
    transform: rotate(-10deg);
}

.bg-abs-9 {
    top: calc(60% + 5px);
    left: -20px;
    transform: rotate(3deg);
}

.bg-abs-10 {
    top: calc(0% + 25px);
    right: calc(10% - 10px);
    transform: rotate(-15deg);
}

.bg-abs-11 {
    top: calc(15% + 82px);
    left: calc(-5% + 6px);
    transform: rotate(9deg);
}

.bg-abs-12 {
    bottom: calc(14% - 5px);
    right: calc(0% + -17px);
    transform: rotate(-6deg);
}

.bg-abs-13 {
    top: calc(0% - 15px);
    left: calc(71% - 18px);
    transform: rotate(13deg);
}

.bg-abs-14 {
    bottom: calc(20% + 15px);
    right: calc(79% - 15px);
    transform: rotate(-3deg);
}

.bg-abs-15 {
    top: calc(45% + 5px);
    left: calc(80% - 10px);
    transform: rotate(4deg);
}


@media (max-width: 425px) {
    .service-card {
        border-radius: 41px;
        padding: 40px 15px 15px;
    }
}




.toggleContainer {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    border-radius: 30px;
    background: rgb(255, 189, 46);
    /* background: #fff; */
    font-weight: 700;
    color: white;
    cursor: pointer;
    margin: 20px auto;

    div {
        padding: 12px;
        text-align: center;
        z-index: 1;
        transition: color 0.3s;
        min-width: 120px;
    }

    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
        border-radius: 30px;
        background: #fff;
        transition: all 0.3s;
    }

    .toggleCheckbox:checked + &::before {
        left: 50%;
    }
    .toggleCheckbox:checked + & {
        background: #797CCC;
    }

    .toggleCheckbox:checked + & div:first-child {
        color: #fff;
    }

    .toggleCheckbox:checked + & div:last-child {
        color: #000;
    }

    .toggleCheckbox + & div:first-child {
        color: #000;
    }

    .toggleCheckbox + & div:last-child {
        color: #fff;
    }
    
}

.toggleCheckbox {
display: none;
}


.cardAnim{
    display: flex;
    flex-direction: column;
    transform: scaleX(1);
    transition: transform 0.6s ease;

}

.toggleCheckbox:checked ~ .service-relative .developmentCards .cardAnim{  
    transform: scaleX(0);
}
.toggleCheckbox:not(:checked) ~ .service-relative .supportCards .cardAnim{  
    transform: scaleX(0)
}

.service-relative{
    position: relative;
}
.supportCards{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.developmentCards {
    .service-card{
        border: 3px solid #797CCC;
        h3{
            background: linear-gradient(180deg, #3EB0D4 0%, #9663C8 100%);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .price{
            background: linear-gradient(180deg, #3EB0D4 0%, #9663C8 100%);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}

.supportCards{
    .service-card{
        background: linear-gradient(340deg, #3EB0D4 0%, #9663C8 100%);
        background: linear-gradient(340deg, rgba(92, 168, 194, 1) 0%, rgba(140, 105, 172, 1) 100%);
        border: 3px solid #fff;

        h3{
            color: #fff;
        }
        .price{
            color: #fff;
        }
        .btn-240{
            background: var(--second-color);
            .btn-text{
                color: var(--prime-color);
            }
        }
    } 
}


</style>