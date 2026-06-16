import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboards/dashboard.routes').then( 
            (m) => m.DashboardRoutes
          ),
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./starter/starter.routes').then((m) => m.StarterRoutes),
      },
      {
        path: 'component',
        loadChildren: () =>
          import('./component/component.routes').then(
            (m) => m.ComponentsRoutes
          ),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./cards/cards.routes').then((m) => m.CardsRoutes),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/icons.routes').then((m) => m.IconsRoutes),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./form/forms.routes').then((m) => m.FormsRoutes),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./table/tables.routes').then((m) => m.TablesRoutes),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.routes').then((m) => m.ChartsRoutes),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./widgets/widgets.routes').then((m) => m.WidgetRoutes),
      },
      {
        path: 'ecom',
        loadChildren: () =>
          import('./ecommerce/ecom.routes').then((m) => m.EcomRoutes),
      },
      {
        path: 'timeline',
        loadChildren: () =>
          import('./timeline/timeline.routes').then((m) => m.TimelineRoutes),
      },
      {
        path: 'extra-component',
        loadChildren: () =>
          import('./extra-component/extra-component.routes').then(
            (m) => m.ExtraComponentsRoutes
          ),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./apps/apps.routes').then((m) => m.AppsRoutes),
      },
      {
        path: 'sample-pages',
        loadChildren: () =>
          import('./sample-pages/sample-pages.routes').then(
            (m) => m.SamplePagesRoutes
          ),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/authentication/404',
  },
];
