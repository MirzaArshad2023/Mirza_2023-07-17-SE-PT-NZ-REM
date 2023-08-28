const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
]

for(let product of products)
{
    console.log("\n " + product.title + ":\n");
}

let typedArray = new Uint16Array([10,20,30,40]);
console.log(typedArray)
for(let i=0; i<typedArray.length; i++)
{
    console.log(typedArray[i])
}

const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}
for (let property in animalObj) { console.log(animalObj[property]); } // TypeError: animalObj is not iterable


console.log( Array.from("string") ) // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])) ) // [ 'cat', 'bat', 'sat' ]
console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])) ) 
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

function makeArray() {
    return Array.from(arguments);
}
console.log( makeArray(1, 2, 3) ); // [ 1, 2, 3 ]

let object1 = {

    name: 'Mirza',
    'Education' : 'Bachelors',
    lastName : 'Arshad'
}

console.log(object1)


let myNewMap = new Map();
myNewMap.set(1, "one");
myNewMap.set('1', "two");
myNewMap.set(true,"2");

let user ={
    1: "one",
    "1": "two"
}


console.log(myNewMap.get(true));
console.log(myNewMap.get('1'));

console.log(user[1]);

console.log(myNewMap.size)
console.log(":::::::::::MAP:::::::::::::")
for(let item of myNewMap.entries())
{
    console.log(item)
}

let mySet = new Set();

mySet.add('one');
mySet.add('one');
mySet.add('Two');
mySet.add('one');
mySet.add('one');

let myNewSet = new Set(['one','two','one','two'])
myNewSet.add('Four')
console.log(mySet.size);
console.log(myNewSet.size);
myNewSet.delete('Four');
console.log(myNewSet)

//Convert a Map to an Object.
console.log(myNewMap)
let neObj = Object.fromEntries(myNewMap);
console.log(neObj)

let User = {
    firstName: 'Mirza',
    education: 'Bachelors',
    Job: 'Teacher',
    Portfolio : function()
    {
        return this.firstName + " : " + this.education  + " : " + this.Job;
    }
}

console.log(User.Portfolio())
let secondMap = Object.entries(User)

console.log(secondMap)

let newWeakMap = new WeakMap();
newWeakMap.set(User,'User object');
newWeakMap.set(animalObj, 'Animal object')

console.log(newWeakMap.get(animalObj));
console.log(newWeakMap.has(User))
User = null;

console.log(newWeakMap.has(User))

