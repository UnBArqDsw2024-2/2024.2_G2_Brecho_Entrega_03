import { DeliveryStrategy } from "../visitors/DeliveryStrategy";
import { DeliveryVisitor } from "../visitors/DeliveryVisitor";
import { Dimensions } from "./Dimensions";
import { Product } from "./Product";

export class StandardProduct implements Product {
  constructor(
    private id: string,
    private weight: number,
    private dimensions: Dimensions
  ) {}

  accept(visitor: DeliveryVisitor): DeliveryStrategy {
    return visitor.visitStandardProduct(this);
  }

  getWeight(): number {
    return this.weight;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }
}
