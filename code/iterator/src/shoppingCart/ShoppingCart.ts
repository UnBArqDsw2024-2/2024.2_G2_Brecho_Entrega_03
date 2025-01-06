import { DefaultIterator } from '../iterators/DefaultIterator';
import { IteratorInterface } from '../iterators/IteratorInterface';
import { Product } from '../product/Product';
import { ShoppingCartInterface } from '../shoppingCart/ShoppingCartInterface';

export class ShoppingCart implements ShoppingCartInterface{
    private products: Product[] = [];
    private iterator: IteratorInterface<string> = new DefaultIterator(this);
    
    addProduct(...products: Product[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getProducts(): Product[] {
        return this.products;
    }

    totalItens(): number {
        return this.products.length;
    }

    changeIterator(iterator: IteratorInterface<string>): void {
        this.iterator = iterator;
    }

    [Symbol.iterator](): IteratorInterface<string>{
        return this.iterator;
    }
    
    resetIterator(): void {
        this.iterator.reset();
    }
    
}