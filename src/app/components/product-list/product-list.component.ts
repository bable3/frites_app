import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Filter } from 'src/app/models/filter';
import { map, tap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  public products$: Observable<Product[]>;
  public filters$: Observable<Filter[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.product$;
    this.filters$ = this.productService.filter$;
  }
}
