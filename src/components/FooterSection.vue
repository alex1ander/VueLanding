<template>
    <footer class="container dark-style">
        <div class="footer-container">
            <ul id="footer-menu" class="main-menu">
                <li class="menu-item menu-item-has-children"><a href="#">Наші послуги</a></li>
                <li class="menu-item menu-item-has-children"><a href="#">Наші роботи</a></li>
                <li class="menu-item menu-item-has-children"><a href="#">Про нас</a></li>
                <li class="menu-item menu-item-has-children"><a href="#">Блог</a></li>
                <li class="menu-item menu-item-has-children"><a href="#">Ціни</a></li>
            </ul>

            <p>Copyright © 2025 AlexDIgital. All rights reserved.</p>
        </div>


    </footer>
</template>


<style scoped lang="scss">
    .footer-container{
        max-width: 1440px;
        margin: auto;
        width: 100%;
        border-radius: 40px 40px 0 0;
        text-wrap:nowrap;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:40px;
        padding: 60px 0 30px;
        backdrop-filter: blur(20px) saturate(150%);
        -webkit-backdrop-filter: blur(20px) saturate(150%);
        background: linear-gradient(134deg, rgba(62, 176, 212, 0.4) 0%, rgba(150, 99, 200, 0.4) 100%) !important;
    }

    #footer-menu{
        height: 100%;
        display: flex;
        gap: 45px;
        list-style: none;
    }
</style>
