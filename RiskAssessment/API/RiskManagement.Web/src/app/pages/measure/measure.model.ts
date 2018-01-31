export class FrequencyViewModel {
    FrequencyId: number;
    Description: string;
}

export class MeasureViewModel {
    MeasureId: number;
    FrequencyId: number;
    Description: string;
    LastDate: string;
    NextDate: string;
    Target: number;
    MeasureColumns: MeasureColumnViewModel[];
    MeasureObjectives: MeasureObjectiveViewModel[];
    Frequency: FrequencyViewModel;
}

export class MeasureColumnViewModel {
    MeasureColumnId: number;
    MeasureId: number;
    ColumnName: string;
}

export class MeasureObjectiveViewModel {
    MeasureObjectiveId: number;
    MeasureId: number;
    Description: string;
}

export class MeasureColumnDataViewModel {
    MeasureColumnDataId: number;
    MeasureId: number;
    MeasureColumnId: number;
    ColumnValue: string;
    Date: string;
    ColumnName: string;
}

export class MeasureColumnDataByDateViewModel {
    MeasureId: number;
    Date: Date;
    MeasureColumnData: MeasureColumnDataViewModel[];
}

export class MeasureColumnChartData {
    labels: string[];
    datasets: MeasureColumnDataSet[];
}
export class MeasureColumnDataSet {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
}