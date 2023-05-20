import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [NgFor, NgIf, ProductAlertsComponent, RouterLink],
})
export class ProductListComponent {
  products = products;

  share() {
    alert('You have shared this product with your Friend');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale!');
  }

  onDelete(productId: number) {
    this.products = this.products.filter((T) => T.id !== productId); //false = delete all
  }
}
