import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from '../../pages/checkout/checkout.component';


declare var bootstrap: any; // if not using types for bootstrap

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, RouterModule, CheckoutComponent]
})
export class MenuComponent {
  bagItems: any[] = [];

  openBagModal() {
    const modalElement = document.getElementById('checkoutBagModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}
