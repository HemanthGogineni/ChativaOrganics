import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductComponent } from './pages/products/product.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MenuComponent, ProductComponent, HomeComponent, CheckoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }
