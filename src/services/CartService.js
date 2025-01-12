import Cart from '../models/Cart.js';
import Item from '../models/Item.js';
import ItemService from './ItemService.js';

export default class CartService {
    /**
     * 
     * @param {Cart} cart 
     * @param {Item} item 
     */
    addItem(cart, item) {
        new ItemService().calculateSubtotal(item);
        cart.items.push(item);
        this.calculateTotal(cart);
    }

    /**
     * 
     * @param {Cart} cart 
     * @private
     */
    calculateTotal(cart) {
        let total = 0;
        cart.items.forEach(item => total += item.subtotal);
        cart.total = total;
    }

    /**
     * 
     * @param {Cart} cart 
     * @param {Item} item 
     */
    decreaseItemQuantity(cart, item) {
        const itemService = new ItemService();
        itemService.decreaseQuantity(item);
        if (item.subtotal) {
            cart.items[this.findItemIndex(cart, item)] = item;
            this.calculateTotal(cart);
        } else {
            this.deleteItem(cart, item);
        }
    }

    /**
     * 
     * @param {Cart} cart 
     * @param {Item} item 
     */
    deleteItem(cart, item) {
        cart.items.splice(this.findItemIndex(cart, item), 1);
        this.calculateTotal(cart);
    }
    
    /**
     * 
     * @param {Cart} cart 
     * @param {Item} item 
     * @returns {number}
     * @private
     */
    findItemIndex(cart, item) {
        return cart.items.findIndex(foundItem => item === foundItem);
    }
}