import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OrderDataService } from '../checkout/order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-place-order',
  standalone: true,
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class PlaceOrderComponent implements OnInit {

  qrImageBase64: string | null = null;
  upiLink: string | null = null;
  showPaymentUI = false;
  cartItems: any[] = [];
  total: number = 0;
  checkoutData: any = {};
  orderData: any = {};
  isSubmitting = false;
  showModal = false;
  modalTitle = '';
  modalMessage = '';

  constructor(
    private orderService: OrderDataService,
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    const data = this.orderService.getOrderData();
    this.cartItems = data.cartItems;
    this.total = data.total;
    this.checkoutData = data.checkoutData;

    this.http.get<{
      upiLink: string | null;
      qrImageBytes: string;
    }>(`http://localhost:8080/api/checkout/getPaymentDetails?amount=${this.total}`).subscribe(res => {
      this.qrImageBase64 = res.qrImageBytes;
      this.upiLink = res.upiLink;
      this.showPaymentUI = true;
      this.cdr.detectChanges();

    });

  }
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  finalOrder(): void {
    if (!this.selectedFile) {
      alert('Please select a file first!');
      return;
    }

    this.isSubmitting = true; // 🔁 Start loading

    this.orderData = {
      email: this.checkoutData.email,
      fullName: this.checkoutData.fullName,
      address: this.checkoutData.address,
      phone: this.checkoutData.phone,
      paymentMethod: this.checkoutData.paymentMethod,
      transactionDetails: this.selectedFile,
      items: this.cartItems,
    };

    const formData = new FormData();

    formData.append('file', this.selectedFile);
    const jsonBlob = new Blob([JSON.stringify(this.orderData)], { type: 'application/json' });
    formData.append('checkout', jsonBlob);

    this.http.post('http://localhost:8080/api/checkout/finalPayment', formData)
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.modalTitle = '✅ Order Placed Successfully';
          this.modalMessage = 'Thank you for your order! Click OK to continue.';
          this.showModal = true;
          console.log('showModal:', this.showModal);

        },
        error: (err) => {
          console.error(err);
          this.isSubmitting = false;
          this.modalTitle = '❌ Order Failed';
          this.modalMessage = 'Something went wrong. Please contact support.';
          this.showModal = true;
          console.log('showModal:', this.showModal);
        }
      });
  }

  closeModal(): void {
    this.showModal = false;
    this.router.navigate(['/products']);
  }



}