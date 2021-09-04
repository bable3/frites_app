import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  public addProduct(): void {
    this.cartService.addProduct(this.product);
  }

  public removeProduct(): void {
    this.cartService.removeProduct(this.product);
  }
}
