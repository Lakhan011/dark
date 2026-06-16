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

export type weatherchartChartOptions = {
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
  axisBorder: string[] | any;
  markers: any;
  grid: ApexGrid | any;
  fill: ApexFill | any;
  plotOptions: ApexPlotOptions | any;
  states: ApexStates | any;
};

@Component({
  selector: 'app-weather-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './weather-chart.component.html',
})
export class WeatherChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public weatherchartChartOptions: Partial<weatherchartChartOptions>;
  constructor() {
    this.weatherchartChartOptions = {

      series: [
        {
          name: "",
          data: [2, 3, 8, 10, 8, 12, 2, 8, 2, 4, 1, 10, 8, 12, 10],
        },
      ],
      chart: {
        type: "bar",
        fontFamily: "inherit",
        height: 120,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ["rgba(255, 255, 255, 0.3)"],
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          startingShape: "flat",
          endingShape: "flat",
          columnWidth: "100%",
          barHeight: "100%",
          borderRadius: 5,
          // endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      axisBorder: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: "12px",
          fontFamily: "inherit",
        },
        x: {
          show: false,
        },
        y: {
          formatter: undefined,
        },
      },

    };
  }

  ngOnInit(): void { }
}
