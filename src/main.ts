import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { ProductListComponent } from './app/product-list/product-list.component';
import { ProductDetailsComponent } from './app/product-details/product-details.component';
import { CartComponent } from './app/cart/cart.component';
import { ShippingComponent } from './app/shipping/shipping.component';

const route: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(route), provideHttpClient()],
}).catch((err) => console.error(err));
