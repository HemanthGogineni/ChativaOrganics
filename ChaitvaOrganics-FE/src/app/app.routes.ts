import { Routes } from '@angular/router';
import { ProductComponent } from './pages/products/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'cart', component: CartComponent },


  // optional fallback
];
