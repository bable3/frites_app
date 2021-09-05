import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Filter } from '../models/filter';

@Injectable({providedIn: 'root'})
export class ProductService {

    private _products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    private _filters$: BehaviorSubject<Filter[]> = new BehaviorSubject<Filter[]>([]);

    private products: Product[] = [];
    private filters: Filter[] = [];

    constructor(private httpClient: HttpClient) { 
        this.getAllProduct();
    }
    
    public get product$(): Observable<Product[]> {
        return this._products$.asObservable();
    }
    public get filter$(): Observable<Filter[]> {
        return this._filters$.asObservable();
    }

    public getAllProduct(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/assets/datas/products.json').pipe(
            tap(p => this.products = p),
            tap(p => this._products$.next(p)),
            tap(() => this.setFilters())
        );
    }

    public toggleFilter(filterToggle: Filter) {
        let index = this.filters.findIndex(f => f == filterToggle);
        this.filters[index].isActive = !this.filters[index].isActive;
        this._filters$.next(this.filters);
        const products = this.products.filter(p => this.filters.filter(f => f.isActive).map(f => f.name).includes(p.cat));
        this._products$.next(products);
    }

    private setFilters() {
        this.filters = this.products.map(p => p.cat).filter((v, i, cats) => cats.indexOf(v) === i).map(c => new Filter(c));
        this._filters$.next(this.filters);
    }
}