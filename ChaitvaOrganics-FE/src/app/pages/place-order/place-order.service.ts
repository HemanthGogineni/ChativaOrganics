import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlaceOrderService {
    constructor(private http: HttpClient) { }

    getPaymentDetails(orderTotal: number) {
        return this.http.get<{
            upiLink: string | null;
            qrImageBytes: string;
        }>(`http://localhost:8088/api/checkout/getPaymentDetails?amount=${orderTotal}`);
    }
}
