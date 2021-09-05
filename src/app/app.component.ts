import { Component, OnDestroy } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frites';

  constructor(private productService: ProductService) {
    this.productService.getAllProduct().subscribe();
  }
}
