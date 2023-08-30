/*
    async function FulfillPromise()
    {
        const promise = new Promise((resolve) => {
        setTimeout( () => resolve('Simple successful promise'), 2500 )
        });
        //using .then to process asynchronously:
        promise.then(msg => console.log(msg));
        //using await to process synchronously (if using await in a function it needs to be async):
        let msg = await promise;
        //console.log(msg);

        console.log("Some other operations")
        console.log("Some Tasks")
        console.log("Pending operations")
    }
    FulfillPromise();
    //console.log("Synchronous code after fulfilling promise")

*/
    async function waitForPromise() 
    { // async function allows synchronous promise handling internally
        // since we have synchronous code and no .catch(), we use try ... catch for errors
        try {
            const promise = new Promise((resolve, reject) => {
                if(Math.floor((Math.random()* 100))%2 == 0)
                    setTimeout(() => resolve('Simple successful promise'), 2500)
               
                else
                    setTimeout(() => reject('Simple successful promise'), 2500);
                }); 
                let promiseResult = await promise; // waits here as long as promise needs to resolve
                console.log(`Success: ${promiseResult}`) // then continues executing other code
                return true;
        }
        catch(error) {
            console.error(`Failure: ${error}`)
        }
        finally
        {
            console.log("finished execution of promise")
        }
        //only gets here if return true above did NOT happen, ie. there was an error
        return false;
    }
    waitForPromise();