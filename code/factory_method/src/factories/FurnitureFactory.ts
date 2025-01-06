import { Furniture } from '../models/Furniture';
import { Factory } from './Factory';

export class FurnitureFactory extends Factory {
    createItem(name: string, price: number, description: string): Furniture {
        return new Furniture(name, price, description);
    }
}