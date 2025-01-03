import { Shoe } from '../models/Shoe';
import { Factory } from './Factory';

export class ShoeFactory extends Factory {
    createItem(name: string, price: number, description: string): Shoe {
        return new Shoe(name, price, description);
    }
}