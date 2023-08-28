const mj = ['Michael', 'Jordan','John','smith','brian','ryan']
const [mjFirst, mjLast,,mjfourth,,mjsixth] = mj //destructure (unpack) array on right into separate variables on left

console.log(mjFirst, mjLast,mjfourth, mjsixth) // Michael Jordan

const [First, second, third] = "abc" //strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]) //Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
//now we have 6 individual variables: a, b, c, one, two, three, type, quantity
console.log(First, second, third, one, two, three, type, quantity) // a b c 1 2 3 apple 4

const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King;Charles".split(';'); //store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
//key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
    console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]

console.log(student) // Andrew
console.log(teacher) // James


const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
console.log( jcTitles.length ) // 4

const [firstStudent, secondStudent = "Random"] = ["Mirza"]

console.log(firstStudent)
console.log(secondStudent)

// property names (keys) on right are matched to variable names on left
let { width, measure = 50, height, title} = { title: 'My Component', height: 100, width: 200 } 
console.log(measure, height, title) // 200 100 My Component