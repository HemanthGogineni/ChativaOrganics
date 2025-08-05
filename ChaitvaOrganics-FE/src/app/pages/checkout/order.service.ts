import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class OrderDataService {
    private cartItems: any[] = [];
    private total = 0;
    private checkoutData = {
        email: '',
        fullName: '',
        address: '',
        phone: '',
        paymentMethod: ''
    };

    setOrderData(items: any[], total: number, checkoutData: any) {
        this.cartItems = items;
        this.total = total;
        this.checkoutData = checkoutData;
    }

    getOrderData() {
        return { cartItems: this.cartItems, total: this.total, checkoutData: this.checkoutData };
    }
}