import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Filter } from 'src/app/models/filter';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  public products$: Observable<Product[]>;
  public filters$: Observable<Filter[]>;

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.items$;
    this.filters$ = this.products$.pipe(
      map(p => p.filter((v, i, products) => products.indexOf(v) === i))
    );
  }
}
