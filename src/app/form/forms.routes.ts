import { Routes } from '@angular/router';

import { FormBasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { CheckradioComponent } from './checkbox-radio/cr.component';
import { ForminputsComponent } from './form-inputs/inputs.component';
import { GridsComponent } from './input-grids/grids.component';
import { InputgroupsComponent } from './input-groups/input-groups.component';
import { FormhorizontalComponent } from './form-horizontal/horizontal.component';
import { FormactionsComponent } from './form-actions/actions.component';
import { FormrowsepComponent } from './form-row-separator/row-sep.component';
import { FormstripedComponent } from './form-striped-row/striped.component';
import { FormdetailComponent } from './form-detail/detail.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { NgbdtypeheadBasicComponent } from './typehead/typehead.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'formsl/formbasic',
        component: FormBasicComponent,
        data: {
          title: 'Basic Form',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Basic Form' }
          ]
        }
      },
      {
        path: 'formsa/formvalidation',
        component: FormvalComponent,
        data: {
          title: 'Form Validation Page',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Form Validation Page' }
          ]
        }
      },
      {
        path: 'forminputs',
        component: ForminputsComponent,
        data: {
          title: 'Form Inputs',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Form Inputs' }
          ]
        }
      },
      {
        path: 'inputgroups',
        component: InputgroupsComponent,
        data: {
          title: 'Input Groups',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Input Groups' }
          ]
        }
      },
      {
        path: 'inputgrid',
        component: GridsComponent,
        data: {
          title: 'Input Grids',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Input Grids' }
          ]
        }
      },
      {
        path: 'checkboxandradio',
        component: CheckradioComponent,
        data: {
          title: 'Checkbox & Radio',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Checkbox & Radio' }
          ]
        }
      },
      {
        path: 'formsl/formhorizontal',
        component: FormhorizontalComponent,
        data: {
          title: 'Horizontal Forms',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Horizontal Forms' }
          ]
        }
      },
      {
        path: 'formsl/formactions',
        component: FormactionsComponent,
        data: {
          title: 'Form Actions',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Form Actions' }
          ]
        }
      },
      {
        path: 'formsl/formrowseparator',
        component: FormrowsepComponent,
        data: {
          title: 'Row Separator Forms',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Row Separator Forms' }
          ]
        }
      },
      {
        path: 'formsl/formstripedrows',
        component: FormstripedComponent,
        data: {
          title: 'Striped Rows',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Striped Rows' }
          ]
        }
      },
      {
        path: 'formsl/formdetail',
        component: FormdetailComponent,
        data: {
          title: 'Detail Forms',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Detail Forms' }
          ]
        }
      },
      {
        path: 'multiselect',
        component: MultiselectComponent,
        data: {
          title: 'Multiselect',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Multiselect' }
          ]
        }
      },
      {
        path: 'formsa/typehead',
        component: NgbdtypeheadBasicComponent,
        data: {
          title: 'Typehead',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Typehead' }
          ]
        }
      },
      {
        path: 'ngx',
        loadChildren: () => import('./ngx-wizard/ngx-wizard.module').then(m => m.NGXFormWizardModule)
      }
    ]
  }
];
