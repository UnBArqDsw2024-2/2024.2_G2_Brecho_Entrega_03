import { IteratorInterface } from "./IteratorInterface";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";

export class DefaultIterator implements IteratorInterface<string>{
    private index = 0;

    constructor(private readonly shoppingCart: ShoppingCart){}
    
    reset(): void {
        this.index = 0;
    }


    next(): IteratorResult<string> {
        if (this.index >= this.shoppingCart.totalItens()) {
            return { value: undefined, done: true }; 
        }

        const product = this.shoppingCart.getProducts()[this.index];
        const value = `${product.getName()} - R$ ${product.getPrice().toFixed(2)}`;
        this.index++;

        return { value, done: false };
    }
}