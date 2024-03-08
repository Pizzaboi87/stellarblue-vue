<template>
  <div class="flex flex-col justify-center items-center h-screen gap-[1rem]">
    <div
      class="w-[20rem] h-[20rem] border-4 bg-red-300 border-black dark:border-white rounded-full flex items-center justify-center relative"
    >
      <div
        class="w-10 h-10 rounded-full absolute z-10 right-3 top-10 border-stellar border-4 bg-white"
      />
      <div
        class="animate-pulse absolute bg-red-600 w-full h-full rounded-full"
      />
      <div class="relative w-full h-full rotate-45">
        <div
          class="w-4 h-48 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rotate-90"
        />
        <div
          class="w-4 h-48 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white"
        />
      </div>
    </div>
    <h1 class="font-bold text-[1.2rem] ml-3 text-textdark dark:text-textlight">
      Something went wrong
    </h1>
  </div>
</template>
