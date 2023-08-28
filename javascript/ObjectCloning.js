let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let rabbit = { jumps: true };
Object.setPrototypeOf(rabbit, animal);

let clonedRabbit = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit))

console.log(clonedRabbit);

//for(let prop in clonedRabbit)
  //  console.log(`Prop ${prop} is ${clonedRabbit[prop]}`)

    let rabbit2Prot = Object.getPrototypeOf(clonedRabbit);

    console.log(rabbit2Prot);