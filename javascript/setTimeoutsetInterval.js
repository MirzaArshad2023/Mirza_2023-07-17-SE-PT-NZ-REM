function print1(x)
{
    console.log(`Value of passed x:${x}`)
}
function print2(Y)
{
    console.log(`Value of passed y:${Y}`)
}

print1(10);
let timerID = setTimeout(print2,20000,50);
print1(50);
clearTimeout(timerID);
let count = 0;
let handleClearInterval = setInterval(()=> {
    count++;
    console.log(count);
    if(count == 10)
        clearInterval(handleClearInterval);
},1000,44);
