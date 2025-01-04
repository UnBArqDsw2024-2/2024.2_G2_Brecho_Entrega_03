import { DeliveryStrategy } from "../visitors/DeliveryStrategy";
import { DeliveryVisitor } from "../visitors/DeliveryVisitor";
import { Dimensions } from "./Dimensions";
import { Product } from "./Product";

export class HeavyProduct implements Product {
  constructor(
    private id: string,
    private weight: number,
    private dimensions: Dimensions,
    private requiresForklift: boolean = true
  ) {}

  accept(visitor: DeliveryVisitor): DeliveryStrategy {
    return visitor.visitHeavyProduct(this);
  }

  getWeight(): number {
    return this.weight;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }

  needsForklift(): boolean {
    return this.requiresForklift;
  }
}
