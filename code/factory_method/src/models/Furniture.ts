import { Item } from './Item';

export class Furniture implements Item {
    name: string;
    price: number;
    description: string;
    taxPercentage: number = 8;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    displayInfo(): void {
        console.log(`Furniture Item: ${this.name.toUpperCase()}`);
        console.log(`Price: $${this.price + this.taxAmount(this.price)}`);
        console.log(`Description: ${this.description}`);
        console.log(`Tax percentage: ${this.taxPercentage}%`);
    }

    taxAmount(price:number): number {
        return price * this.taxPercentage/100;
    }
}