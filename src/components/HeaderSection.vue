<template>
    <header>
        <div class="header-container dark-style container">
            <div class="two-part-content">
                <div class="content content-header desktop">
                    <div class="content-header-part">
                        <!-- <img class="main-logo" src="./assets/icon/logo.svg" alt=""> -->
                        <ul id="main-menu-desktop" class="main-menu">
                            <li class="menu-item menu-item-has-children"><a href="#">Наші послуги</a></li>
                            <li class="menu-item menu-item-has-children"><a href="#">Наші роботи</a></li>
                            <li class="menu-item menu-item-has-children"><a href="#">Про нас</a></li>
                            <li class="menu-item menu-item-has-children"><a href="#">Блог</a></li>
                            <li class="menu-item menu-item-has-children"><a href="#">Ціни</a></li>
                        </ul>
                    </div>
                    <div class="content-header-part overflow-auto">
                        <a href="#" class="text-with-svg">
                            <svg width="24" height="24"  class="sprite-svg-fill">
                                <use href="#location_on"></use>
                            </svg>
                            Львів
                        </a>

                        <a href="#" class="text-with-svg">
                            <svg width="24" height="24" class="sprite-svg-fill">
                                <use href="#call"></use>
                            </svg>
                            +38 (067) 777 68 93
                        </a>
                    </div>
                </div>
                <div class="content content-header mobile">
                    <div class="content-header-part">
                        <svg width="40" height="40" class="sprite-svg-fill">
                            <use href="#logo"></use>
                        </svg>
                    </div>
                    <div class="content-header-part">
                        <div class="burger-menu">
                            <div class="burger">
                                <span></span>
                            </div>


                            <div class="burger-menu-list">
                                <div class="content-burger-part">
                                    <ul id="main-menu-mobile" class="main-menu content">
                                        <li class="menu-item menu-item-has-children"><a href="#">Наші послуги</a></li>
                                        <li class="menu-item menu-item-has-children"><a href="#">Наші роботи</a></li>
                                        <li class="menu-item"><a href="#">Про нас</a></li>
                                        <li class="menu-item"><a href="#">Блог</a></li>
                                        <li class="menu-item"><a href="#">Ціни</a></li>
                                    </ul>
                                </div>

                                <div class="content-burger-part">

                                    <div class="contact-us-block content">
                                        <ul class="contact-us-link">
                                            <li>
                                                <a href="#" class="text-with-svg">
                                                    <svg width="24" height="24" class="sprite-svg-fill">
                                                        <use href="#location_on"></use>
                                                    </svg>
                                                    Львів
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-with-svg">
                                                    <svg width="24" height="24" class="sprite-svg-fill">
                                                        <use href="#call"></use>
                                                    </svg>
                                                    +38 (067) 777 68 93
                                                </a>
                                            </li>
                                        </ul>

                                        <a href="#" class="btn-120-circle reverse-style">Отримати консультацію</a>
                                    </div>

                                    <aside class="top-bar mobile"><span class="top-bar-text">Забронюй свій перший візит зі знижкою <span>-5%</span> на будь яку послугу</span></aside>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">

@use 'sass:math';
@use '../assets/scss/variables' as *;

$header-height:68;

.top-bar{

    &.desktop{
        height: 46px;
    }
    &.mobile{
        padding: 18px 0px;

        .top-bar-text{
            font-size: 16px;
            line-height: 1.5em;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }
    }

    background: #C3B4F2;
    display: flex;
    align-content: center;
    justify-content: center;

    .top-bar-text{
        display: flex;
        align-items: center;
        font-size:14px;

        span{
            border-radius: 20px;
            color: var(--prime-color);
            background: var(--second-color);
            font-weight: 700;
            padding: 5px 14px;
            margin: 0 8px;
        }
    }
}

