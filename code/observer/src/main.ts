import { ProductCatalog } from "./models/ProductCatalog";
import { UserObserver } from "./models/UserObserver";

// Criação do catálogo de produtos
const catalog = new ProductCatalog();

// Criação de usuários observadores
const user1 = new UserObserver("Ana");
const user2 = new UserObserver("Carlos");
const user3 = new UserObserver("Beatriz");

// Usuários se inscrevem para receber notificações
catalog.subscribe(user1);
catalog.subscribe(user2);

// Adicionando produtos
catalog.addProduct("Jaqueta Vintage");
catalog.addProduct("Bolsa de Couro");

// Usuário Carlos se desinscreve
catalog.unsubscribe(user2);

// Novo produto
catalog.addProduct("Sapatos de Festa");

// Beatriz se inscreve
catalog.subscribe(user3);

// Outro produto
catalog.addProduct("Camisa Social");