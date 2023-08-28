let myNewMap = new Map();
let TRUE = true;
myNewMap.set(1,"one");
myNewMap.set('1',"new one")
myNewMap.set(2,"two")
myNewMap.set(3, "three")
myNewMap.set(true, "Today was sunny day")
myNewMap.set(TRUE, "Last week was rainy")
let arrayNew = ["one","two"];
/*
console.log(myNewMap.size);
console.log(myNewMap);
console.log(myNewMap.get(1));
console.log(myNewMap.get(true));
console.log(myNewMap.get('1'));
for(let item of myNewMap.entries())
{
    console.log(item);
}

let digits = {
    1: "one",
    "1": "new one"
}
console.log(digits[1]);
/*
console.log( myNewMap.get('1') ) // second string one - gets value for matching key
console.log( myNewMap.get(2) ) // undefined - key doesn't exist so no value
console.log( myNewMap.has(1) ) // true - key does exist
console.log( myNewMap.delete(true) ) // true - removes item and returns true if successful
console.log( myNewMap )
myNewMap.clear() // removes all items from map
console.log( myNewMap ) // Map(0) {}

const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
])
for (let ingredient of recipeMap.keys()) {
    console.log(ingredient) // flour, milk, eggs, butter
}
for (let quantity of recipeMap.values()) {
    console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
}
for (let item of recipeMap) { // same as recipeMap.entries()
    console.log(item[1]) // ['flour', '1 cup'], (and so on)
}


const priceMap = new Map([
    ['banana', 1],
    ['pineapple', 2],
    ['watermelon', 5]
])

const priceObject = Object.fromEntries(priceMap)
//priceObject.watermelon = 10;
priceMap.set("watermelon", 50);
console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }
console.log(priceMap)
*/
const priceObject11 = { banana: 1, pineapple: 2, watermelon: 5 }

const priceMap11 = new Map( Object.entries(priceObject11) )
console.log(priceMap11) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
console.log(priceMap11.get('banana')) // 1