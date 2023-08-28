/*let counter = 0;
let tickId = setInterval(() => {
    counter++;
    console.log('tick')  // 'tick' every 2s  
    if (counter == 10)
        clearInterval(tickId);
}, 100);
//setTimeout( () => clearInterval(tickId), 10*1000 ) // after 10s ticking stops
*/
function repeatTimeout(delay, limit) {
    let counter = 1;
    // setTimeout only happens once, so we don't need the reference to cancel it
    setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
        console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
        // but we do need to call setTimeout recursively so that it repeats executing the function
        if (current < limit) setTimeout(repeatThis, delay, current + 1) //repeat if limit not reached
    }, delay, counter);
}
repeatTimeout(2000, 10);