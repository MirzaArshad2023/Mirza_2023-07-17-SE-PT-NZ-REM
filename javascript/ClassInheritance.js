class Animal {
    constructor(name) {
        this.speed = 0; this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed} kph.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

}

class Rabbit extends Animal {
    constructor(name, earlength)
    {
        super(name);
        this.earlength = earlength;
    }
    hide() { // custom function, also inherits from Animal
        console.log(`${this.name} hides!`);
    }
    run(speed)
    {
        super.stop();
        this.speed = speed * 2;
        console.log(`${this.name} runs with speed ${this.speed} kph.`);
    }
    Race()
    {
        super.run();
        super.stop();
        super.run();
        super.stop();
        this.hide();
    }
}
let bunny = new Rabbit('bunny'); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!

let whiteRabbit = new Animal("White Rabbit");
whiteRabbit.run(20);
