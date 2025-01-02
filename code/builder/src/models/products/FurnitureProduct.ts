import { BaseProduct } from "./BaseProduct";

export class FurnitureProduct extends BaseProduct {
  public style: string;
  public material: string;
  public dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  public weight: number;
  public assembly: boolean;
  public upholsteryType?: string;
}
