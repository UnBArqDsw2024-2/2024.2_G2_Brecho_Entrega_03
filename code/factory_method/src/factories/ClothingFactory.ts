import { Clothing } from '../models/Clothing';
import { Factory } from './Factory';

export class ClothingFactory implements Factory{
    createItem(name: string, price: number, description: string): Clothing {
        return new Clothing(name, price, description);
    }
}
