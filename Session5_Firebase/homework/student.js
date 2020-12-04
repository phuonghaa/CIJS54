export default class Student {
    name;
    age;
    hometown;


    constructor(name, age, hometown){
        this.name = name;
        this.age = age;
        this.hometown = hometown;
    }

    getInfo(){
        console.log(`Name: ${this.name}\nAge:  ${this.age}\nHometown: ${this.hometown}\n`);
    }

}

