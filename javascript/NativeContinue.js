//define our own join() function for objects
const obj = {
    0: "Hello",
    1: "world",
    length: 2, // needed for join to work
    };
    //obj.merge = Array.prototype.join; // adds a join function to THIS object that uses Array .join()
    Object.prototype.merge = Array.prototype.join; // adds a join function to ALL objects
    console.log(obj.merge(',')); // Hello,world

    let obj2 = {

        0: "Mirza",
        1: "baig",
        length: 2
    }
    obj2.prototype = obj;

    console.log(obj2.merge('#'))