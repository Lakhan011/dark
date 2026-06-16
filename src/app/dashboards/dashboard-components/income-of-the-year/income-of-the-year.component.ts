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
    ApexResponsive,
    NgApexchartsModule,
} from 'ng-apexcharts';

export type incomeoftheyearChartOptions = {
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
    markers: any;
    grid: ApexGrid | any;
    fill: ApexFill | any;
    responsive: ApexResponsive | any;
    plotOptions: ApexPlotOptions | any;
    states: ApexStates | any;
};

@Component({
    selector: 'app-income-of-the-year',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './income-of-the-year.component.html',
})
export class IncomeoftheYearComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public incomeoftheyearChartOptions: Partial<incomeoftheyearChartOptions>;
    constructor() {
        this.incomeoftheyearChartOptions = {

            series: [
                {
                    name: "Growth ",
                    data: [5, 4, 3, 7, 5, 10, 3],
                },
                {
                    name: "Net ",
                    data: [3, 2, 9, 5, 4, 6, 4],
                },
            ],
            chart: {
                fontFamily: "inherit",
                type: "bar",
                height: 290,
                offsetY: 10,
                toolbar: {
                    show: false,
                },
            },
            grid: {
                show: true,
                strokeDashArray: 3,
                borderColor: "rgba(0,0,0,0.1)",
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            colors: ["var(--bs-primary)", "var(--bs-success)"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "50%",
                    borderRadius: 6,
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
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                tickAmount: "16",
                tickPlacement: "on",
                axisBorder: {
                    show: false,
                },
                axisTicks: {
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
