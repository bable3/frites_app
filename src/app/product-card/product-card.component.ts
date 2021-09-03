import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { CartModule } from '../cart/cart.module';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() cart: CartModule;

  updateCart(way: string) {
    if (way == 'add') {
      if (!this.cart.items.includes(this.product)) {
        this.cart.items.push(this.product);
      }
      this.product.numberInCart++;
    } else if (way == 'remove' && this.product.numberInCart > 0) {
      this.product.numberInCart--;
      if (this.product.numberInCart === 0) {
        this.cart.items.splice(this.cart.items.indexOf(this.product), 1);
      }
    }
    this.cart.totalAmount = 0;
    this.cart.numberOfItems = 0;

    this.cart.items.forEach(item => {
      this.cart.totalAmount += item.price * item.numberInCart;
      this.cart.numberOfItems = item.numberInCart;

    });
    console.log(this.cart);
  }

  constructor() { }

  ngOnInit() {
  }

}
