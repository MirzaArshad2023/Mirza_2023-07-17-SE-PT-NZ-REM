let User={
    get firstName()
    {
        return this.theFirstname || "John";
    },
    get secondName()
    {
        return this.theSecondName || "Smith";
    },
    set fullName(fullname)
    {
        this._fullName = fullname;
    },
    get fullName()
    {
        return this._fullName;
    }
}

User.firstName = 'Mirza';
User.secondName = 'Baig';
User.fullName = 'Cold';
console.log(User.firstName);
console.log(User.secondName);
console.log(User.fullName);

//function constructors.

function NewUser(name, age)
{
    this.firstName = name;
    this.newAge = age;

    Object.defineProperty(this, 'age', {
        value: this.newAge,
        writable: true
    });
}

let secondUser = new NewUser('sean', 'smith');
console.log(secondUser.firstName)
console.log(secondUser.newAge);
secondUser.age = 99;
console.log(secondUser.age);

class TypicalUser
{
    #numOfMovies = 0;
    constructor(firstname, lastname, age)
    {
        this.firstName = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get NumOfMovies()
    {
        return this.#numOfMovies;
    }
    set NumOfMovies(movies)
    {
        if(movies!=0)
            this.#numOfMovies = movies;
    }
}

let thirduser = new TypicalUser('john', 'connor', 50);

console.log(thirduser.firstName)
console.log(thirduser.lastname)
console.log(thirduser.age)
thirduser.NumOfMovies = 0;

console.log(Object.getPrototypeOf(User));