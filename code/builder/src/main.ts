import { ProductDirector } from "./models/directors/ProductDirector";

const director = new ProductDirector();

const phone = director.createSmartphone();
const sofa = director.createSofa();
const jordan1 = director.createJordan1();
const yeezy = director.createYeezy();

console.log([phone, sofa, jordan1, yeezy]);
