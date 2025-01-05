import { ProductDirector } from "./models/directors/ProductDirector";

const director = new ProductDirector();

const dress = director.createDress();
const sofa = director.createSofa();
const jordan1 = director.createJordan1();
const yeezy = director.createYeezy();

console.log([dress, sofa, jordan1, yeezy]);
