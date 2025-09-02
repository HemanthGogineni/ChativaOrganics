import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OrderDataService } from '../checkout/order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class PlaceOrderComponent implements OnInit {

  qrImageBase64: string | null = null;
  upiLink: string | URL = '';
  showPaymentUI = false;
  cartItems: any[] = [];
  total: number = 0;
  checkoutData: any = {};
  orderData: any = {};
  isSubmitting = false;
  showModal = true;
  modalTitle = '';
  modalMessage = '';
  paymentLinks: { default: string | URL; phonepe: string; gpay: string; paytm: string; } = { default: '', phonepe: '', gpay: '', paytm: '' }
    ;


  constructor(
    private orderService: OrderDataService,
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {

  }

  ngOnInit(): void {
    const data = this.orderService.getOrderData();
    this.cartItems = data.cartItems;
    this.total = data.total;
    this.checkoutData = data.checkoutData;

    this.http.get<{
      upiLink: string | URL;
      qrImageBytes: string;
    }>(`https://www.chaitvaorganics.com/api/checkout/getPaymentDetails?amount=${this.total}`).subscribe(res => {
      this.ngZone.run(() => {
        this.qrImageBase64 = res.qrImageBytes;
        this.upiLink = res.upiLink;
        const url = new URL(res.upiLink);
        const params = url.searchParams.toString(); // pa=...&pn=...&am=...&tn=...&cu=...
        this.paymentLinks = {
          default: this.upiLink,
          phonepe: `https://phon.pe/pay?${params}`,
          gpay: `https://gpay.app.goo.gl/pay?${params}`,
          paytm: `paytm://pay?${params}`
        };
        this.showPaymentUI = true;
        this.cdr.detectChanges();
      });


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

    this.http.post('https://www.chaitvaorganics.com/api/checkout/finalPayment', formData)
      .subscribe({
        next: () => {
          this.router.navigate(['/order-status'], { queryParams: { status: 'success' } });
        },
        error: (err) => {
          this.router.navigate(['/order-status'], { queryParams: { status: 'error' } });

        }
      });
  }

  closeModal(): void {
    this.showModal = false;
  }



}