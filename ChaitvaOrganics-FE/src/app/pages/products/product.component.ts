import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private cartService: CartService) { }

  categories = [
    { id: 'rice', name: 'Rice & Grains' },
    { id: 'millets', name: 'Millets' },
    { id: 'spices', name: 'Spices' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'personal', name: 'Personal & Hair Care' },
  ];

  selectedCategory = 'rice';

  products = [
    { id: '1', name: 'Black Rice (1kg)', price: 290, image: 'prod-1.jpeg', category: 'rice' },
    { id: '2', name: 'Red Rice (1Kg)', price: 120, image: 'prod-2.jpeg', category: 'rice' },
    { id: '3', name: 'Brown Rice(1kg)', price: 120, image: 'prod-3.jpeg', category: 'rice' },
    { id: '4', name: 'Kerala Vadi Matta Rice(1Kg)', price: 120, image: 'prod-4.jpeg', category: 'rice' },
    { id: '5', name: 'Pepper(100 Grams)', price: 160, image: 'prod-5.jpeg', category: 'spices' },
    { id: '6', name: 'Cumin (100 Grams)', price: 90, image: 'prod-6.jpeg', category: 'spices' },
    { id: '7', name: 'Turmeric (200 Grams)', price: 160, image: 'prod-7.jpeg', category: 'spices' },
    { id: '8', name: 'Coriander (100 Grams)', price: 80, image: 'prod-8.jpeg', category: 'spices' },
    { id: '9', name: 'Cinnamon (100 Grams)', price: 90, image: 'prod-1.jpeg', category: 'spices' },
    { id: '10', name: 'Chilli Flakes (200 Grams)', price: 180, image: 'prod-2.jpeg', category: 'spices' },
    { id: '11', name: 'Coffee Mix (200 Grams)', price: 399, image: 'prod-3.jpeg', category: 'beverages' },
    { id: '12', name: 'Tea Mix (200 Grams)', price: 199, image: 'prod-4.jpeg', category: 'beverages' },
    { id: '13', name: 'Little Millet (500 Grams)', price: 110, image: 'prod-5.jpeg', category: 'millets' },
    { id: '14', name: 'Kodo Millet (500 Grams)', price: 120, image: 'prod-6.jpeg', category: 'millets' },
    { id: '15', name: 'Foxtail Millet (500 Grams)', price: 80, image: 'prod-7.jpeg', category: 'millets' },
    { id: '16', name: 'Barnyard Millet (500 Grams)', price: 120, image: 'prod-8.jpeg', category: 'millets' },
    { id: '17', name: 'Lip Balm - Strawberry(5 Grams)', price: 140, image: 'prod-13.jpeg', category: 'personal' },
    { id: '18', name: 'Lip Balm - Beetroot(5 Grams)', price: 140, image: 'prod-13.jpeg', category: 'personal' },
    { id: '19', name: 'Loofah', price: 49, image: 'prod-2.jpeg', category: 'personal' },
    { id: '20', name: 'Bamboo Tooth Brush', price: 49, image: 'prod-8.jpeg', category: 'personal' },
    { id: '21', name: 'Pocket Comb', price: 60, image: 'prod-14.jpeg', category: 'personal' },
    { id: '22', name: 'Ayurvedic Hair Oil Mix ', price: 160, image: 'prod-2.jpeg', category: 'personal' },
    { id: '23', name: 'Eucalyptus Oil ', price: 240, image: 'prod-6.jpeg', category: 'personal' },
    { id: '24', name: 'Organic Soap (Natural Sandalwood)', price: 90, image: 'prod-10.jpeg', category: 'personal' },
    { id: '25', name: 'Organic Soap (Natural Aloevera)', price: 90, image: 'prod-10.jpeg', category: 'personal' },
    { id: '26', name: 'Herbal Shampoo (100 ML)', price: 299, image: 'prod-8.jpeg', category: 'personal' },
    { id: '27', name: 'Dual Bristled Neem Comb', price: 120, image: 'prod-14.jpeg', category: 'personal' },

  ];

  addToCart(product: any) {
    const itemWithQuantity = { ...product, quantity: 1 };
    this.cartService.addToCart(itemWithQuantity);
  }

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}
