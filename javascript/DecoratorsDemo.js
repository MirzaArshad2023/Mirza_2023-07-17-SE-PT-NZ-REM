function ProcessProducts(x)
{
    y = 20;
    x = x * y ;
    processHandle();
    return x;
}

function ProcessCategories(x)
{
    console.log("Processing Categories..")
}

function DecorateWithTime(func)
{
    return function(y)
    {
        console.time();
        console.log(`passed value:${y}`)
        let retVal = func(y);
        console.timeEnd();

        return retVal;
    }
}
function DecorateWithTryCatch(func)
{
    return function(x)
    {
        try
        {
            return func(x)
        }
        catch(error)
        {
            console.log('An error has occured: ' + error)
        }
        finally
        {
            return 0;
        }
    }
}
//const enhancedProcessProducts = DecorateWithTime(ProcessProducts);
const enhancedDecTryCatch = DecorateWithTryCatch(ProcessProducts);
//console.log(enhancedProcessProducts(50));
console.log(enhancedDecTryCatch(70));
ProcessCategories();

function SumofNumber(x, y)
{
    return x + y;

}

function DecorateWithCounterAndTime(func)
{
    let count=0;
    return (...args)=>{
        count++;
        console.log(`Function is called ${count} number of times`)
        console.time();
        let x = func(...args);
        console.timeEnd();
        return x;
    }
}

const myDecoratedFunc = DecorateWithCounterAndTime(SumofNumber);
console.log(myDecoratedFunc(4,5))
console.log(myDecoratedFunc(5,10))
console.log(myDecoratedFunc(54,5))

