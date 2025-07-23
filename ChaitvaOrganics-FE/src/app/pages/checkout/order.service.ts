import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class OrderDataService {
    private cartItems: any[] = [];
    private total = 0;

    setOrderData(items: any[], total: number) {
        this.cartItems = items;
        this.total = total;
    }

    getOrderData() {
        return { cartItems: this.cartItems, total: this.total };
    }
}