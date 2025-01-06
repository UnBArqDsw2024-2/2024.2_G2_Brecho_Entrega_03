export class Product {
    private name: string;
    private price: number;
    private seller: string;
    private condition: string;
    
    constructor(name: string, price: number, seller: string, condition: string){
        this.name = name;
        this.price = price;
        this.seller = seller;
        this.condition = condition;
    }

    getName(): string{
        return this.name;
    }

    getPrice(): number{
        return this.price;
    }

    getSeller(): string{
        return this.seller;
    }

    getCondition(): string{
        return this.condition;
    }
}