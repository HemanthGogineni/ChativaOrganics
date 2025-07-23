import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { OrderDataService } from './order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule],
})
export class CheckoutComponent {

  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router, private orderService: OrderDataService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get total(): number {
    return this.subtotal;
  }

  updateQuantity(index: number, change: number) {
    const item = this.cartItems[index];
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;
  }


  placeOrder() {
    this.orderService.setOrderData(this.cartItems, this.subtotal);
    this.router.navigate(['/place-order']);
  }

}