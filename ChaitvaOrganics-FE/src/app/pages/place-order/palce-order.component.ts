import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlaceOrderService } from './place-order.service';
import { OrderDataService } from '../checkout/order.service';

@Component({
  selector: 'app-palce-order',
  templateUrl: './palce-order.component.html',
  styleUrls: ['./palce-order.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class PlaceOrderComponent {

  qrImageBase64: string | null = null;
  upiLink: string | null = null;
  showPaymentUI = false;
  cartItems: any[] = [];
  total: number = 0;

  constructor(private placeOrderService: PlaceOrderService, private orderService: OrderDataService) {

  }

  ngOnInit(): void {
    const data = this.orderService.getOrderData();
    this.cartItems = data.cartItems;
    this.total = data.total;
    this.placeOrderService.getPaymentDetails(this.total).subscribe(res => {
      this.qrImageBase64 = res.qrImageBytes;
      this.upiLink = res.upiLink;
    });
  }

}