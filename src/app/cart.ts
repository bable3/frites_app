import { Product } from "./product";

export interface Cart {
    items: Product[],
    numberOfItems: number,
    totalAmount: number,
}

