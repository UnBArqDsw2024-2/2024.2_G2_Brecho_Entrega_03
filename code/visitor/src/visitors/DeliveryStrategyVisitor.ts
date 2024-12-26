import { BulkyProduct } from "../models/BulkyProduct";
import { FragileProduct } from "../models/FragileProduct";
import { HeavyProduct } from "../models/HeavyProduct";
import { StandardProduct } from "../models/StandardProduct";
import { DeliveryStrategy } from "./DeliveryStrategy";
import { DeliveryVisitor } from "./DeliveryVisitor";

export class DeliveryStrategyVisitor implements DeliveryVisitor {
  visitStandardProduct(product: StandardProduct): DeliveryStrategy {
    return {
      type: "STANDARD",
      carrier: "REGULAR_POST",
      estimatedDays: 3,
      handlingInstructions: [],
      cost: this.calculateStandardDeliveryCost(product),
    };
  }

  visitHeavyProduct(product: HeavyProduct): DeliveryStrategy {
    return {
      type: "HEAVY",
      carrier: "FREIGHT_SERVICE",
      estimatedDays: 5,
      handlingInstructions: ["FORKLIFT_REQUIRED"],
      specialEquipment: ["HYDRAULIC_LIFT"],
      cost: this.calculateHeavyDeliveryCost(product),
    };
  }

  visitBulkyProduct(product: BulkyProduct): DeliveryStrategy {
    return {
      type: "BULKY",
      carrier: "SPECIALIZED_LOGISTICS",
      estimatedDays: 7,
      handlingInstructions: ["TWO_PERSON_LIFT"],
      assemblyRequired: product.needsAssembly(),
      cost: this.calculateBulkyDeliveryCost(product),
    };
  }

  visitFragileProduct(product: FragileProduct): DeliveryStrategy {
    return {
      type: "FRAGILE",
      carrier: "PREMIUM_COURIER",
      estimatedDays: 2,
      handlingInstructions: [
        "HANDLE_WITH_CARE",
        "DO_NOT_STACK",
        "FRAGILE_CONTENTS",
      ],
      insurance: true,
      cost: this.calculateFragileDeliveryCost(product),
    };
  }

  private calculateStandardDeliveryCost(product: StandardProduct): number {
    return product.getWeight() * 2 + 10;
  }

  private calculateHeavyDeliveryCost(product: HeavyProduct): number {
    return product.getWeight() * 5 + 50;
  }

  private calculateBulkyDeliveryCost(product: BulkyProduct): number {
    const volume = product.getDimensions().calculateVolume();
    return volume * 3 + 100;
  }

  private calculateFragileDeliveryCost(product: FragileProduct): number {
    return product.getWeight() * 10 + 30;
  }
}
