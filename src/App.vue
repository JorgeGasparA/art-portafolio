<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>
    </h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/storyboard">Storyboard</RouterLink>
        <RouterLink to="/animation">Animation</RouterLink>
        <RouterLink to="/illustration">Illustration</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
@import '@/infrastructure/viewLayer/styles/global';
</style>
