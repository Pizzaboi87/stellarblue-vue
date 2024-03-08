<template>
  <div class="min-h-screen w-full flex flex-col overflow-x-hidden">
    <Loading v-if="isLoading" />
    <div v-else>
      <Failure v-if="error || !data" />
      <main v-if="data">
        <DataFilter />
        <Chart />
        <Table />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataFilter from "../data-filter/DataFilter.vue";
import Loading from "../loading/Loading.vue";
import Failure from "../failure/Failure.vue";
import Table from "../table/Table.vue";
import Chart from "../chart/Chart.vue";
import useSWRV from "swrv";

import { getData } from "../../utils/firebase";
import { TimeSerie } from "../../types/types";
import { store } from "../../utils/store";
import { watch } from "vue";

// fetch the data from the server
const {
  data,
  error,
  isValidating: isLoading,
} = useSWRV<TimeSerie[]>("timeSeries", getData);

// watch the data and update the store when it changes
watch(data, (newValue) => {
  if (newValue) {
    store.setData(newValue);
  }
});
</script>
