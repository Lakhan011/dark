import { Routes } from '@angular/router';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { NotifierComponent } from './notifier/notifier.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryListComponent } from './subcategory/subcategory-list.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'progressbar',
        component: NgbdpregressbarBasicComponent,
        data: {
          title: 'Progressbar',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Progressbar' },
          ],
        },
      },
      {
        path: 'card',
        component: CardsComponent,
        data: {
          title: 'Cards',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Cards' },
          ],
        },
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent,
        data: {
          title: 'Pagination',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Pagination' },
          ],
        },
      },
      {
        path: 'accordion',
        component: NgbdAccordionBasicComponent,
        data: {
          title: 'Accordion',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Accordion' },
          ],
        },
      },
      {
        path: 'badges',
        component: BadgeComponent,
        data: {
          title: 'Badges',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Badges' },
          ],
        },
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent,
        data: {
          title: 'Alert',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Alert' },
          ],
        },
      },
      {
        path: 'carousel',
        component: NgbdCarouselBasicComponent,
        data: {
          title: 'Carousel',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Carousel' },
          ],
        },
      },
      {
        path: 'datepicker',
        component: NgbdDatepickerBasicComponent,
        data: {
          title: 'Datepicker',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Datepicker' },
          ],
        },
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent,
        data: {
          title: 'Dropdown',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Dropdown' },
          ],
        },
      },
      {
        path: 'modal',
        component: NgbdModalBasicComponent,
        data: {
          title: 'Modal',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Modal' },
          ],
        },
      },
      {
        path: 'poptool',
        component: NgbdPopTooltipComponent,
        data: {
          title: 'Popover & Tooltip',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Popover & Tooltip' },
          ],
        },
      },
      {
        path: 'rating',
        component: NgbdratingBasicComponent,
        data: {
          title: 'Rating',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Rating' },
          ],
        },
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent,
        data: {
          title: 'Nav',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Nav' },
          ],
        },
      },
      {
        path: 'timepicker',
        component: NgbdtimepickerBasicComponent,
        data: {
          title: 'Timepicker',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Timepicker' },
          ],
        },
      },

      {
        path: 'buttons',
        component: NgbdButtonsComponent,
        data: {
          title: 'Button',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Button' },
          ],
        },
      },
      {
        path: 'toast',
        component: ToastComponent,
        data: {
          title: 'Toast',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Toast' },
          ],
        },
      },
      {
        path: 'notifier',
        component: NotifierComponent,
        data: {
          title: 'Notifier',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'ngComponent' },
            { title: 'Notifier' },
          ],
        },
      },
      {
        path: 'categories',
        component: CategoryComponent,
        data: {
          title: 'Categories',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Categories' }
          ],
        },
      },
      {
        path: 'subcategories',
        component: SubcategoryListComponent,
        data: {
          title: 'Subcategories',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Subcategories' }
          ],
        },
      },
    ],
  },
];
