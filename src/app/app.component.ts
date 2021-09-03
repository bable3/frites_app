import { Component } from '@angular/core';
import { CartModule } from './cart/cart.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frites';

  cart: CartModule = {
    items: [],
    numberOfItems: 0,
    totalAmount: 0,
  };
}
