import { Component, Input, OnInit } from '@angular/core';
import { CartModule } from '../cart/cart.module';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.sass']
})
export class CartDetailComponent implements OnInit {
  @Input() cart: CartModule;
  expand: boolean;
  constructor() {
    this.expand = false
  }

  ngOnInit() {
  }

}
