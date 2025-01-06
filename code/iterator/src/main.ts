import { ShoppingCart } from './shoppingCart/ShoppingCart';
import { DefaultIterator } from './iterators/DefaultIterator';
import { Product } from './product/Product';
import { IncreasingValueIterator } from './iterators/IncreasingValueIterator';
import { DecreasingValueIterator } from './iterators/DecreasingValueIterator';

const shoppingCart = new ShoppingCart();
const product1 = new Product('Air Jordan 5 Retro', 800, 'Otávio Miranda', 'Good');
const product2 = new Product('Lacoste T-Clip Feminino Branco', 300, 'Gabriela Silva', 'Used');
const product3 = new Product('Camiseta Autografada Cristiano Ronaldo', 500, 'João Rocha', 'Used');

shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);

console.log('Iteração Padrão\n')

for(const product of shoppingCart){
    console.log(product);
}

shoppingCart.resetIterator();

shoppingCart.changeIterator(new IncreasingValueIterator(shoppingCart));

console.log('\nIteração Por Preço Crescente\n');

for(const product of shoppingCart){
    console.log(product);
}

shoppingCart.resetIterator();

shoppingCart.changeIterator(new DecreasingValueIterator(shoppingCart));

console.log('\nIteração Por Preço Decrescente\n');

for(const product of shoppingCart){
    console.log(product);
}