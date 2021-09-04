import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CartService {
    private items: Product[] = [];
    private _items$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    constructor() { }
    
    public get items$(): Observable<Product[]> {
        return this._items$.asObservable();
    }
    public addProduct(item: Product) {
        this.items.push(item);
        this._items$.next(this.items);
    }
    public removeProduct(item: Product) {
        this.items = this.items.filter(i => i !== i);
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
}
