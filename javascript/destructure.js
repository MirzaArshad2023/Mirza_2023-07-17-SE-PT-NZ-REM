const [a, b, c] = "abc" //strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]) //Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
//now we have 6 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4


const myNewArray = ["first","Second",456,{name:'Mirza',education:'Bachelors'}];

const [position, ,grade, student] = myNewArray;

console.log(position,grade,student);

const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); //store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

let databaseString = "Mirza;IOD;Bachelors";

let Teacher = {};

[Teacher.name, Teacher.Company, Teacher.Education] = databaseString.split(';')
console.log(Teacher)

const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
//key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
    console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95 ...
}


let student1 = 'James', teacher = 'Andrew';
[student1, teacher] = [teacher, student]

console.log(student1) // Andrew
console.log(teacher) // James


const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log( jcTitles.length ) // 4


const [one11,two11,three11=4, four=6] = ['1','2'];

console.log(one11,two11,three11,four)

function SpecialMultiply(x,y,z=1)
{
    return x * y * z;
}

console.log(SpecialMultiply(1,2));

let options = { width: 200, height: 100, title: 'My Component'}
let { title, ...rest} = options
console.log(title) // My Component
console.log(rest) // { width: 200, height: 100 }