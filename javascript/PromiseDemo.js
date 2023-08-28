let MyPromise = new Promise((resolve,reject)=>
    {
        let number = Math.random() %2;
        number = Math.floor(number / 10);
        if( number == 0)
        {
            console.log(number)
            resolve('Number generated is even')
        }
        else
        {
            console.log(number)
            reject('Number generated is not event')
        }
    }
)

MyPromise.then((value)=> console.log(value))
         .catch((value)=> console.log(value))

console.log("Print1")
console.log("Print2")
console.log("Print3")