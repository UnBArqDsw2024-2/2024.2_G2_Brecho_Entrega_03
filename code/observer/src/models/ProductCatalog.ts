import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class ProductCatalog implements Subject {
  private observers: Observer[] = [];
  private newProduct: string | null = null;

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(): void {
    this.observers.forEach(observer =>
      observer.update(`Novo produto adicionado: ${this.newProduct}`)
    );
  }

  addProduct(product: string): void {
    this.newProduct = product;
    console.log(`Produto "${product}" foi adicionado ao catálogo.`);
    this.notifyObservers();
  }
}