import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  categories = [
    { id: 'rice', name: 'Rice & Grains' },
    { id: 'millets', name: 'Millets' },
    { id: 'spices', name: 'Spices' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'personal', name: 'Personal & Hair Care' },
  ];

  selectedCategory = 'rice';

  products = [
    { name: 'Black Rice (1kg)', price: 290, image: 'prod-1.jpeg', category: 'rice' },
    { name: 'Red Rice (1Kg)', price: 120, image: 'prod-2.jpeg', category: 'rice' },
    { name: 'Brown Rice(1kg)', price: 120, image: 'prod-3.jpeg', category: 'rice' },
    { name: 'Kerala Vadi Matta Rice(1Kg)', price: 120, image: 'prod-4.jpeg', category: 'rice' },
    { name: 'Pepper(100 Grams)', price: 160, image: 'prod-5.jpeg', category: 'spices' },
    { name: 'Cumin (100 Grams)', price: 90, image: 'prod-6.jpeg', category: 'spices' },
    { name: 'Turmeric (200 Grams)', price: 160, image: 'prod-7.jpeg', category: 'spices' },
    { name: 'Coriander (100 Grams)', price: 80, image: 'prod-8.jpeg', category: 'spices' },
    { name: 'Cinnamon (100 Grams)', price: 90, image: 'prod-1.jpeg', category: 'spices' },
    { name: 'Chilli Flakes (200 Grams)', price: 180, image: 'prod-2.jpeg', category: 'spices' },
    { name: 'Coffee Mix (200 Grams)', price: 399, image: 'prod-3.jpeg', category: 'beverages' },
    { name: 'Tea Mix (200 Grams)', price: 199, image: 'prod-4.jpeg', category: 'beverages' },
    { name: 'Little Millet (500 Grams)', price: 110, image: 'prod-5.jpeg', category: 'millets' },
    { name: 'Kodo Millet (500 Grams)', price: 120, image: 'prod-6.jpeg', category: 'millets' },
    { name: 'Foxtail Millet (500 Grams)', price: 80, image: 'prod-7.jpeg', category: 'millets' },
    { name: 'Barnyard Millet (500 Grams)', price: 120, image: 'prod-8.jpeg', category: 'millets' },
    { name: 'Lip Balm - Strawberry(5 Grams)', price: 140, image: 'prod-13.jpeg', category: 'personal' },
    { name: 'Lip Balm - Beetroot(5 Grams)', price: 140, image: 'prod-13.jpeg', category: 'personal' },
    { name: 'Loofah', price: 49, image: 'prod-2.jpeg', category: 'personal' },
    { name: 'Bamboo Tooth Brush', price: 49, image: 'prod-8.jpeg', category: 'personal' },
    { name: 'Pocket Comb', price: 60, image: 'prod-14.jpeg', category: 'personal' },
    { name: 'Ayurvedic Hair Oil Mix ', price: 160, image: 'prod-2.jpeg', category: 'personal' },
    { name: 'Eucalyptus Oil ', price: 240, image: 'prod-6.jpeg', category: 'personal' },
    { name: 'Organic Soap (Natural Sandalwood)', price: 90, image: 'prod-10.jpeg', category: 'personal' },
    { name: 'Organic Soap (Natural Aloevera)', price: 90, image: 'prod-10.jpeg', category: 'personal' },
    { name: 'Herbal Shampoo (100 ML)', price: 299, image: 'prod-8.jpeg', category: 'personal' },
    { name: 'Dual Bristled Neem Comb', price: 120, image: 'prod-14.jpeg', category: 'personal' },

  ];

  bag: any[] = [];
  bagVisible = false;

  addToCart(product: any) {
    this.bag.push(product);
    this.bagVisible = true;
    setTimeout(() => this.bagVisible = false, 3000); // hide after 3s
  }

  get filteredProducts() {
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}
