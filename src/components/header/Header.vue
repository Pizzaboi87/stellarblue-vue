<template>
  <header
    class="w-full py-2 px-6 bg-textlight rounded-b-xl shadow-sm shadow-black flex justify-between"
  >
    <a href="/">
      <img src="/logo.png" alt="logo" class="h-10" />
    </a>
    <Icon
      :icon="
        isDark
          ? 'line-md:sun-rising-filled-loop'
          : 'line-md:sunny-filled-loop-to-moon-filled-loop-transition'
      "
      class="ml-4 text-[3rem] cursor-pointer text-textdark"
      @click="toggleDark()"
    />
  </header>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";

// create a reactive reference to the dark mode
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
