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

export type totalprofittwoChartOptions = {
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
  plotOptions: ApexPlotOptions | any;
  states: ApexStates | any;
};

@Component({
  selector: 'app-total-profit-two',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './total-profit-two.component.html',
})
export class TotalProfitTwoComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public totalprofittwoChartOptions: Partial<totalprofittwoChartOptions>;
  constructor() {
    this.totalprofittwoChartOptions = {

      chart: {
        id: "total-profit2",
        type: "area",
        height: 75,
        sparkline: {
          enabled: true,
        },
        group: "total-profit2",
        fontFamily: "inherit",
        foreColor: "#adb0bb",
      },
      series: [
        {
          name: '',
          color: "var(--bs-white)",
          data: [0, 150, 110, 240, 200, 200, 300, 200],
        },
      ],
      stroke: {
        curve: "smooth",
        width: 1.5,
      },
  
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.20,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
  
      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: true,
          position: "right",
        },
        x: {
          show: false,
        },
      },

    };
  }

  ngOnInit(): void { }
}
