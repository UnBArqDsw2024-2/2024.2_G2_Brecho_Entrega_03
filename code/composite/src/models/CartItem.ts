import Big from "big.js";
import { CartComponent } from "../interfaces/CartComponent";
import { Dimensions } from "../interfaces/Dimensions";

export class CartItem implements CartComponent {
  constructor(
    private product: string,
    private price: number,
    private dimensions: Dimensions
  ) {}

  getTotal(): Big {
    return this.getPrice().add(this.getShippingPrice());
  }
  getShippingPrice(): Big {
    // Assuming a flat rate of R$0.50 per cubic centimeter
    return new Big(this.dimensions.calculateVolume() * 0.5);
  }
  getPrice(): Big {
    return new Big(this.price);
  }

  getDescription(): string {
    return `${this.product}`;
  }
}
