import { BaseProduct } from "./BaseProduct";

export class ShoeProduct extends BaseProduct {
  public style: string;
  public size: number;
  public colorway: string;
  public releaseYear: number;
  public material: string[];
  public soleCondition: string;
  public boxCondition?: string;
  public authenticityCertified: boolean;
  public limitedEdition: boolean;
  public collaboration?: string;
  public insoleWear: string;
  public outsoleWear: string;
  public originalLaces: boolean;
}
