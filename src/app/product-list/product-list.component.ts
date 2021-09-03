import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartModule } from '../cart/cart.module';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  @Input() cart: CartModule;

  products: Product[] = [
    {
      name: 'Petite Frites',
      price: 1.1,
      cat: "Frites",
      numberInCart: 0
    },
    {
      name: 'Moyenne Frites',
      price: 2,
      cat: "Frites",
      numberInCart: 0
    },
    {
      name: 'Grande Frites',
      price: 3,
      cat: "Frites",
      numberInCart: 0
    },
    {
      name: 'Hamburger',
      price: 4,
      cat: "Viandes",
      numberInCart: 0
    },
    {
      name: 'Fricadelle',
      price: 1,
      cat: "Viandes",
      numberInCart: 0
    },
    {
      name: 'Brazil',
      price: 2,
      cat: "Sauces",
      numberInCart: 0
    },
    {
      name: 'Géant',
      price: 1,
      cat: "Sauces",
      numberInCart: 0
    },
    {
      name: 'BBQ',
      price: 1,
      cat: "Sauces",
      numberInCart: 0
    },
    {
      name: 'Mayo',
      price: 2,
      cat: "Sauces",
      numberInCart: 0
    },
  ];

  filters = [];
  activeFilters = [];


  constructor() { }

  ngOnInit() {
    this.products.forEach((product) => {
      if (!this.filters.includes(product.cat)) {
        this.filters.push(product.cat);
        this.activeFilters.push(product.cat);
      }
    });
    console.log(this.filters)
  }

}
