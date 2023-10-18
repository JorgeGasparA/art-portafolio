<template>
    <header>
    <h1>
      This is a header!
    </h1>
    <div>
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
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>