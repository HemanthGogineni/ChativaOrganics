import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CartComponent } from '../../pages/cart/cart.component';
import { CartService } from '../../pages/cart/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


declare var bootstrap: any; // if not using types for bootstrap

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class MenuComponent {
  cartCount = 0;
  searchText: string = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => this.cartCount = count);
  }

  onSearch(): void {
    console.log('Search for:', this.searchText);
    if (this.searchText.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchText } });
    }
  }
}
