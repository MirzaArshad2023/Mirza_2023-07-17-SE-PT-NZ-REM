function PersonFirstName(lastname)
{
    PersonFirstName.Education = "Bachelors"
    return function PersonFullName(firstname)
    {
        return firstname + " " +  lastname;
    }
}

const lastname = PersonFirstName("Wick");
console.log(lastname("John"));
console.log(PersonFirstName.length)
console.log(PersonFirstName.Education)
const anotherFuncVari = function(x,y,z,...remaining)
{

}

console.log(anotherFuncVari.length)
let newFunct = function(who)
{
    if(who)
      console.log(`value of passed ${who}`)
    else
      newFunct("Guest")
}
let guestFunc = newFunct;
console.log(newFunct.name)
newFunct()
guestFunc()
newFunct = null;
guestFunc()