.main-logo{
    height: 48px;
    width: 48px;
}
header{
    position: sticky;
    z-index: 1000;
    top:0;
}
.header-container{
    text-wrap:nowrap;
    display: flex;
    align-items: center;
    height:  #{$header-height}px;
    backdrop-filter: blur(10px);
    background: linear-gradient(134deg, #3EB0D45c 0%, #9663C85c 100%)!important;


    .container{
        background: var(--prime-color);
        display: flex;
        position: relative;
        height: 100%;
    }

    .content{
        $content-padding: 64px;
        padding-left: $content-padding;
        padding-right: $content-padding;
    }

    .content-header{
        $content-padding: 64px;
        padding-left: $content-padding;
        padding-right: $content-padding;

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .content-header-part{
            height: 100%;
            display: flex;
            gap:32px;
            align-items: center;
        }
    }

    .text-with-svg{
        font-weight: 600;
    }
}

@media (max-width: 1024px) {

    header {
        $content-padding: 20px;

        .content {
            padding-left: $content-padding;
            padding-right: $content-padding;
        }
    }
}



$main-menu-gap: 45px;
$sizeCirlce: 5px;
.desktop .main-menu {
    height: 100%;
    display: flex;
    gap:$main-menu-gap;
    list-style: none;
    > li{
        display: flex;
        align-items: center;
        height: 100%;

        &:not(:first-child) a::before {
            content: '';
            position: absolute;
            left: - math.div($main-menu-gap, 2) - math.div($sizeCirlce, 2);
            top: 50%;
            transform: translateY(-50%);
            width: $sizeCirlce;
            height: $sizeCirlce;
            background-color: var(--second-color);
            border-radius: 50%;
        }

        > a {
            font-weight: 600;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -6px;
                width: 100%;
                height: 2px;
                background: var(--second-color);
                transform: scaleX(0);
                transition: transform 0.4s ease;
            }

            &:hover::after {
                transform: scaleX(1);
            }
        }
        &:hover .sub-menu{
            transform: scaleY(1);
        }
        .sub-menu{
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.4s ease;
            display: flex;
            flex-wrap: wrap;
            padding: 60px;
            grid-auto-columns: 1fr;
            grid-template-columns: 1fr 1fr;
            gap: 50px 100px;

            position: absolute;
            width: 100%;
            background: var(--support-color);
            left: 0;
            top: 100%;
            order: 1;
            li{
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: calc(50% - 50px);

                a{
                    color: var(--second-color);
                    font-weight: 600;
                    font-size: 36px;
                    line-height: 1.2em;
                    text-wrap: balance;
                }
                span{
                    color: var(--second-color);
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 1.2em;
                    text-wrap: balance;
                }
            }
            .menu-all-cat-btn{
                order: 0;
                width: 100%;
                a{
                    font-weight: 300;
                    font-size: 36px;
                    line-height: 1.2em;
                }
            }
        }
        
    }

}
//burger

.burger-menu{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;


    &:has(.burger.active) .burger-menu-list {
        transform: scaleY(1);
    }

    .burger-menu-list{
        overflow: auto;
        width: 100%;
        left: 0;
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.5s ease-in-out;

        height:  calc(100dvh - #{$header-height}px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top:100%;
        background: var(--prime-color);

        .content-burger-part{

            display: flex;
            flex-direction: column;
            gap: 24px;

            .contact-us-block {

                display: flex;
                align-items: center;

                .contact-us-link {

                    width: 100%;
                    @include list-element;
                    .text-with-svg {
                    }
                }
            }
        }
    }

    .main-menu {
        width: 100%;
        list-style: none;
        @include list-element;
        > li {

            &.menu-item-has-children {
                position: relative;
                &.active{
                    > a::before {
                        width: 40px;
                        height: 24px;
                        background-repeat: no-repeat;
                        background-position: left;
                    }
                }
                &:not(.active){
                    > a::after {
                        transform: rotate(180deg);
                        margin-left: auto;
                        width: 40px;
                        height: 24px;
                        transition: width 0.5s ease-in-out;
                        background-repeat: no-repeat;
                    }
                }

                > a::before,a::after{
                    content: '';
                    pointer-events: none;
                    width: 0;
                    transition: width 0.5s ease-in-out;
                    background-image: url('../assets/icon/arrow.svg');

                }

            }



            display: flex;
            align-items: flex-start;
            flex-direction: column;
            > a{
                width: 100%;
                font-weight: 500;
                font-size: 16px;
                line-height: 1.5em;
            }

            &.active{
                .sub-menu-container{
                    grid-template-rows: 1fr;
                }
            }
            .sub-menu-container {
                display: grid;
                grid-template-rows: 0fr;
                overflow: hidden;
                transition: grid-template-rows 0.5s ease-in-out;
            }
            .sub-menu{
                min-height: 0;
                display: flex;
                flex-direction: column;
                gap:24px;

                .menu-all-cat-btn{
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 1.5em;
                    margin-top:24px;
                }
                li:last-child{
                    margin-bottom:24px;
                }
                li{
                    display: flex;
                    gap: 8px;
                    flex-direction: column;

                    a{
                        width: fit-content;
                        font-weight: 600;
                        font-size: 18px;
                        line-height: 1.5em;
                    }
                    span{
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 1.5em;
                        text-wrap: balance;
                        width: 70%;
                    }
                }
            }

        }
    }




}

.burger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 12px;
    cursor: pointer;
    right: 2rem;
    top: 2rem;
    z-index: 20;
}

.burger span {
    width: 100%;
    height: 2px;
    background-color: var(--second-color);
    display: block;
    transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
    content: "";
    width: 100%;
    background-color: var(--second-color);
    display: block;
    transition: all 0.5s ease-in-out;
    height: 2px;
}

.burger span::before {
    transform: translateY(-5px);

}

.burger span::after {
    transform: translateY(5px);
    margin-top: -2px;
}


.burger.active span {
    background-color: transparent;
}

.burger.active span::before {
    transform: rotateZ(45deg) translateY(0);
}

.burger.active span::after {
    transform: rotateZ(-45deg) translateY(0);
}


</style>