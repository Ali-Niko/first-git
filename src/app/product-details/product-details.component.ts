import { Component, OnInit } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  standalone: true,
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  imports: [NgIf, CurrencyPipe],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, public cartService: CartService) {}

  // anyName(product: Product) {        //name can be anything  = addToCart   //private
  //   this.cartService.addToCart(product);
  //   alert('Your product has been added to the cart!');
  // }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
