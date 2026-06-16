import { Routes } from '@angular/router';

import { ToastrComponent } from './toastr/toastr.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';

export const ExtraComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr Notification',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Toastr Page' }
          ]
        }
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Editor Page',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Editor Page' }
          ]
        }
      },
      {
        path: 'dragndrop',
        component: DragComponent,
        data: {
          title: 'DragComponent Page',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'DragComponent Page' }
          ]
        }
      }
    ]
  }
];
