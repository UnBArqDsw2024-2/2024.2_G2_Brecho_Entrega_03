import { ShoeProduct } from "../products/ShoeProduct";
import { BaseProductBuilder } from "./BaseProductBuilder";

export class ShoeBuilder extends BaseProductBuilder<ShoeProduct> {
  constructor() {
    super();
    this.reset();
  }

  reset(): void {
    this.product = new ShoeProduct();
  }

  setStyle(style: string): this {
    this.product.style = style;
    return this;
  }

  setSize(size: number): this {
    this.product.size = size;
    return this;
  }

  setColorway(colorway: string): this {
    this.product.colorway = colorway;
    return this;
  }

  setReleaseYear(year: number): this {
    this.product.releaseYear = year;
    return this;
  }

  setMaterials(materials: string[]): this {
    this.product.material = materials;
    return this;
  }

  setConditionDetails(
    soleCondition: string,
    boxCondition: string,
    insoleWear: string,
    outsoleWear: string
  ): this {
    this.product.soleCondition = soleCondition;
    this.product.boxCondition = boxCondition;
    this.product.insoleWear = insoleWear;
    this.product.outsoleWear = outsoleWear;
    return this;
  }

  setAuthenticity(certified: boolean): this {
    this.product.authenticityCertified = certified;
    return this;
  }

  setEditionDetails(limitedEdition: boolean, collaboration?: string): this {
    this.product.limitedEdition = limitedEdition;
    this.product.collaboration = collaboration;
    return this;
  }

  setOriginalLaces(hasOriginalLaces: boolean): this {
    this.product.originalLaces = hasOriginalLaces;
    return this;
  }

  build(): ShoeProduct {
    this.validateBaseProduct();
    this.validateShoe();
    const result = this.product;
    this.reset();
    return result;
  }

  private validateShoe(): void {
    if (!this.product.size || !this.product.style || !this.product.colorway) {
      throw new Error("Missing required shoe fields");
    }
  }
}
