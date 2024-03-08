<template>
  <div class="py-10">
    <apexchart
      type="line"
      height="450"
      width="100%"
      :options="options"
      :series="chartSeries"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { store } from "../../utils/store";
import { ApexOptions } from "apexcharts";
import { useDark } from "@vueuse/core";

// create a reactive reference to the dark mode
const isDark = useDark();

// create dates from the data
const dates = computed(() =>
  store.filteredData.map((data) => {
    const date = new Date(data.DateTime);
    return `${("0" + (date.getMonth() + 1)).slice(-2)}.${(
      "0" + date.getDate()
    ).slice(-2)} - ${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}`;
  })
);

// find the minimum and maximum values for the y-axis
const minimum = computed(() => {
  return store.filteredData.reduce((acc, curr) => {
    return Math.min(
      acc,
      Number(curr.ENTSOE_DE_DAM_Price),
      Number(curr.ENTSOE_FR_DAM_Price),
      Number(curr.ENTSOE_GR_DAM_Price)
    );
  }, Number.MAX_VALUE);
});

// find the maximum value for the y-axis
const maximum = computed(() => {
  return store.filteredData.reduce((acc, curr) => {
    return Math.max(
      acc,
      Number(curr.ENTSOE_DE_DAM_Price),
      Number(curr.ENTSOE_FR_DAM_Price),
      Number(curr.ENTSOE_GR_DAM_Price)
    );
  }, Number.MIN_VALUE);
});

// create the chart series
const chartSeries = computed(() => [
  {
    name: "Germany",
    data: store.filteredData.map((data) => Number(data.ENTSOE_DE_DAM_Price)),
  },
  {
    name: "Greece",
    data: store.filteredData.map((data) => Number(data.ENTSOE_GR_DAM_Price)),
  },
  {
    name: "France",
    data: store.filteredData.map((data) => Number(data.ENTSOE_FR_DAM_Price)),
  },
]);

// create the options for the chart with the reactive dark mode
const isDarkTheme = computed(() => (isDark.value ? "dark" : "light"));
const isDarkPalette = computed(() => (isDark.value ? "palette8" : "palette6"));

// create the options for the chart
const options = ref<ApexOptions>({
  chart: {
    id: "stellarchart",
    height: 350,
    type: "line",
    background: "transparent",
    animations: {
      enabled: false,
    },
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Prices in countries",
    align: "left",
  },
  grid: {
    borderColor: "transparent",
    row: {
      colors: ["#F1FAEE", "transparent"],
      opacity: 0.5,
    },
    padding: {
      left: 20,
      right: 20,
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: dates.value,
    stepSize: 24,
    tickAmount: 24,
    labels: {
      show: false,
    },
  },
  yaxis: {
    title: {
      text: "Price in euro  (€)",
    },
    min: minimum.value - 5,
    max: maximum.value + 5,
    tickAmount: 5,
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    floating: true,
    offsetY: -30,
    offsetX: -30,
    onItemClick: {
      toggleDataSeries: false,
    },
  },
  noData: {
    text: "No data available!",
    align: "center",
    verticalAlign: "middle",
  },
  theme: {
    mode: isDarkTheme.value,
    palette: isDarkPalette.value,
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        legend: {
          position: "bottom",
          offsetY: 5,
        },
      },
    },
  ],
});

// watch the dark mode and update the options
watch(isDark, (newVal) => {
  options.value = {
    theme: {
      mode: newVal ? "dark" : "light",
      palette: newVal ? "palette8" : "palette6",
    },
  };
});
</script>
