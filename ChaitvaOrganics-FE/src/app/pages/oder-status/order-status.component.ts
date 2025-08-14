import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
  imports: [CommonModule]
})
export class OrderStatusComponent implements OnInit {
  status: 'success' | 'error' = 'success'; // default
  message = '';
  contactMessage = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Get status from query param, e.g., /order-status?status=success
    this.route.queryParams.subscribe(params => {
      const statusParam = params['status'];
      this.status = statusParam === 'error' ? 'error' : 'success';

      if (this.status === 'success') {
        this.message = 'Your order has been placed successfully!';
      } else {
        this.message = 'Order failed!';
        this.contactMessage =
          'Please contact info@chaitvaorganics.com/+919154850295 with your transaction details.';
      }
    });
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  contactSupport() {
    this.router.navigate(['/contact-us']);
  }
}
