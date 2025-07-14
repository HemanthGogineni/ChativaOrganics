import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, RouterModule]
})
export class MenuComponent {}
