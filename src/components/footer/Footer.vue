<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer
    class="w-full py-6 px-6 bg-textlight rounded-t-xl flex items-center justify-between text-[1.2rem]"
  >
    <img src="/logo.png" alt="logo" class="h-10" />
    <p class="hidden md:block">2024</p>
    <a
      href="https://github.com/pizzaboi87"
      target="_blank"
      class="flex gap-2 items-center"
    >
      <Icon icon="bi:github" class="text-[1.5rem]" />
      <p class="text-[1.25rem] pt-1">Weiser</p>
    </a>
  </footer>
</template>
