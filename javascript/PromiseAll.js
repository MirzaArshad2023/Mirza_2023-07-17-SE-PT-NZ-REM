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
    return false;
}

let myPromises = [new Promise((res,rej)=>{if(f1())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f2())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f3())res('Success');else rej('failed')}),
                  new Promise((res,rej)=>{if(f4())res('Success');else rej('failed')})  

                 ]

Promise.any(myPromises)
.then((res)=>console.log(res))
.catch((rej)=>console.log(rej))
.finally(()=> console.log('all promises are fulfilled'))

let newProm = Promise.resolve(123);

newProm.then((value)=> console.log('fulfilled'))
       .catch((value)=> console.log('not fulfilled'));