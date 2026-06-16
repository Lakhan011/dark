import { Component } from '@angular/core';
import { single, multi, generateData } from './chartData';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngxchart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.scss'],
})
export class NgxChartComponent {
  single: any[];
  multi: any[];

  view: any = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  barPadding = '50'

  colorScheme: any = {
    domain: ['#2962ff', '#3699ff', '#ee9d01', '#dee2e6'],
  };

  // 3
  showXAxis3: boolean = true;
  showYAxis3: boolean = true;
  gradient3: boolean = true;
  showLegend3: boolean = false;
  showXAxisLabel3: boolean = true;
  xAxisLabel3: string = 'Country';
  showYAxisLabel3: boolean = true;
  yAxisLabel3: string = 'Population';
  legendTitle3: string = 'Years';

  colorScheme3: any = {
    domain: ['#2962ff', '#ee9d01', '#dee2e6']
  };

  // 4
  showXAxis4: boolean = true;
  showYAxis4: boolean = true;
  gradient4: boolean = false;
  showLegend4: boolean = true;
  legendPosition4: any = 'below';
  showXAxisLabel4: boolean = true;
  yAxisLabel4: string = 'Country';
  showYAxisLabel4: boolean = true;
  xAxisLabel4 = 'Population';

  colorScheme4: any = {
    domain: ['#2962ff', '#ee9d01', '#dee2e6']
  };
  schemeType4: any = 'linear';

  // 5
  gradient5: boolean = true;
  showLegend5: boolean = false;
  showLabels5: boolean = true;
  isDoughnut5: boolean = false;
  legendPosition5: any = 'below';

  colorScheme5: any = {
    domain: ['#2962ff', '#3699ff', '#ee9d01', '#dee2e6']
  };

  // 6
  gradient6: boolean = true;
  showLegend6: boolean = true;
  showLabels6: boolean = true;
  isDoughnut6: boolean = false;

  colorScheme6: any = {
    domain: ['#2962ff', '#3699ff', '#ee9d01', '#dee2e6']
  };

  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { multi });
  }

  onSelect(event: any) {
    console.log(event);
  }

  // 2
  onSelect2(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // 3
  onSelect3(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate3(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate3(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // 4
  onSelect4(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate4(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate4(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // 5
  onSelect5(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate5(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate5(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // 6
  onSelect6(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate6(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate6(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
