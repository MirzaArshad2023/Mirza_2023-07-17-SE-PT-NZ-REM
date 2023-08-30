/*
// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
    if (Math.random() > 0.5) setTimeout(() => resolve('Random number ok'), 250) // success
    else setTimeout(() => reject('Random number too low'), 250) // failure
})
promise // consume the promise by responding to outcomes when they happen
    .finally(() => console.log('Wait is over, promise has settled.')) // always prints
    .then((result) => console.log('Success! ' + result)) // prints resolve msg
    .catch((error) => console.log('Error! ' + error)) // prints reject msg

*/

/*
new Promise((resolve, reject) => {
    resolve(10); // resolve promise successfully with value of 10
}).then((result) => { // when resolve is called, it triggers .then()
    console.log(result); return result + 10; // values returned from .then() are also promises
}).then((result) => { // so we can chain them together
    console.log(result); return result + 10; // increasing result by 10 each time
}).then((result) => { // so we can chain them together
    console.log(result); return result + 10; // increasing result by 10 each time
});
        // prints 10, 20, 30
*/

new Promise((resolve, reject) => setTimeout(() => resolve(10), 100)
).then((result) => { // promise handler function inside .then()
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
}).then((result) => { // can explicitly return new promises
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
}).then((result) => { // which use the results of previously resolved promises in the chain
    console.log(result);
    return new Promise((resolve, reject) => setTimeout(() => resolve(result + 10), (result + 10) * 10));
}).then((result) =>{
    console.log(result);
});
        // prints 10, 20, 30, but with 100, 200 and 300ms delays in between