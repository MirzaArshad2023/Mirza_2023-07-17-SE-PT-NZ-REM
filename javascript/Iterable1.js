/*
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) 
{ 
    console.log(animal); 
} // prints each animal in turn

const animalObj = { 
    name: 'tiger', 
    genus: 'panthera', 
    class: 'mammal'
}

for (let property of animalObj)
{ 
    console.log(property); 

} // TypeError: animalObj is not iterable
*/
console.log( Array.from("string new thing") ) // [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log( Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat'])) ) // [ 'cat', 'bat', 'sat' ]
console.log( Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']])) ) 
// [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

function makeArray() 
{
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
    return Array.from(arguments);
}
console.log( makeArray(1, 2, 3, 4) ); // [ 1, 2, 3 ]