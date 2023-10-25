<template>
  <header class="banner">
    <div class="banner__title">
      <div class="banner__title--icon" v-if="isMobile">
        <IconBase icon-name="menu" width="36" height="36"><MenuIcon /></IconBase>          
      </div>
      <h2 class="banner__title--name">Maricarmen's Portfolio</h2>
    </div>
    <div class="banner__navbar" v-if="!isMobile">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/storyboard">Storyboard</RouterLink>
        <RouterLink to="/animation">Animation</RouterLink>
        <RouterLink to="/illustration">Illustration</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, useCssModule } from 'vue'
import { RouterLink } from 'vue-router'
import IconBase from './icons/IconBase.vue';
import MenuIcon from './icons/MenuIcon.vue';

const styles = useCssModule()

const currentWidth = ref(window.innerWidth)

const getWindowSize = () => {
  currentWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener("resize", getWindowSize)
})
onUnmounted(() => {
  window.removeEventListener("resize", getWindowSize)
})

const isMobile = computed(() => {
  return currentWidth.value < Number(styles.mobile)
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  &__title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    &--name{
      justify-self: center;
    }
  }
}
</style>
<style lang="scss" module>
:export{
  mobile: $mobile;
}
</style>
