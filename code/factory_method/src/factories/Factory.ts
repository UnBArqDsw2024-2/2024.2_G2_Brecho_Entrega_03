import { Item } from "../models/Item";

export abstract class Factory {
  abstract createItem(name: string, price: number, description: string): Item;
}