class Student {
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
    }

    getInfo(){
        console.log(`Name: ${this.name}\nAge:  ${this.age}\nHometown: ${this.hometown}\nSchool: ${this.schoolName}\nCourse List: ${this.courseList}`);
    }

}

class School {
    schoolName;
    studentList;
    courseList;

    constructor(schoolName){
        this.schoolName = schoolName;
        this.studentList = [];
        this.courseList = [];
    }

    addStudent(student){
        this.studentList.push(student)
        student.schoolName = this.schoolName;
    }

    addCourse(courseName){
        this.courseList.push(courseName)
        courseName.schoolName = this.schoolName;
    }


}

class Course {
    courseName;
    schoolName;
    studentList;

    constructor(courseName){
        this.courseName = courseName;
        this.studentList = [];
        this.schoolName = "";
    }

    addStudent(student){
        this.studentList.push(student)
        student.courseList.push(this.courseName);
    }

}

function findByAge(list, age){
    return list.filter(student => student.age === age);

}

function findByHometown(list, hometown){
    return list.filter(student => student.hometown === hometown);
}

function findByName(list, name){
    return list.filter(student => student.name === name);
}



//test
thangLong = new School('Thang Long')
STA101 = new Course('Intro to Statistic')
CSI102 = new Course('Principle of Computing')

anh = new Student('Anh', 18, 'Ha Noi')
bich = new Student('Bich', 15, 'Tay Nguyen')
cici = new Student('Cici', 19, 'Ha Dong')
dani = new Student('Dani', 20, 'Ha Noi')
elli = new Student('Elli', 15, 'Dong Thap')
funky = new Student('Funky', 21, 'Incheon')


thangLong.addStudent(anh)
thangLong.addStudent(bich)
thangLong.addStudent(cici)
thangLong.addStudent(dani)
thangLong.addStudent(elli)
thangLong.addStudent(funky)

thangLong.addCourse(STA101)
thangLong.addCourse(CSI102)

STA101.addStudent(anh)
STA101.addStudent(cici)
STA101.addStudent(elli)
STA101.addStudent(funky)

CSI102.addStudent(funky)

funky.getInfo()


console.log(findByAge(thangLong.studentList, 15));
console.log(findByHometown(findByAge(thangLong.studentList,18),'Ha Noi'));
console.log(findByName(STA101.studentList, 'Cici'));