class Person {
    static latin = 'persona'; // static (class) property, belongs to class not any instance
    #salary = 1000;
    _wealth = 100000;
    constructor(name) {
        this.name = name; // standard property, is unique to each instance of the class
    }
    getName() { // standard method, belongs to each instance of the class
        return this.name + " Salary " + this.#salary + " " + this._wealth;
    }
    #getSalary()
    {
        return this.#salary * 2;
    }
    static createAnonymous() { // static (class) method, belongs to class not any instance
        return new Person("Unnamed Person");
    }
}

class Gentleman extends Person{
    getFullName()
    {
        //super.getName();
        return super._wealth;
    }

}

class Animal
{
    constructor(type)
    {
        this.type = type;
    }
    firstNam= "animal";
}

new Animal("Land")

let jonas = new Person('Jonas')
console.log("Wealth :: " + jonas._wealth);
//jonas.#getSalary()
jonas.getName();
console.log(jonas.getName()) // Jonas - name and getName() belong to an instance of Person
console.log(jonas.latin) // undefined - latin property doesn't belong to jonas
console.log(Person.latin) // persona - latin property belongs to Person class
let anon = Person.createAnonymous() // use static (factory) method to create generic Person instance
console.log(Gentleman.createAnonymous());