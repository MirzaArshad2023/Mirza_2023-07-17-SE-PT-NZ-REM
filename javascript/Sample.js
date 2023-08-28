var variable1 = 10; let variable2 = 20; const variable3 = 30;

console.log(variable1)
console.log(variable2)
console.log(variable3)
makechanges();

function makechanges()
{
    
    console.log(variable3 + 35)
}

const funcVariable = function(a, b)
{
    variable2 = variable2 + a + b;
    return arguments.callee;
}
console.log(funcVariable(3,4));
console.log(1/0)
console.log(-1/0)
console.log("some string"/1)

console.log(`The values of variable1 is ${variable1} and the value of variable2 is ${variable2} and the value of variable3 is ${variable3}`);
