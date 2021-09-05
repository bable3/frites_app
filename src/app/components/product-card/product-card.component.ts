import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product!: Product;

  public numberOfItems: number = 0;
  private subscription: Subscription = new Subscription;

  constructor(private cartService: CartService) {
  }

  public ngOnInit(): void {
    this.subscription = this.cartService.numberOfItemsByProduct(this.product).pipe(
      tap(v => this.numberOfItems = v),
    ).subscribe();
  }

  public addProduct(): void {
    this.cartService.addProduct(this.product);
  }

  public removeProduct(): void {
    this.cartService.removeProduct(this.product);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
