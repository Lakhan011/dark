import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexDataLabels,
  ApexLegend,
  ApexGrid,
  NgApexchartsModule,
  ApexTooltip,
} from 'ng-apexcharts';

export interface allprojectsChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
  fill: ApexFill | any;
}

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent implements OnInit {
  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public allprojectsChartOptions: Partial<allprojectsChartOptions>;

  constructor() {
    this.allprojectsChartOptions = {

        series: [20, 80],
        labels: ["20", "80"],
        chart: {
            type: "donut",
            height: 95,
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '85%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            color: 'var(--bs-danger)',
                            fontSize: '14px',
                            fontWeight: "500",
                            label: '248',
                        },
                    },
                },
            },
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["var(--bs-danger)", "#9fa0a5",],

        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },

    };
  }

  ngOnInit(): void { }
}
