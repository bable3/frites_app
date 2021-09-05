import { Product } from "./product";

export class ProductCommand extends Product {
    public numberOfItems: number = 0;

    constructor(product: Product) {
        super();
        this.cat = product.cat;
        this.name = product.name;
        this.price = product.price;
        this.numberOfItems = 1;
    }
}