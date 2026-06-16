import { Routes } from '@angular/router';

import { ChartistjsComponent } from './chartist-js/chartistjs.component';
import { NgxChartComponent } from './ngx-charts/ngx-chart.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';

export const ChartsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chartistjs',
        component: ChartistjsComponent,
        data: {
          title: 'Chartis js',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Chartis js Page' },
          ],
        },
      },
      {
        path: 'ngxchart',
        component: NgxChartComponent,
        data: {
          title: 'Ngx Charts',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Ngx Charts' },
          ],
        },
      },
      {
        path: 'apexchart',
        component: ApexChartComponent,
        data: {
          title: 'Apex Charts',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Apex Charts' },
          ],
        },
      },
    ],
  },
];
