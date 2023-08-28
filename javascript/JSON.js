/*
const student = {
    name: 'Sita',
    age: 28,
    courses: ['HTML', 'CSS', 'JS'],
    occupation: null,
    Portfolio : function()
    {
        return this.name  + ": " + this.age;
    }
}
console.log( JSON.stringify(student) )

const room = {
    number: 23
}
const meetup = {
    title: "Strategy Conference",
    participants: ['Chris', 'Tina'],
    method: function()
    {
        return "some value";
    },
    toJSON()
    {
        return "meetup"
    }
}

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

console.log(meetup)
console.log(room)

//JSON.stringify(meetup); // TypeError: Converting circular structure to JSON

//console.log( JSON.stringify(meetup, ['title', 'participants']) ); // just stringify the properties in the array: {"title":"Strategy Conference","participants":["Chris","Tina"]}
console.log( JSON.stringify(meetup, 
    function(key, value) 
    {
        if (key != '' && value == meetup) return undefined // skip references to current object
        else if (typeof value == 'function') return value.toString() // stringify functions
            return value // otherwise return original value unchanged
    }, 2) ); // use 2 spaces for nicer formatting

    console.log(JSON.stringify(meetup));

*/
    const meetup = {
        title: "Strategy Conference", participants: ['Chris', 'Tina'], date: 'Mirza'
    }
    const meetupString = JSON.stringify(meetup) // convert object to string
    console.log(meetupString);
    //const meetupParsed = JSON.parse(meetupString);
    const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
        if ( !isNaN(value) ) return 0; //if valid date, create Date object
        return value;
    })
    console.log(meetupParsed) // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z }
    