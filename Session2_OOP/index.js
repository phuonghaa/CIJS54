class Person{
    // name;
    // age;
    // address;
    // gender;
    constructor(name, age, address, gender){
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }

    speak() {
        console.log(
        `Hello, I'm ${this.name}, 
        I'm ${this.age} this year
        I'm living in ${this.address}
        `);
    }
}

const duyet = new Person('duyet', 20, 'hanoi', ' female');
//duyet.speak();

//const abc = new Person('Abc', 21, 'hcm', ' male');


class Animal{
    constructor(species, color, numberofLeg, gender, name){
        this.species = species;
        this.color = color;
        this.numberofLeg = numberofLeg;
        this.gender = gender;
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    speak(){
        console.log((`${this.name} is making a sound`));
    }

    isDangerous(){
        console.log((this.numberofLeg > 4 || this.numberofLeg  === 0) ? `${this.name} is  dangerous` :`${this.name} is not dangerous`);
    }
}

const meow  = new Animal('cat', 'gray', '4', 'female', 'meow');
//console.log(meow);
//meow.isDangerous();


//static method
class MyMath {
    static sum(a,b){
        return a+b;
    }

    static div(a,b){
        return a/b
    }
}


//console.log(MyMath.sum(1,2));


//Inheritance
class Employee extends Person{
    constructor(name, age, address, gender, salary){
        super(name, age, address, gender);
        this.salary = salary;

    }

    speak(){
        console.log(`he`);
    }

    showOff(){
        console.log(`My salary is ${this.salary}`);
    }
}

const myEmp = new Employee('trump', 76, 'new york', 'male', 400000);
console.log(myEmp);

class Dog extends Animal{
    constructor(species, color, numberofLeg, gender, name){
        super(species, color, numberofLeg, gender, name);
    }

    speak(){
        console.log(`gau gau`);
    }
}

const myDog = new Dog('dog','brown', 4, 'male', 'moo')
console.log(myDog);
