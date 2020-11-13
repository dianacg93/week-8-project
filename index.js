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
        if(!this.items[product.id]){
            this.items[product.id] = product;
        }else {
            console.log('Product already in inventory')
        }
    }

    removeItem(product){
        if(this.items[product.id]){
            delete this.items[product.id];
        }else {
            console.log("Product does not exist in inventory")
        }
    }

    printInventory(){
        if(Object.keys(this.items).length == 0){
            console.log('the inventory is empty');
        }else {
            console.log(this.items);
        }
    }
}

const table = new Product(25, 1, 3);
const chair = new Product(18, 2, 5);
const umbrella = new Product(3, 3, 10);
const pen = new Product(2, 4, 50);
const headphones = new Product(40, 5, 5);

const store = new Inventory();

store.printInventory()
store.addItem(table)
store.printInventory()
store.addItem(chair)
store.printInventory()
store.removeItem("book")
store.addItem(umbrella)
store.printInventory();
store.addItem(pen)
store.printInventory();
store.addItem(headphones)
store.printInventory();
store.removeItem(headphones)
store.printInventory();
