<template>
  <div class="burger-menu btn-backarea mobile-circle">
    <div :class="{ open: isOpen }" class="burger-icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu mobile-menu" :class="{ active: isOpen }">
      <MenuList :isOpen="isOpen" />
      <a :href="'tel:' + $t('phoneNumber')" class="text-with-svg btn-backarea">
        <svg width="24" height="24" class="sprite-svg-fill">
          <use href="#call"></use>
        </svg>
        <span>{{ $t('phoneNumber') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.vue';

export default {
  name: 'BurgerMenu',
  components: { MenuList },
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

<style scoped lang="scss">
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
.burger-icon.open span{
    background-color:rgb(255, 189, 46);
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
    height: calc(100dvh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .btn-backarea{
        border: 1px solid;
        justify-content: center;
    }
}
.mobile-menu{
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}
.mobile-menu.active{
    opacity: 1;
    pointer-events: all;
}

</style>
