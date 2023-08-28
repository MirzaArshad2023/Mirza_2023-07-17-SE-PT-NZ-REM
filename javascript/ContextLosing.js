/*
let User ={
    
    get firstName()
    {
        return this._firstName || 'Mirza'
    },
    Print : function()
    {
        let c = 10;
        console.log(`firstName is ${this.firstName}`)
        
    }
}
console.log(User.firstName);
User.firstName = 'Bob'
console.log(User.firstName);
/*User.Print();
let bindedContextPrint = User.Print.bind(User);
setTimeout(bindedContextPrint,2000)


function multiply(a, b)
{
    return a * b;
}
const triple = multiply.bind(null, 3, 5); //context is not needed, binds 3 as first argument a
console.log( triple() ) // a is 3 (from bind), b is 5 (from function call), result is 15

// object with both data properties and accessor properties
const jackBlack = {
    firstName: 'Jack',
    surname: 'Black',
    dateOfBirth: new Date('1969-08-28'),
    get fullName() { // now we can do jackBlack.fullName and it will work it out
        return this.firstName + ' ' + this.surname;
    },
    get age() { // accessor will work out current age based on birthday
        const today = new Date();
        return today.getFullYear() - this.dateOfBirth.getFullYear();
    }
}
jackBlack.age = 44 // not writable (no setter), won’t work
console.log(jackBlack.fullName) // Jack Black
console.log(jackBlack.age) // 54 (currently) - no setter so change to 44 doesn't work
for (let prop in jackBlack) console.log(`${prop} is ${jackBlack[prop]}`) // enumerable props
    // includes firstName, surname, dateofBirth, fullName and age
*/
function Actor(name, birthday) {
    this.name = name;
    
    this.birthday = birthday;
    // when using the defineProperty method to create properties,
    // configurable/writable/enumerable default to false
    Object.defineProperty(this, 'age', {
        get() {
            const today = new Date();
            return today.getFullYear() - this.birthday.getFullYear()
        },
        enumerable: true
    })
}
const sean = new Actor('Sean Connery', new Date('1930-08-25'))
sean.age = 100 // not writable, has no effect
console.log(sean.age) // 93 (currently)
for (let prop in sean) console.log(`${prop} is ${sean[prop]}`) // only name and birthday, not age

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: true,
  enumerable: true
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1);
// Expected output: 42

for (let prop in object1) console.log(`${prop} is ${object1[prop]}`) // only name and birthday, not age
