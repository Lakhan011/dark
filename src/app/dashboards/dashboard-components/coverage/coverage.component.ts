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

export type coverageChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  labels: string[] | any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  fill: ApexFill | any;
  plotOptions: ApexPlotOptions | any;
  states: ApexStates | any;
};

@Component({
  selector: 'app-coverage',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './coverage.component.html',
})
export class CoverageComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public coverageChartOptions: Partial<coverageChartOptions>;
  constructor() {
    this.coverageChartOptions = {

      series: [30, 10, 60],
      labels: ["2022", "2021", "2020"],
      chart: {
        height: 120,
        type: "donut",
        fontFamily: "inherit",
        foreColor: "#adb0bb",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '80%',
          },
        },
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
      colors: ["#004670", "#00395C", "#005C94"],

      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },

    };
  }

  ngOnInit(): void { }
}
