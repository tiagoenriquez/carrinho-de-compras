export default class Item {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {number}
     */
    price;

    /**
     * @type {number}
     */
    quantity;

    /**
     * @type {number}
     */
    subtotal;

    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @param {number} quantity 
     */
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.subtotal = price * quantity;
    }
}