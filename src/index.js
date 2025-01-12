import CartService from './services/CartService.js';
import Cart from './models/Cart.js';
import Item from './models/Item.js';

const cart = new Cart();

const cartService = new CartService();

const item1 = new Item("Mochila reforçada", 64.99, 1);
const item2 = new Item("Caderno Universitário", 19.45, 6);
const item3 = new Item("Caneta esferográfica azul", 5.4, 3);
const item4 = new Item("Lápis preto", 1.8, 5);
const item5 = new Item("Borracha escolar", 1.5, 2);
const item6 = new Item("Apontador", 5.9, 2);
const item7 = new Item("Régua", 5.9, 2);
const item8 = new Item("Notebook Lenovo", 3499.99, 1);
const item9 = new Item("Smartphone Samsung", 648.9, 1);
const item10 = new Item("Lancheira", 29.9, 1);

cartService.addItem(cart, item1);
cartService.addItem(cart, item2);
cartService.addItem(cart, item3);
cartService.addItem(cart, item4);
cartService.addItem(cart, item5);
cartService.addItem(cart, item6);
cartService.addItem(cart, item7);
cartService.addItem(cart, item8);
cartService.addItem(cart, item9);
cartService.addItem(cart, item10);

console.log(cart);

cartService.deleteItem(cart, item4);

console.log(cart);

cartService.decreaseItemQuantity(cart, item3);

console.log(cart);

cartService.decreaseItemQuantity(cart, item8);

console.log(cart);