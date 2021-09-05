import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {
  @Input() filter?: Filter;

  constructor(private productService: ProductService) {}

  public toggleFilter(): void {
    if (!this.filter) {
      return;
    }
    this.productService.toggleFilter(this.filter);
  }
}
