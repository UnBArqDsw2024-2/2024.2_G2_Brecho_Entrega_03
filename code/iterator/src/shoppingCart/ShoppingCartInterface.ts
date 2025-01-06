import { IteratorInterface } from '../iterators/IteratorInterface';
import { Product } from '../product/Product';

export interface ShoppingCartInterface{
    addProduct(...products: Product[]): void;
    getProducts(): Product[];
    totalItens(): number;
    changeIterator(iterator: IteratorInterface<string>): void;
    resetIterator(): void;
}