import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './pages/products/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-details/product-detail.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MenuComponent, ProductComponent, HomeComponent, ProductDetailComponent, PlaceOrderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (typeof window !== 'undefined' && event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
