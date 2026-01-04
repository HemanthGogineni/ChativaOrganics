import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items = new BehaviorSubject<any[]>([]);
    cartItems$ = this.items.asObservable();

    // 🔹 Badge count observable
    private cartCount = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCount.asObservable();

    addToCart(product: any) {
        const current = this.items.getValue();
        const index = current.findIndex(p => p.id === product.id);
        console.log('Adding to cart:', product.quantity, index);

        if (index !== -1) {
            current[index].quantity = current[index].quantity + product.quantity;
            this.items.next([...current]);
        } else {
            this.items.next([...current, { ...product, quantity: product.quantity || 1 }]);
        }

        this.updateCartCount();
    }

    updateQuantity(index: number, quantity: number) {
        const current = this.items.getValue();
        current[index].quantity = quantity;
        this.items.next([...current]);
        this.updateCartCount();
    }

    removeFromCart(index: number) {
        const current = this.items.getValue();
        current.splice(index, 1);
        this.items.next([...current]);
        this.updateCartCount();
    }

    clearCart() {
        this.items.next([]);
        this.updateCartCount();
    }

    getCartItems() {
        return this.items.getValue();
    }

    private updateCartCount() {
        const total = this.items.getValue()
            .reduce((sum, item) => sum + item.quantity, 0);
        console.log('Cart count updated:', total);
        this.cartCount.next(total);
    }
}
