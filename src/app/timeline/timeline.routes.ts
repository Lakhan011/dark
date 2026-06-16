import { Routes } from '@angular/router';

import { CenterComponent } from './center/center.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

export const TimelineRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'center',
        component: CenterComponent,
        data: {
          title: 'Center Timeline',
          breadcrumb: 'true',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Center Timeline' }
          ]
        }
      },
      {
        path: 'left',
        component: LeftComponent,
        data: {
          title: 'Left Timeline',
          breadcrumb: 'true',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Left Timeline' }
          ]
        }
      },
      {
        path: 'right',
        component: RightComponent,
        data: {
          title: 'Right Timeline',
          breadcrumb: 'true',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Right Timeline' }
          ]
        }
      }
    ]
  }
];
