<template>
    <div class="burger-menu" @click="toggleMenu">
      <div :class="{ open: isOpen }" class="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div v-if="isOpen" class="menu">
        <ul class="animated-menu">
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BurgerMenu',
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .burger-icon {
    width: 30px;
    height: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  .burger-icon span {
    display: block;
    height: 3px;
    background-color: #ffffff;
    transition: 0.3s;
  }
  .burger-icon.open span:nth-child(1) {
    transform: rotate(45deg)translate(6px,6px);
  }
  .burger-icon.open span:nth-child(2) {
    opacity: 0;
  }
  .burger-icon.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px,-7px);
  }
  .menu {
    position: absolute;
    top: 68px;
    right: 0;
    background: rgba(17, 17, 17, 0.6);
    padding: 1rem;
    z-index: 10;
    left: 0;
    height: 100dvh;
  }
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .menu li {
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .menu a {
    text-decoration: none;
    color: #ffffff;
    font-size: 26px;
  }
  </style>
  