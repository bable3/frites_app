import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.sass']
})
export class CartDetailComponent {
  public expand: boolean = false;
  public totalAmount: number = 0;
  private subscription: Subscription = new Subscription;

  constructor(public cartService: CartService) {
    this.subscription = this.cartService.totalAmount$.pipe(
      tap(t => this.totalAmount = t)
    ).subscribe();
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
