async function AwaitPromiseDemonstration()
{
    const promise = new Promise((resolve) => {
        setTimeout( () => resolve('Simple successful promise'), 2500 )
    });

    //using .then to process asynchronously:
    promise.then(msg => console.log(msg));

    //using await to process synchronously (if using await in a function it needs to be async):
    let msg = await promise;
    
    console.log('Promise execution completion')
}

AwaitPromiseDemonstration();
//console.log("finished execution of the function")

const mynewFunc = async function()
{
    //asynchronous code here
    const promise = new Promise((resolve)=>{
        setTimeout(()=> resolve('Resolved..'),3000)
    })

    promise.then(msg=> console.log(msg));

    await promise;
}

const mythirdfunc = async ()=>{
    //asynchronous code here
      //asynchronous code here
      const promise = new Promise((resolve)=>{
        setTimeout(()=> resolve('Resolved..now.'),3000)
    })

    promise.then(msg=> console.log(msg));

    await promise;
}

mynewFunc();
mythirdfunc();