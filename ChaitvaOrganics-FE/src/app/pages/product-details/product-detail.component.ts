import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
    productId!: string;
    product: any;
    quantity = 1;
    cartItems: any[] = [];

    products = [
        { id: '1', name: 'Black Rice (1kg)', price: 290, image: 'black-rice.jpeg', category: 'rice' },
        { id: '2', name: 'Red Rice (1Kg)', price: 120, image: 'red-rice.jpeg', category: 'rice' },
        { id: '3', name: 'Brown Rice(1kg)', price: 120, image: 'brown-rice.jpeg', category: 'rice' },
        { id: '4', name: 'Kerala Vadi Matta Rice(1Kg)', price: 120, image: 'kerala-rice.jpeg', category: 'rice' },
        { id: '5', name: 'Pepper(100 Grams)', price: 160, image: 'black-pepper.jpeg', category: 'spices' },
        { id: '6', name: 'Cumin (100 Grams)', price: 90, image: 'cumin.jpeg', category: 'spices' },
        { id: '7', name: 'Turmeric (200 Grams)', price: 160, image: 'Turmeric.jpeg', category: 'spices' },
        { id: '8', name: 'Coriander (100 Grams)', price: 80, image: 'corriander.jpeg', category: 'spices' },
        { id: '9', name: 'Cinnamon (100 Grams)', price: 90, image: 'cinnamon.jpeg', category: 'spices' },
        { id: '10', name: 'Chilli Flakes (200 Grams)', price: 180, image: 'chill-fkakes.jpeg', category: 'spices' },
        { id: '11', name: 'Coffee Mix (200 Grams)', price: 399, image: 'coffee-powder.jpeg', category: 'beverages' },
        { id: '12', name: 'Tea Mix (200 Grams)', price: 199, image: 'Tea-powder.jpeg', category: 'beverages' },
        { id: '13', name: 'Little Millet (500 Grams)', price: 110, image: 'Little-millet.jpeg', category: 'millets' },
        //    { id: '14', name: 'Kodo Millet (500 Grams)', price: 120, image: 'prod-6.jpeg', category: 'millets' },
        { id: '14', name: 'Foxtail Millet (500 Grams)', price: 80, image: 'foxtail.jpeg', category: 'millets' },
        { id: '15', name: 'Barnyard Millet (500 Grams)', price: 120, image: 'barnyard-millet.jpeg', category: 'millets' },
        { id: '16', name: 'Lip Balm - Strawberry(5 Grams)', price: 140, image: 'prod-13.jpeg', category: 'personal' },
        { id: '17', name: 'Lip Balm - Beetroot(5 Grams)', price: 140, image: 'lpbalm-beetroot.jpeg', category: 'personal' },
        { id: '18', name: 'Loofah', price: 49, image: 'loofah.jpeg', category: 'personal' },
        { id: '19', name: 'Bamboo Tooth Brush', price: 49, image: 'prod-8.jpeg', category: 'personal' },
        { id: '20', name: 'Pocket Comb', price: 60, image: 'pocket-comb.jpeg', category: 'personal' },
        { id: '21', name: 'Ayurvedic Hair Oil Mix ', price: 160, image: 'prod-2.jpeg', category: 'personal' },
        { id: '22', name: 'Eucalyptus Oil ', price: 240, image: 'prod-6.jpeg', category: 'personal' },
        { id: '23', name: 'Organic Soap (Natural Sandalwood)', price: 90, image: 'sandlewood.jpeg', category: 'personal' },
        { id: '24', name: 'Organic Soap (Natural Aloevera)', price: 90, image: 'prod-10.jpeg', category: 'personal' },
        { id: '25', name: 'Herbal Shampoo (100 ML)', price: 299, image: 'prod-11.jpeg', category: 'personal' },
        { id: '26', name: 'Dual Bristled Neem Comb', price: 120, image: 'prod-14.jpeg', category: 'personal' },

    ];

    constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.productId = this.route.snapshot.paramMap.get('id')!;
        this.product = this.products.find(p => p.id === this.productId);
        this.cartService.cartItems$.subscribe(items => {
            this.cartItems = items;
        });
    }


    increment() {
        this.quantity++;
    }

    decrement() {
        if (this.quantity > 1) this.quantity--;
    }

    addToCart() {
        const itemWithQuantity = { ...this.product, quantity: this.quantity };
        this.cartService.addToCart(itemWithQuantity);
        // this.router.navigate(['/cart']);
    }
    isInCart(productId: string): boolean {
        return this.cartItems.some(item => item.id === productId);
    }

}
