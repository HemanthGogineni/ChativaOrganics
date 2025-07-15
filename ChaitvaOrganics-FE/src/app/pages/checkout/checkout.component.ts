import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule]

})
export class CheckoutComponent {
  @Input() items: any[] = [];

  get total() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}