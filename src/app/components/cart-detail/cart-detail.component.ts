import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.sass']
})
export class CartDetailComponent {
  public expand: boolean = false;
  public totalAmount$ : Observable<number>;

  constructor(public cartService: CartService) {
    this.totalAmount$ = this.cartService.totalAmount$;
  }
}
