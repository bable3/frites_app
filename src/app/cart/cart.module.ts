import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})


/*
* ici j'ai qqchose que je ne comprends pas ... je pense qu'il y'a un moyen d'update calculate amount
* à chaque fois...
* à mon avis il ne passe pas tout le temps par le constructeur ce qui me parait logique ...
*/
export class CartModule {
  items: Product[];
  numberOfItems: number;
  totalAmount: number;

  constructor(items, numberOfItems, totalAmount) {
    this.items = items;
    this.numberOfItems = this.items.length;
    this.totalAmount = this.totalAmount;

    //this.totalAmount = calculateAmount(this.items);
  }
}
/*
function calculateAmount(items) {
  var amount: number = 0;
  items.forEach(item => {
    amount += item.price * item.numberInCart;
  });
  return amount;
}
*/