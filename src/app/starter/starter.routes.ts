import { Routes } from '@angular/router';

import { StarterComponent } from './starter.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Home', url: '/' },
        { title: 'Starter Page' },
      ],
    },
    component: StarterComponent,
  },
];
