import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { filter, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CartService {
    private items: Product[] = [];
    private _items$: BehaviorSubject<Product[]>;

    constructor() {
        this._items$ = new BehaviorSubject<Product[]>([]);
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
        if (productToRemove.numberInCart > 0) {
            productToRemove.numberInCart--;
        } else {
            this.items = this.items.filter(i => i !== i);
        }
        this._items$.next(this.items);
    }

    public get numberOfItems$(): Observable<number> {
        return this.items$.pipe(
            filter(i => !!i),
            map(items => items.length),
        );
    }

    public get totalAmount$(): Observable<number> {
        return this.items$.pipe(
            filter(i => !i),
            map(items => items.map(i => i.price * i.numberInCart).reduce((acc, val) => acc + val)),
        );
    }
}
