import { Component, Input, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent {
  @Input() filter?: Filter;
}
