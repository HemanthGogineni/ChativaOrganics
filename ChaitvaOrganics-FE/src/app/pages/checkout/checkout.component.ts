import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { OrderDataService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { AddressService } from './address.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CheckoutComponent {

  checkout = {
    email: '',
    fullName: '',
    address: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: '',
    paymentMethod: ''
  };

  cartItems: any[] = [];
  countries: any[] = [];
  states: string[] = [];
  constructor(private cartService: CartService, private router: Router,
    private orderService: OrderDataService, private addressService: AddressService) { }

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


  placeOrder(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    form.value.address = `${this.checkout.addressLine1 || ''}, ${this.checkout.addressLine2 || ''}, ${this.checkout.landmark || ''}, ${this.checkout.city || ''}, ${this.checkout.state || ''}, ${this.checkout.pincode || ''}, ${this.checkout.country || ''}`.replace(/,\s*,/g, ',').trim();
    this.orderService.setOrderData(this.cartItems, this.subtotal, form.value);
    this.router.navigate(['/place-order']);
  }

}