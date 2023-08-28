let myNeWeakMap = new WeakMap();
let newObj = {
    "1":"one"
}
myNeWeakMap.set(newObj,"one");
console.log(myNeWeakMap.get(newObj))

customer = {

    "firstname": "Mirza",
    "Company": "IOD"

}

Orders = [{orderID:1,ordername:"first"},{orderID:2,ordername:"second"},{orderID:3,ordername:"Third"}]

let customerWeakMap = new WeakMap();
customerWeakMap.set(customer, Orders);
console.log(customerWeakMap.has(customer));
customer = null;

console.log(customerWeakMap.has(customer));