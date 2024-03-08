<template>
  <div
    class="grid grid-cols-5 w-full lg:w-[50%] mx-auto bg-textlight dark:bg-bgdark px-6 py-4 rounded-xl shadow-inner shadow-black mb-12"
  >
    <div class="font-bold col-span-2 items-center">Date</div>
    <div
      class="font-bold flex items-center"
      v-for="country in countries"
      :key="country.code"
    >
      <p class="hidden lg:block">{{ country.name }}</p>
      <p class="block lg:hidden">{{ country.code }}</p>
      <input
        type="checkbox"
        :checked="true"
        :value="country.name"
        @click="hideColumnByCountry(country.name)"
        class="w-4 h-4 ml-2 mb-1 md:mb-0"
      />
    </div>

    <hr class="col-span-5 mb-4 mt-2 border-black border-2" />
    <div
      v-for="d in store.filteredData"
      :key="d.DateTime"
      class="col-span-5 grid grid-cols-5 items-center"
    >
      <span
        class="col-span-2 flex flex-col md:flex-row md:gap-2"
        v-html="formatDateTime(d.DateTime)"
      />
      <span
        v-for="c in countries"
        :key="c.code"
        :class="[c.name, 'col-start-' + (countries.indexOf(c) + 3), 'column']"
        >{{ d[("ENTSOE_" + c.code + "_DAM_Price") as keyof TimeSerie] }}</span
      >

      <hr class="col-span-5 my-1 border-black border-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimeSerie } from "../../types/types";
import { store } from "../../utils/store";
import { watch } from "vue";

// format the date and time
const formatDateTime = (dateTime: string) => {
  const [date, time] = dateTime.split("T");
  return `
    <p>${date}</p>
    <p class="hidden md:block md:mx-1">|</p>
    <p>${time.slice(0, -3)}</p>
    `;
};

// hide the column by country
const hideColumnByCountry = (country: string) => {
  const columns = document.querySelectorAll(`.${country}`);
  columns.forEach((c) => {
    c.classList.toggle("invisible");
  });
  ApexCharts.exec("stellarchart", "toggleSeries", country);
};

// create countries array to loop through
const countries = [
  { name: "Germany", code: "DE" },
  { name: "Greece", code: "GR" },
  { name: "France", code: "FR" },
];

// watch the filtered data and update the columns
watch(
  () => store.filteredData,
  () => {
    const allColumns = document.querySelectorAll(".column");
    allColumns.forEach((c) => {
      c.classList.remove("invisible");
    });

    countries.forEach((country) => {
      const checkbox = document.querySelector(
        `input[type="checkbox"][value="${country.name}"]`
      );
      if (checkbox instanceof HTMLInputElement) checkbox.checked = true;
    });
  }
);
</script>
