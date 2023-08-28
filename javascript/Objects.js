let newObj = new Object();

newObj.Name = "Mirza";
newObj["Has a dog"] = true;
newObj.DOB = new Date("2018-07-01");

//Alternatively you can also define object like the one below.

let Person = {

    Name: "Mirza",
    "Age" : 25,
    DOB : '01-01-1990',
    ReturnAgeinWords : ()=>
    {
        return "Age is twenty five";
    }
}

console.log(newObj);
console.log(Person.ReturnAgeinWords());

console.log(JSON.stringify(newObj))