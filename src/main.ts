// @ts-ignore
import VueApexCharts from 'vue3-apexcharts';
import Toast from "vue-toastification";
import App from './App.vue'

import { createApp } from 'vue'

import "vue-toastification/dist/index.css";
import './style.css'

createApp(App).use(Toast).use(VueApexCharts).mount('#app')
