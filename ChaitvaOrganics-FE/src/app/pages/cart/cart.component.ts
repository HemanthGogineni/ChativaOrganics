import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]

})
export class CartComponent {
  cart: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => this.cart = items);
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }
  increment(index: number) {
    this.cart[index].quantity++;
  }

  decrement(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      this.remove(index);
    }
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}