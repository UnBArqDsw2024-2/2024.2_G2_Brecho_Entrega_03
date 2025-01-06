import { CartComponent } from "../interfaces/CartComponent";
import Big from "big.js";

export class CartBundle implements CartComponent {
  private items: CartComponent[] = [];

  constructor(private bundleName: string) {}

  add(item: CartComponent): void {
    this.items.push(item);
  }

  remove(item: CartComponent): void {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  getTotal(): Big {
    return this.items.reduce(
      (sum, item) => sum.add(item.getTotal()),
      new Big(0)
    );
  }
  getShippingPrice(): Big {
    return this.items.reduce(
      (sum, item) => sum.add(item.getShippingPrice()),
      new Big(0)
    );
  }
  getPrice(): Big {
    return this.items.reduce(
      (sum, item) => sum.add(item.getPrice()),
      new Big(0)
    );
  }

  getDescription(): string {
    return `${this.bundleName}:[${this.items
      .map((item) => item.getDescription())
      .join(", ")}]`;
  }

  getQuantity(): number {
    return this.items.length;
  }
}
