import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexChart,
  ChartComponent,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export interface SalesdifferenceChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  stroke: ApexStroke | any;
  dataLabels: ApexDataLabels | any;
  legends: ApexLegend | any;
  labels: any;
  name: any;
  tooltip: ApexTooltip | any;
  colors: string[] | any;
  legend: ApexLegend | any; 
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
}

@Component({
  selector: 'app-sales-difference',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './sales-difference.component.html',
})
export class SalesDifferenceComponent implements OnInit {
  @ViewChild('chart') chart4: ChartComponent = Object.create(null);
  public SalesdifferenceChartOptions: Partial<SalesdifferenceChartOptions>;

  constructor() {
    this.SalesdifferenceChartOptions = {

      series: [12, 88],
      labels: ["12%", "88%"],
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
                        color: 'var(--bs-warning)',
                        fontSize: '16px',
                        fontWeight: "500",
                        label: '12%',
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
      colors: ["var(--bs-warning)", "#9fa0a5",],
    
      tooltip: {
          theme: "dark",
          fillSeriesColor: false,
      },

    };
  }

  ngOnInit(): void { }
}
