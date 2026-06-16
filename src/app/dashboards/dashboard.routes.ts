import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboard4/dashboard4.component';
import { Dashboard5Component } from './dashboard5/dashboard5.component';
import { Dashboard6Component } from './dashboard6/dashboard6.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'dashboard4',
        component: Dashboard4Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'dashboard5',
        component: Dashboard5Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      },
      {
        path: 'dashboard6',
        component: Dashboard6Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dashboard' }
          ]
        }
      }
    ]
  }
];
