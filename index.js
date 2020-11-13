class Product {
    constructor(price, id, quantity){
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }

    printItem(){
        console.log(`Item ${this.id} costs $${this.price} -- ${this.quantity} left in stock.`)
    }
}

class Inventory {
    constructor(){
        this.items = {};
    }

    addItem(product){
        if(!this.items[product]){
            this.items[product] = product;
        }else {
            console.log('Product already in inventory')
        }
    }

    addQuantity(product, quantity){
        if(!this.items[product]){
            product[quantity]++;
        }
    }

    printInventory(){
        console.log( this.items);
    }
}

const table = new Product(25, 1, 3);
// table.printItem()
console.log(table)
const chair = new Product(18, 2, 5);

const store = new Inventory()
// store.printInventory()
store.addItem(table)
store.printInventory()
store.addItem(chair)
store.printInventorgity()