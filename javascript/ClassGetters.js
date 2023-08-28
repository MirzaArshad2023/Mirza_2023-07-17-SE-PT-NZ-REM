class ActorClass {
    #numMovies = 0; // private class property (will cover this shortly)
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    get age() { // getter calculates age based on birthday
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
    }
    set numMovies(number) { // setter enforces data validation
        if (number > 0 && number < 100) this.#numMovies = number;
        else throw new Error('Number of movies cannot be zero or more than 100')
    }
    get numMovies() { // gets internal, private property
        return this.#numMovies
    }
}
const angelina = new ActorClass('Angelina Jolie', new Date('1975-06-04'));

angelina.numMovies = 47; // using a value less than 1 or more than 100 throws an error
console.log(`${angelina.name} is ${angelina.age} and has been in at least ${angelina.numMovies} movies`)