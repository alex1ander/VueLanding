<template>
   <div class="dark-style container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">
    #app{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        main{
            flex: 1;
        }
    }
    body:has(#mobile-menu.active){
      overflow: hidden;
    }
</style>