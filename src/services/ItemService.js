import Item from '../models/Item.js';

export default class ItemService {
    /**
     * 
     * @param {Item} item 
     */
    calculateSubtotal(item) {
        item.subtotal = item.price * item.quantity;
    }

    /**
     * 
     * @param {Item} item 
     */
    decreaseQuantity(item) {
        item.quantity--;
        this.calculateSubtotal(item);
    }
}