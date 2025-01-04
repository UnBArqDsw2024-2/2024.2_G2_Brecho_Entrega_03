import { DeliveryStrategy } from "../visitors/DeliveryStrategy";
import { DeliveryVisitor } from "../visitors/DeliveryVisitor";
import { Dimensions } from "./Dimensions";
import { Product } from "./Product";

export class FragileProduct implements Product {
  constructor(
    private id: string,
    private weight: number,
    private dimensions: Dimensions,
    private handlingInstructions: string[] = []
  ) {}

  accept(visitor: DeliveryVisitor): DeliveryStrategy {
    return visitor.visitFragileProduct(this);
  }

  getWeight(): number {
    return this.weight;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }

  getHandlingInstructions(): string[] {
    return this.handlingInstructions;
  }
}
