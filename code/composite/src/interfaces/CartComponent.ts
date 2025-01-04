import Big from "big.js";

export interface CartComponent {
  getTotal(): Big;
  getShippingPrice(): Big;
  getPrice(): Big;
  getDescription(): string;
}
