function f1()
{
    return false;
}
function f2()
{
    return false;
}
function f3()
{
    return false;
}
function f4()
{
    return true;
}

let myPromises = [new Promise((res,rej)=>{if(f1())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f2())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f3())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f4())res('Success');else rej('failed')})  

                 ]

        
             
Promise.all(myPromises)
.then((res)=> console.log("all promises are successful"))
.catch((rej)=> console.log("some of the promises are failed"));

Promise.allSettled(myPromises)
.then((res)=> console.log(res))
.catch((rej)=> console.log(rej));

Promise.race(myPromises)
.then((res)=> console.log(res))
.catch((rej)=> console.log(rej));


Promise.any(myPromises)
.then((res)=> console.log(res))
.catch((rej)=> console.log(rej));



const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});

const promise2 = Promise.resolve(100);

promise2.then((res)=> {console.log(res)});
        

const promise3 = Promise.reject(200);

promise3.then((res)=> {console.log(res)})
        .catch((rej)=> {console.log("FAILED::")});


//.catch((rej)=> console.log(rej));


/*Promise.any(myPromises)
.then((res)=>console.log(res))
.catch((rej)=>console.log(rej))
.finally(()=> console.log('all promises are fulfilled'))

let newProm = Promise.resolve(123);

newProm.then((value)=> console.log('fulfilled'))
       .catch((value)=> console.log('not fulfilled'));

       */