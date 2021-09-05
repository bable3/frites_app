import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { filter, map, tap } from 'rxjs/operators';
import { ProductCommand } from '../models/product-command';

@Injectable({providedIn: 'root'})
export class CartService {
    private items: ProductCommand[] = [];
    private _items$: BehaviorSubject<ProductCommand[]>;

    constructor() {
        this._items$ = new BehaviorSubject<ProductCommand[]>([]);
    }
    
    public get items$(): Observable<ProductCommand[]> {
        return this._items$.asObservable();
    }

    public numberOfItemsByProduct(item: Product): Observable<number> {
        return this.items$.pipe(
            map(items =>  {
                const index = items.findIndex(i => i.name === item.name);
                return index >= 0 ? items[index].numberOfItems : 0;
            })
        )
    }

    public addProduct(item: Product): void {
        const index = this.items.findIndex(i => i.name === item.name);
        if(index >= 0) {
            this.items[index].numberOfItems++;
        } else {
            this.items.push(new ProductCommand(item));
        }
        this._items$.next(this.items);
    }

    public removeProduct(item: Product): void {
        if (this.items.length <= 0) {
            return;
        }
        const index = this.items.findIndex(i => i.name === item.name);
        if (index < 0) {
            return;
        }
        if (this.items[index].numberOfItems > 0) {
            this.items[index].numberOfItems--;
        } else {
            this.items = this.items.filter(i => i !== i);
        }
        this._items$.next(this.items);
    }

    public get totalItems$(): Observable<number> {
        return this.items$.pipe(
            filter(i => !!i),
            map(items => items.length),
        );
    }

    public get totalAmount$(): Observable<number> {
        return this.items$.pipe(
            map(items => items.length > 0 ? items.map(i => i.price * i.numberOfItems).reduce((acc, val) => acc + val) : 0),
        );
    }
}
