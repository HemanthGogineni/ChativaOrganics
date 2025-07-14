import { Routes } from '@angular/router';
import { ProductComponent } from './pages/products/product.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },

  // optional fallback
  { path: '**', redirectTo: '' }
];
