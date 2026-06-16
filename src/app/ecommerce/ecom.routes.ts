import { Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { OrderComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';

export const EcomRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cart',
        component: CartComponent,
        data: {
          title: 'Cart',
          urls: [{ title: 'Home', url: '/' }, { title: 'Cart' }]
        }
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: 'Checkout',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Checkout' }
          ]
        }
      },
      {
        path: 'details',
        component: DetailsComponent,
        data: {
          title: 'Product Details',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Product Details' }
          ]
        }
      },
      {
        path: 'edit',
        component: EditComponent,
        data: {
          title: 'Edit Product',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Edit Product' }
          ]
        }
      },
      {
        path: 'orders',
        component: OrderComponent,
        data: {
          title: 'Orders',
          urls: [{ title: 'Home', url: '/' }, { title: 'Orders' }]
        }
      },
      {
        path: 'products',
        component: ProductComponent,
        data: {
          title: 'Products',
          urls: [
            { title: 'Home', url: '/' },
            { title: 'Products' }
          ]
        }
      }
    ]
  }
];
