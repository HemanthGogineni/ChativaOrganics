import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlaceOrderService {
    constructor(private http: HttpClient) { }

    getPaymentDetails(orderTotal: number) {
        return this.http.get<{
            upiImg: string | null; upiLink: string, qrImageBytes: string
        }>(
            `/api/checkout/getPaymentDetails?amount=${orderTotal}`
        );
    }
}
