<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from '@/infrastructure/viewLayer/components/HeaderBar.vue'
</script>

<template>
  <HeaderBar />
  <RouterView />
</template>

<style lang="scss">
@import '@/infrastructure/viewLayer/styles/main';
</style>
