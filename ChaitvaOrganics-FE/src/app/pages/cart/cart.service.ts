import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items = new BehaviorSubject<any[]>([]);
    cartItems$ = this.items.asObservable();

    addToCart(product: any) {
        const current = this.items.getValue();
        const index = current.findIndex(p => p.id === product.id);

        if (index !== -1) {
            current[index].quantity += 1;
            this.items.next([...current]);
        } else {
            this.items.next([...current, { ...product, quantity: 1 }]);
        }
    }

    removeFromCart(index: number) {
        const current = this.items.getValue();
        current.splice(index, 1);
        this.items.next([...current]);
    }

    clearCart() {
        this.items.next([]);
    }

    getCartItems() {
        return this.items.getValue();
    }
}
