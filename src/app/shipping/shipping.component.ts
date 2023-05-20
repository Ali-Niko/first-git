import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
  imports: [NgFor, AsyncPipe, CurrencyPipe],
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
