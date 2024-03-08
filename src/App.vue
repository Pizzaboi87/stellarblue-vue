<template>
  <Header />
  <Hero />
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import Hero from "./components/hero/Hero.vue";
</script>

<style>
html {
  @apply bg-gradientblue;
}

html.dark {
  @apply bg-gradientdarkblue;
}
</style>
