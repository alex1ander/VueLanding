<template>
    <section class="information-section dark-style container">
        <div class="content">
            <div class="servise-grid-wrapper">
                <div class="service-card reverse-style">
                    <div class="content-part">
                        <h3>Разработка<br> Лендинга</h3>
                        <p class="service-description">Мы создадим для вас современный и функциональный лендинг или сайт-визитку, который эффективно представит ваш бизнес и поможет вам выделиться на фоне конкурентов.</p>
                        <ul class="service-features">
                            <li>Быстрая адаптация под мобильные устройства</li>
                            <li>Привлекательный и функциональный дизайн</li>
                            <li>Легкость в управлении контентом</li>
                            <li>SEO-оптимизация для продвижения</li>
                        </ul>
                        <p class="service-benefits">
                            Увеличение конверсий, простой и понятный интерфейс для пользователя, быстрая загрузка страниц.
                        </p>
                    </div>
                    <div class="content-part">
                        <p class="price">Від 149$</p>
                        <a href="#" class="btn-240 gr-fill">Заказать услугу</a>
                    </div>


                    <img src="../assets/upload/bg (1).png" alt="" class="bg-abs bg-abs-1">
                    <img src="../assets/upload/bg (2).png" alt="" class="bg-abs bg-abs-2">
                    <img src="../assets/upload/bg (3).png" alt="" class="bg-abs bg-abs-3">
                    <img src="../assets/upload/bg (4).png" alt="" class="bg-abs bg-abs-4">
                    <img src="../assets/upload/bg (5).png" alt="" class="bg-abs bg-abs-5">
                </div>

                <div class="service-card reverse-style">
                    <div class="content-part">
                        <h3>Создание<br> Бизнес сайта</h3>
                        <p class="service-description">Мы разрабатываем удобные и привлекательные сайты для публикации ваших статей или демонстрации вашего портфолио. Идеально подходит для профессионалов, желающих продемонстрировать свои знания и услуги.</p>
                        <ul class="service-features">
                            <li>Интуитивно понятная система управления контентом</li>
                            <li>Интеграция с соцсетями</li>
                            <li>Поддержка мультимедийного контента</li>
                            <li>SEO-оптимизация</li>
                        </ul>
                        <p class="service-benefits">
                            Привлечение аудитории, улучшение авторитета в нише, расширение возможности для бренда.
                        </p>
                    </div>
                    <div class="content-part">
                        <p class="price">Від 499$</p>
                        <a href="#" class="btn-240 gr-fill">Заказать услугу</a>
                    </div>

                    <img src="../assets/upload/bg (6).png" alt="" class="bg-abs bg-abs-6">
                    <img src="../assets/upload/bg (7).png" alt="" class="bg-abs bg-abs-7">
                    <img src="../assets/upload/bg (8).png" alt="" class="bg-abs bg-abs-8">
                    <img src="../assets/upload/bg (9).png" alt="" class="bg-abs bg-abs-9">
                    <img src="../assets/upload/bg (10).png" alt="" class="bg-abs bg-abs-10">
                </div>

                <div class="service-card reverse-style">
                    <div class="content-part">
                        <h3>Разработка<br> Интернет-магазина</h3>
                        <p class="service-description">Создадим для вас удобный интернет-магазин или маркетплейс с полным функционалом для успешной продажи товаров онлайн.</p>
                        <ul class="service-features">
                            <li>Многофункциональная корзина</li>
                            <li>Интеграция с платёжными системами</li>
                            <li>Поддержка многовариантности товаров</li>
                            <li>Легкость в управлении товарами и заказами</li>
                        </ul>
                        <p class="service-benefits">
                            Увеличение продаж, улучшение пользовательского опыта, интеграция с маркетплейсами.
                        </p>
                    </div>
                    <div class="content-part">
                        <p class="price">Від 999$</p>
                        <a href="#" class="btn-240 gr-fill">Заказать услугу</a>
                    </div>

                    <img src="../assets/upload/bg (11).png" alt="" class="bg-abs bg-abs-11">
                    <img src="../assets/upload/bg (12).png" alt="" class="bg-abs bg-abs-12">
                    <img src="../assets/upload/bg (13).png" alt="" class="bg-abs bg-abs-13">
                    <img src="../assets/upload/bg (14).png" alt="" class="bg-abs bg-abs-14">
                    <img src="../assets/upload/bg (15).png" alt="" class="bg-abs bg-abs-15">
                </div>
            </div>
        </div>
    </section>
</template>


<script></script>



<style>

.service-card {
    background-color: #f7f7f7;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 40px 30px 20px;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    z-index: 1;
    overflow: hidden;
}



.service-card:hover {
    transform: translateY(-10px);
    animation: pulse 0.5s ease-in-out 1;
}

.service-card h3 {
    font-size: 1.6em;
    margin-bottom: 15px;
    align-self: self-start;
    background: linear-gradient(180deg, #3EB0D4 0%, #9663C8 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.service-description {
    margin-bottom: 15px;
    line-height: 1.5;
}

.service-features {
    list-style: none;
    margin-bottom: 15px;
}


.service-benefits {

}
.content-part{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.price{
    font-size: 32px;
    margin: 20px 0;
    font-weight: 600;
    background: linear-gradient(180deg, #3EB0D4 0%, #9663C8 100%);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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


</style>