function f1(){
    console.log("F1")
}
function f2(a,b)
{
    console.log("F2")
    console.log(`value of a is ${a} and ${b}`)
}
function f3(){
    console.log("F3")
}
function f4(){
    console.log("F4")
}

f1();
let timerID = setTimeout(f2,2000, 2, 3);
f3();
f4();
clearTimeout(timerID);

setTimeout( () => console.log("first message"), 8000 ); //asynchronous code with 5s delay
setTimeout( () => console.log("second message"), 5000 ); //asynchronous code with 3s delay
setTimeout( () => console.log("third message"), 3000 ); //asynchronous code with 1s delay
setTimeout( () => console.log("fourth message"), 1000 ); //asynchronous code with no delay
console.log("fifth message"); //standard synchronous code
//order of messages when running code:
// fifth message (first, synchronous therefore no delay)
// fourth message (second, even though comes before fifth message, still no delay)
// third message (prints after 1s)
// second message (prints after 3s)
// first message (prints after 5s). Timers do not stack, so total of 5s delay between first and fifth