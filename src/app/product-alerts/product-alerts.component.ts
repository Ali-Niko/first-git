import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

import { Product } from '../products';

@Component({
  standalone: true,
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
  imports: [NgIf],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  @Output() deleteProduct = new EventEmitter<number>();
}
