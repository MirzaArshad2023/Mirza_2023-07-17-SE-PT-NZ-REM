let car = 
{
    wheels: 4,
    steering : true,
    engine : true,
    windsheildvipers: true,
    color: "white",
    NumberOfSeats: 4,
    setbelts: 4,
    carType: "sedan",
    maxspeed: "100kms/hr",
    Drive: function()
    {
        return "Normal Drive";
    }
}

let ferrari =
{
    color: "red",
    maxspeed: "250kms/hr",
    convertible: true,
    Drive: function()
    {
        return "Sports Drive";
    }

}

let camry =
{
    color: "black",
    maxspeed: "180kms/hr",

    Drive: function()
    {
        return "Sports Drive";
    }

}

//console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(car)));

let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
//console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal))) //prints all inherited properties
let rabbit = { jumps: true };
rabbit.__proto__ = animal; // OLD WAY - explicitly inherit from animal prototype

let fastrabbit = { speed: "superfast"};
fastrabbit.__proto__ = rabbit;
/*
console.log(rabbit.eats) // true, inherits prototype properties

console.log(fastrabbit.legs)
*/
let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
jumps: { // name of custom 'own' property for rabbit object
value: true, // property descriptor to set the property value
enumerable: true // property descriptor to make this enumerable - otherwise jumps not in for...in
}
});

//console.log(Object.getOwnPropertyNames(Object.getPrototypeOf((rabbit2))));
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`)

/*
console.log(rabbit1, rabbit2) // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs) // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones*/

function Rabbit(name) { // constructor function, first letter capitalised by convention
    this.jumps = true;
    this.name = name;
    }

Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
let whiteRabbit = new Rabbit('White Rabbit')
console.log(whiteRabbit) // { jumps: true, name: 'White Rabbit' } - own properties
for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`) // all properties