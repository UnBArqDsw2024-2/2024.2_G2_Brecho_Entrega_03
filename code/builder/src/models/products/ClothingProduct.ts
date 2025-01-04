import { BaseProduct } from "./BaseProduct";

export class ClothingProduct extends BaseProduct {
  public color: string;
  public size: string;
  public model: string;
  public dimensions: {
    bust: number;
    waist: number;
    hip: number;
  };
  public material: string[];
  public genre: string;
  public recommendedFor: string;
  public weather: string;
}
