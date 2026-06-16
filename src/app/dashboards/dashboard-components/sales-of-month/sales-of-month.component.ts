import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export interface SalesmonthChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  legends: ApexLegend | any;
  labels: any;
  name: any;
  tooltip: ApexTooltip | any;
  colors: string[] | any;
  plotOptions: ApexPlotOptions | any;
}

@Component({
  selector: 'app-sales-of-month',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-of-month.component.html',
})
export class SalesOfMonthComponent implements OnInit {
  @ViewChild('chart') chart2: ChartComponent = Object.create(null);
  public SalesmonthChartOptions: Partial<SalesmonthChartOptions>;

  constructor() {
    this.SalesmonthChartOptions = {

      series: [28, 10, 15, 40],
      labels: ["Item A", "Item B", "Item C", "Item D"],
      chart: {
        type: "donut",
        height: 265,
        fontFamily: "inherit",
        foreColor: "#adb0bb",
      },
      plotOptions: {
        pie: {
          donut: {
            size: '88%',
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
                fontSize: '24px',
                fontWeight: "700",
                label: '32%',
              },
            },
          },
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },

      legends: {
        show: false,
      },
      colors: ["var(--bs-primary)", "var(--bs-danger)", "var(--bs-warning)", "#9fa0a5",],

      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },

    };
  }

  ngOnInit(): void { }
}
