import { Routes } from '@angular/router';
import { ProductComponent } from './pages/products/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { OrderStatusComponent } from './pages/oder-status/order-status.component';
import { ProductDetailComponent } from './pages/product-details/product-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'order-status', component: OrderStatusComponent },
  { path: 'product/:id', component: ProductDetailComponent }  // or 'ssr' },

];
