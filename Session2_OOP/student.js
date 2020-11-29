export default class Student {
    name;
    age;
    hometown;
    courseList;
    schoolName;

    constructor(name, age, hometown){
        this.name = name;
        this.age = age;
        this.hometown = hometown;
        this.courseList = [];
        this.schoolName = "";
    }

    getInfo(){
        console.log(`Name: ${this.name}\nAge:  ${this.age}\nHometown: ${this.hometown}\nSchool: ${this.schoolName}\nCourse List: ${this.courseList}`);
    }

}

