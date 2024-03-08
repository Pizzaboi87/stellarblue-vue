export type TimeSerie = {
    DateTime: string;
    ENTSOE_DE_DAM_Price: string;
    ENTSOE_FR_DAM_Price: string;
    ENTSOE_GR_DAM_Price: string;
}

export interface Store {
    initialData: TimeSerie[];
    filteredData: TimeSerie[];
    minDate: string;
    maxDate: string;
    setData(data: TimeSerie[]): void;
}