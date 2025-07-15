import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
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
    { name: 'Black Rice', price: 19, oldPrice: 29, image: 'prod-1.jpeg', category: 'rice' },
    { name: 'Red Rice', price: 19, oldPrice: 29, image: 'prod-2.jpeg', category: 'rice' },
    { name: 'Brown Rice', price: 19, oldPrice: 29, image: 'prod-3.jpeg', category: 'rice' },
    { name: 'Kerala Vadi Matta Rice', price: 19, oldPrice: 29, image: 'prod-4.jpeg', category: 'rice' },
    { name: 'Pepper', price: 19, oldPrice: 29, image: 'prod-5.jpeg', category: 'spices' },
    { name: 'Cumin', price: 19, oldPrice: 29, image: 'prod-6.jpeg', category: 'spices' },
    { name: 'Turmeric', price: 19, oldPrice: 29, image: 'prod-7.jpeg', category: 'spices' },
    { name: 'Coriander', price: 19, oldPrice: 29, image: 'prod-8.jpeg', category: 'spices' },
    { name: 'Cinnamon', price: 19, oldPrice: 29, image: 'prod-1.jpeg', category: 'spices' },
    { name: 'Chilli Flakes', price: 19, oldPrice: 29, image: 'prod-2.jpeg', category: 'spices' },
    { name: 'Coffee Mix', price: 19, oldPrice: 29, image: 'prod-3.jpeg', category: 'beverages' },
    { name: 'Tea Mix', price: 19, oldPrice: 29, image: 'prod-4.jpeg', category: 'beverages' },
    { name: 'Little Millet', price: 19, oldPrice: 29, image: 'prod-5.jpeg', category: 'millets' },
    { name: 'Kodo Millet', price: 19, oldPrice: 29, image: 'prod-6.jpeg', category: 'millets' },
    { name: 'Foxtail Millet', price: 19, oldPrice: 29, image: 'prod-7.jpeg', category: 'millets' },
    { name: 'Barnyard Millet', price: 19, oldPrice: 29, image: 'prod-8.jpeg', category: 'millets' },
    { name: 'Lip Balm', price: 19, oldPrice: 29, image: 'prod-13.jpeg', category: 'personal' },
    { name: 'Ioofah', price: 19, oldPrice: 29, image: 'prod-2.jpeg', category: 'personal' },
    { name: 'Tooth Brush', price: 19, oldPrice: 29, image: 'prod-8.jpeg', category: 'personal' },
    { name: 'Pocket Comb', price: 19, oldPrice: 29, image: 'prod-14.jpeg', category: 'personal' },
    { name: 'Ayurvedic Mix', price: 19, oldPrice: 29, image: 'prod-2.jpeg', category: 'personal' },
    { name: 'Eucalyptus Oil', price: 19, oldPrice: 29, image: 'prod-6.jpeg', category: 'personal' },
    { name: 'Organic Soaps', price: 19, oldPrice: 29, image: 'prod-10.jpeg', category: 'personal' },
    { name: 'Herbal Shampoo', price: 19, oldPrice: 29, image: 'prod-8.jpeg', category: 'personal' },
    { name: 'Dual Bristled Neem Comb Shampoo', price: 19, oldPrice: 29, image: 'prod-14.jpeg', category: 'personal' },


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
