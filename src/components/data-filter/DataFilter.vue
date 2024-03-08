<template>
  <div class="flex flex-col lg:flex-row lg:items-end gap-4">
    <form
      class="flex lg:gap-4 lg:ml-8 lg:mt-4 mt-8 items-end justify-evenly lg:justify-normal"
    >
      <span class="flex flex-col">
        <label
          for="toDate"
          class="font-semibold lg:text-[1.1rem] text-textdark dark:text-textlight"
        >
          From:
        </label>
        <input
          type="date"
          id="toDate"
          :min="fromDate"
          :max="toDate"
          :value="fromDate"
          @change="(event: Event) => { fromDate = (event.target as HTMLInputElement).value }"
          class="bg-textlight dark:bg-bgdark shadow-inner shadow-black pl-5 pr-2 lg:px-10 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-stellar transition-all duration-300 ease-in-out hover:border-stellar"
        />
      </span>
      <span class="flex flex-col">
        <label
          for="fromDate"
          class="font-semibold lg:text-[1.1rem] text-textdark dark:text-textlight"
        >
          Until:
        </label>
        <input
          type="date"
          id="fromDate"
          :min="fromDate"
          :max="toDate"
          :value="toDate"
          @change="(event: Event) => { toDate = (event.target as HTMLInputElement).value }"
          class="bg-textlight dark:bg-bgdark shadow-inner shadow-black pl-5 pr-2 lg:px-10 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-stellar transition-all duration-300 ease-in-out hover:border-stellar"
        />
      </span>
    </form>
    <button
      @click.prevent="reset"
      class="text-[3rem] text-textdark dark:text-textlight cursor-pointer self-center lg:self-auto"
    >
      <Icon icon="system-uicons:reset-alt" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
import { store } from "../../utils/store";
import { Icon } from "@iconify/vue";
import { watch, ref } from "vue";

// create a toast
const toast = useToast();

// create a reactive reference to the selected dates
const fromDate = ref<string>(store.minDate);
const toDate = ref<string>(store.maxDate);

// filter the data by the selected dates
const filterDataBySelectedDates = () => {
  if (fromDate.value < toDate.value) {
    const filteredData = store.filteredData.filter((d) => {
      return d.DateTime >= fromDate.value && d.DateTime <= toDate.value;
    });
    store.filteredData = filteredData;
  } else {
    toast.error("Invalid date range");
  }
};

// watch the selected dates and filter the data
watch([fromDate, toDate], filterDataBySelectedDates, { immediate: true });

// reset the selected dates and the filtered data
const reset = () => {
  fromDate.value = store.minDate;
  toDate.value = store.maxDate;
  store.filteredData = store.initialData;
};
</script>

<style scoped>
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field,
input[type="date"]::-webkit-calendar-picker-indicator {
  color: black;
}
</style>
