import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CartService {
    private items: Product[];
    private _items$: BehaviorSubject<Product[]>;
    constructor() {
        this.items = this.products;
        this._items$ = new BehaviorSubject<Product[]>(this.products);
     }
    
    public get items$(): Observable<Product[]> {
        return this._items$.asObservable();
    }
    public addProduct(item: Product) {
        const productToAdd = this.items.find(i => i === item);
        if(productToAdd != null) {
            productToAdd.numberInCart++;
        } else {
            item.numberInCart = 1;
            this.items.push(item);
        }
        this._items$.next(this.items);
    }
    public removeProduct(item: Product) {
        if (this.items.length <= 0) {
            return;
        }
        const productToRemove = this.items.find(i => i === item);
        if (productToRemove == null) {
            return;
        }
        if (productToRemove.numberInCart > 1) {
            productToRemove.numberInCart--;
        } else {
            this.items = this.items.filter(i => i !== i);
        }
        this._items$.next(this.items);
    }
    public get numberOfItems$(): Observable<number> {
        return this.items$.pipe(
            map(items => items.length),
        );
    }
    public get totalAmount$(): Observable<number> {
        return this.items$.pipe(
            map(items => items.map(i => i.price * i.numberInCart).reduce((acc, val) => acc + val)),
        );
    }

    private products: Product[] = [
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
    
}
