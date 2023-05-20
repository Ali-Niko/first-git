import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [NgFor, RouterLink, ReactiveFormsModule],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearCard();
    console.warn('your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
