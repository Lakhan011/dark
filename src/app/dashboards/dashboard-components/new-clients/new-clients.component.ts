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

export interface newclientChartOptions {
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
  selector: 'app-new-clients',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './new-clients.component.html',
})
export class NewClientsComponent implements OnInit {
  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public newclientChartOptions: Partial<newclientChartOptions>;

  constructor() {
    this.newclientChartOptions = {

      series: [12, 88],
      labels: ["12", "88"],
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
                color: 'var(--bs-primary)',
                fontSize: '14px',
                fontWeight: "500",
                label: '86',
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
      colors: ["var(--bs-primary)", "#9fa0a5",],

      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },

    };
  }

  ngOnInit(): void { }
}
