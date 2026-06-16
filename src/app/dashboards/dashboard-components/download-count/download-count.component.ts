import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexXAxis,
    ApexTooltip,
    ApexTheme,
    ApexGrid,
    ApexFill,
    ApexPlotOptions,
    ApexStates,
    NgApexchartsModule,
} from 'ng-apexcharts';

export type downloadcountChartOptions = {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    xaxis: ApexXAxis | any;
    yaxis: ApexYAxis | any;
    stroke: any;
    theme: ApexTheme | any;
    tooltip: ApexTooltip | any;
    dataLabels: ApexDataLabels | any;
    legend: ApexLegend | any;
    colors: string[] | any;
    labels: string[] | any;
    axisBorder: string[] | any;
    markers: any;
    grid: ApexGrid | any;
    fill: ApexFill | any;
    plotOptions: ApexPlotOptions | any;
    states: ApexStates | any;
};

@Component({
    selector: 'app-download-count',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './download-count.component.html',
})
export class DownloadCountComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public downloadcountChartOptions: Partial<downloadcountChartOptions>;
    constructor() {
        this.downloadcountChartOptions = {

            series: [
                {
                    name: "Premium ",
                    data: [5, 4, 3, 7, 5, 10, 3],
                },
                {
                    name: "Free ",
                    data: [3, 2, 9, 5, 4, 6, 4],
                },
            ],
            chart: {
                fontFamily: "inherit",
                type: "bar",
                height: 300,
                offsetY: 10,
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: true,
                strokeDashArray: 3,
                borderColor: "rgba(0,0,0,0.1)",
            },
            colors: ["var(--bs-primary)", "var(--bs-success)"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "20%",
                    borderRadius: 5,
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 5,
                colors: ["transparent"],
            },
            xaxis: {
                type: "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                tickAmount: "16",
                tickPlacement: "on",
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#a1aab2",
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a1aab2",
                    },
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                theme: "dark",
            },
            legend: {
                show: false,
            },

        };
    }

    ngOnInit(): void { }
}
