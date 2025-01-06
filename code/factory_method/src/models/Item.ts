export interface Item {
    name: string;
    price: number;
    description: string;
    displayInfo(): void;
    taxAmount?: (price: number) => number;
}