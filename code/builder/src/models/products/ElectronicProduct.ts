import { BaseProduct } from "./BaseProduct";

export class ElectronicProduct extends BaseProduct {
  public modelNumber: string;
  public batteryLife?: string;
  public technicalSpecs: Record<string, string>;
}
