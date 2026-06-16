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
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';

export interface visitsourceChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  legends: ApexLegend | any;
  labels: any;
  name: any;
  tooltip: ApexTooltip | any;
  responsive: ApexResponsive | any;
  colors: string[] | any;
  legend: string[] | any;
  plotOptions: ApexPlotOptions | any;
}

@Component({
  selector: 'app-visit-source',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './visit-source.component.html',
})
export class VisitSourceComponent implements OnInit {
  @ViewChild('chart') chart2: ChartComponent = Object.create(null);
  public visitsourceChartOptions: Partial<visitsourceChartOptions>;

  constructor() {
    this.visitsourceChartOptions = {

      labels: ["Desktop", "Mobile", "Other", "Tablet"],
      series: [5.5, 3.5, 3, 2],
      chart: {
        type: "donut",
        height: 250,
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
            size: "86%",
            labels: {
              show: true,
              name: {
                show: false,
                offsetY: 7,
              },
              value: {
                show: true,
                fontSize: "20px",
              },
              total: {
                show: false,
                color: "#a1aab2",
                fontSize: "13px",
                label: "Visits",
              },
            },
          },
        },
      },
      colors: ["var(--bs-secondary)", "var(--bs-primary)", "#dadada", "var(--bs-danger)"],
      tooltip: {
        show: true,
        fillSeriesColor: false,
      },
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 426,
          options: {
            chart: {
              height: 230,
              width: 200,
            },
          },
        },
      ],

    };
  }

  ngOnInit(): void { }
}
