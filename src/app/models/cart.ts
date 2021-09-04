import { Product } from "./product";

export class Cart {
    items: Product[] = [];
    numberOfItems: number = 0;
    totalAmount: number =  0;
    
    constructor() {
    }
}
