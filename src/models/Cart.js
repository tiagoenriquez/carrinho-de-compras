import Item from './Item.js';

export default class Cart {
    /**
     * @type {Item[]}
     */
    items;

    /**
     * @type {number}
     */
    total;

    constructor() {
        this.items = [];
        this.total = 0;
    }
}