import { ClothingFactory } from './src/factories/ClothingFactory';
import { FurnitureFactory } from './src/factories/FurnitureFactory';
import { ShoeFactory } from './src/factories/ShoeFactory';


const clothingFactory = new ClothingFactory();
const furnitureFactory = new FurnitureFactory();
const shoeFactory = new ShoeFactory();

const tShirt = clothingFactory.createItem('T-Shirt', 25, 'A cool cotton t-shirt');
const sofa = furnitureFactory.createItem('Sofa', 300, 'A comfy 3-seater sofa');
const shoe = shoeFactory.createItem('Air Nike', 50, 'A pair of running shoes');

tShirt.displayInfo();
console.log("\n");
sofa.displayInfo();
console.log("\n");  
shoe.displayInfo();
console.log("\n");