import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightCardDirective } from './highlight-card';

export interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HighlightCardDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  product: Product = {
    name: 'Wireless Headphones',
    price: 250,
    isAvailable: true
  };

  imageUrl: string = 'https://picsum.photos/200/150';

  toggleAvailability(): void {
    this.product.isAvailable = !this.product.isAvailable;
  }
}