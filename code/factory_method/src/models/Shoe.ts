import { Item } from './Item';

export class Shoe implements Item {
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    displayInfo(): void {
        console.log(`Shoe Item: ${this.name.toUpperCase()}`);
        console.log(`Price: $${this.price}`);
        console.log(`Description: ${this.description}`);
        console.log(`Tax percentage: None`);
    }
}