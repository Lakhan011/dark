import { Routes } from '@angular/router';

import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { SimplelineComponent } from './simpleline/simpleline.component';
import { MaterialComponent } from './material/material.component';

export const IconsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fontawesome',
        component: FontawesomeComponent,
        data: {
          title: 'FontAwesome',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'FontAwesome' }
          ]
        }
      },
      {
        path: 'simpleline',
        component: SimplelineComponent,
        data: {
          title: 'Simple-Line-Icon',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Simple-Line-Icon' }
          ]
        }
      },
      {
        path: 'material',
        component: MaterialComponent,
        data: {
          title: 'Material-Icon',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Material-Icon' }
          ]
        }
      }
    ]
  }
];
