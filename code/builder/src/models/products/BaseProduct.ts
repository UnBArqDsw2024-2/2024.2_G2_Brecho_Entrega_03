export abstract class BaseProduct {
  public id: string;
  public name: string;
  public category: string;
  public price: number;
  public condition: string;
  public description: string;
  public brand?: string;
  public defects?: string[];
  public images?: string[];
}
