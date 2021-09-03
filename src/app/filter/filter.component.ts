import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Input() filter: any;
  @Input() activeFilters: any;
  checked: boolean;
  constructor() { }

  ngOnInit() {
    this.checked = true;
  }

  filterProducts(filter) {
    if (this.activeFilters.includes(filter)) {
      this.activeFilters.splice(this.activeFilters.indexOf(filter), 1);
    } else {
      this.activeFilters.push(filter);
    }
    console.log(this.activeFilters);
  }

}
