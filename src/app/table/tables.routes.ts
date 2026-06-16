import { Routes } from '@angular/router';

import { DatatableComponent } from './data-table/data-table.component';

import { BasictableComponent } from './basic/basic.component';
import { DarktableComponent } from './dark-basic/dark.component';
import { ColortableComponent } from './color-table/color.component';
import { TablesizeComponent } from './sizing/size.component';
import { TableComponent } from './ngtable/ngtable.component';

export const TablesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'datatable',
        component: DatatableComponent,
        data: {
          title: 'Data Table',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Data Table' },
          ],
        },
      },
      {
        path: 'basictables',
        component: BasictableComponent,
        data: {
          title: 'Basic Tables',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Basic Tables' },
          ],
        },
      },
      {
        path: 'darktables',
        component: DarktableComponent,
        data: {
          title: 'Dark Tables',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Dark Tables' },
          ],
        },
      },
      {
        path: 'colortables',
        component: ColortableComponent,
        data: {
          title: 'Color Tables',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Color Tables' },
          ],
        },
      },
      {
        path: 'tablesizing',
        component: TablesizeComponent,
        data: {
          title: 'Table Sizing',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Table Sizing' },
          ],
        },
      },
      {
        path: 'ngtable',
        component: TableComponent,
        data: {
          title: 'Ng Table',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Ng Table' },
          ],
        },
      },
    ],
  },
];
