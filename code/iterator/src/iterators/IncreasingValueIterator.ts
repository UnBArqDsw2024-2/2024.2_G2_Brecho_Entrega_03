import { IteratorInterface } from "./IteratorInterface";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";
import { Product } from "../product/Product";

export class IncreasingValueIterator implements IteratorInterface<string> {
    private index = 0;
    private sortedProducts: Product[]; 

    constructor(private readonly shoppingCart: ShoppingCart) {
        this.sortedProducts = [...this.shoppingCart.getProducts()].sort(
            (a, b) => a.getPrice() - b.getPrice()
        );
    }

    reset(): void {
        this.index = 0;
    }

    next(): IteratorResult<string> {
        if (this.index >= this.sortedProducts.length) {
            return { value: undefined, done: true }; 
        }

        const product = this.sortedProducts[this.index];
        const value = `${product.getName()} - R$ ${product.getPrice().toFixed(2)}`;
        this.index++;

        return { value, done: false };
    }
}