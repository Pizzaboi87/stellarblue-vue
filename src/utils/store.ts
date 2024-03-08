import { reactive } from "vue";
import { Store, TimeSerie } from "../types/types";

export const store: Store = reactive({
    initialData: [] as TimeSerie[],
    filteredData: [] as TimeSerie[],
    minDate: "",
    maxDate: "",
    setData(data: TimeSerie[]) {
        this.initialData = data;
        this.filteredData = this.initialData;

        const firstDateTime = new Date(this.filteredData[0].DateTime);
        firstDateTime.setDate(firstDateTime.getDate() + 1);

        this.minDate = firstDateTime.toISOString().split("T")[0];

        const lastDateTime = new Date(this.filteredData[this.filteredData.length - 1].DateTime);
        lastDateTime.setDate(lastDateTime.getDate() + 1);

        this.maxDate = lastDateTime.toISOString().split("T")[0];
    }
});