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
  NgApexchartsModule,
  ApexTooltip,
} from 'ng-apexcharts';

export interface SalespredictionChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  colors: string[] | any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  fill: ApexFill | any;
}

@Component({
  selector: 'app-sales-prediction',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-prediction.component.html',
})
export class SalesPredictionComponent implements OnInit {
  @ViewChild('chart') chart3: ChartComponent = Object.create(null);
  public SalespredictionChartOptions: Partial<SalespredictionChartOptions>;

  constructor() {
    this.SalespredictionChartOptions = {

      series: [46, 54],
      labels: ["54%", "46%"],
      chart: {
          type: "donut",
          height: 130,
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
                          color: 'var(--bs-success)',
                          fontSize: '16px',
                          fontWeight: "500",
                          label: '54%',
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
    
      legend: {
          show: false,
      },
      colors: ["#9fa0a5", "var(--bs-success)",],
    
      tooltip: {
          theme: "dark",
          fillSeriesColor: false,
      },

    };
  }

  ngOnInit(): void {}
}
