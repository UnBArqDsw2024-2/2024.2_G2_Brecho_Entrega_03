import { ClothingFactory } from './src/factories/ClothingFactory';
import { FurnitureFactory } from './src/factories/FurnitureFactory';

const clothingFactory = new ClothingFactory();
const furnitureFactory = new FurnitureFactory();

const tShirt = clothingFactory.createItem('T-Shirt', 25, 'A cool cotton t-shirt');
const sofa = furnitureFactory.createItem('Sofa', 300, 'A comfy 3-seater sofa');

tShirt.displayInfo();
console.log("\n");
sofa.displayInfo();
console.log("\n");