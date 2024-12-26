import { ClothingProduct } from "../products/ClothingProduct";
import { BaseProductBuilder } from "./BaseProductBuilder";

export class ClothingBuilder extends BaseProductBuilder<ClothingProduct> {
  constructor() {
    super();
    this.reset();
  }

  reset(): void {
    this.product = new ClothingProduct();
  }

  setColor(color: string): this {
    this.product.color = color;
    return this;
  }

  setSize(size: string): this {
    this.product.size = size;
    return this;
  }

  setModel(model: string): this {
    this.product.model = model;
    return this;
  }

  setDimensions(bust: number, waist: number, hip: number): this {
    this.product.dimensions = { bust, waist, hip };
    return this;
  }

  setMaterial(material: string[]): this {
    this.product.material = material;
    return this;
  }

  setGenre(genre: string): this {
    this.product.genre = genre;
    return this;
  }

  setRecommendedFor(recommendedFor: string): this {
    this.product.recommendedFor = recommendedFor;
    return this;
  }

  setWeather(weather: string): this {
    this.product.weather = weather;
    return this;
  }

  build(): ClothingProduct {
    this.validateBaseProduct();
    this.validateClothing();
    const result = this.product;
    this.reset();
    return result;
  }

  private validateClothing(): void {
    if (!this.product.color || !this.product.size || !this.product.model) {
      throw new Error("Missing required clothing fields: color, size, or model");
    }
    if (!this.product.dimensions || !this.product.material) {
      throw new Error("Missing required clothing fields: dimensions or material");
    }
  }
}