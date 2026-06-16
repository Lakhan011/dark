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

export type salesofthemonthChartOptions = {
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
  selector: 'app-sales-of-the-month',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-of-the-month.component.html',
})
export class SalesoftheMonthComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public salesofthemonthChartOptions: Partial<salesofthemonthChartOptions>;
  constructor() {
    this.salesofthemonthChartOptions = {

      series: [9, 3, 2, 2],
        labels: ["Social", "Marketing", "Search Engine", "Organic Sales"],
        chart: {
            type: "donut",
            height: 270,
            offsetY: 20,
            fontFamily: "inherit",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: "88",
                    labels: {
                        show: false,
                        name: {
                            show: true,
                            offsetY: 7,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: false,
                            color: "#a1aab2",
                            fontSize: "13px",
                            label: "Our Visitor",
                        },
                    },
                },
            },
        },
        colors: ["#edf1f5", "var(--bs-primary)", "var(--bs-success)", "var(--bs-secondary)"],
        tooltip: {
            show: true,
            fillSeriesColor: false,
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 1025,
                options: {
                    chart: {
                        width: 250,
                    },
                },
            },
            {
                breakpoint: 769,
                options: {
                    chart: {
                        height: 270,
                        width: "100%",
                    },
                },
            },
            {
                breakpoint: 426,
                options: {
                    chart: {
                        height: 250,
                        offsetX: -20,
                        width: 250,
                    },
                },
            },
        ],

    };
  }

  ngOnInit(): void { }
}
