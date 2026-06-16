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

export type totalrevenueChartOptions = {
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
  markers: any;
  grid: ApexGrid | any;
  fill: ApexFill | any;
  responsive: ApexResponsive | any;
  plotOptions: ApexPlotOptions | any;
  states: ApexStates | any;
};

@Component({
  selector: 'app-total-revenue',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './total-revenue.component.html',
})
export class TotalRevenueComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public totalrevenueChartOptions: Partial<totalrevenueChartOptions>;
  constructor() {
    this.totalrevenueChartOptions = {

      series: [
        {
          name: "2024",
          data: [
            800000, 1200000, 1400000, 1300000, 1200000, 1400000, 1300000, 1300000,
            1200000,
          ],
        },
        {
          name: "2023",
          data: [
            200000, 400000, 500000, 300000, 400000, 500000, 300000, 300000,
            400000,
          ],
        },
        {
          name: "2022",
          data: [
            100000, 200000, 400000, 600000, 200000, 400000, 600000, 600000,
            200000,
          ],
        },
      ],
      chart: {
        fontFamily: "inherit",
        type: "bar",
        height: 306,
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
      },
      colors: ["#0f8edd", "#11a0f8", "#51bdff"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          borderRadius: 8,
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
        ],
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      yaxis: {
        tickAmount: 10,
        labels: {
          style: {
            colors: "#a1aab2",
          },
        },
      },
      tooltip: {
        theme: "dark",
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },

    };
  }

  ngOnInit(): void { }
}
