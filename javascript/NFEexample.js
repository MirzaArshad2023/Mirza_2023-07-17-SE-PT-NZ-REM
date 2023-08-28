

let sayHi = function sayHiFunc(who) { // NFE, internal name can be used below
    if (who) {
        console.log(`Hi, ${who}!`);
    } else {
        sayHiFunc('guest') // no more errors here
    }
}
sayHi('David') // works, prints Hi, David!
const guestWelcome = sayHi
guestWelcome() // works, prints Hi, guest!
sayHi = null
guestWelcome() // works, prints Hi, guest! because the NFE reference still exists