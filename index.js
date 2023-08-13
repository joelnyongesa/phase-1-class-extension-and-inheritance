class Pet{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

    speak(){
        return `${this.name} says ${this.sound}`;
    }
}

class Dog extends Pet{}

class Cat extends Pet{}

class Bird extends Pet{
    fly(){
        return `${this.name} flies away!`
    }
}

const dog = new Dog("Rex", "woof")
const cat = new Cat("Lilly", "meow")
const bird = new Bird("Tixxi", "squawk")


console.log(dog.speak())
console.log(cat.speak())
console.log(bird.speak())
console.log(bird.fly())