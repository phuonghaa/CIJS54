import Student from './student.js'
import School from './school.js'
import Course from './course.js'
import {findByAge, findByHometown, findByName} from './function.js'
import './cardCompo.js'



//test
let thangLong = new School('Thang Long')
let STA101 = new Course('Intro to Statistic')
let CSI102 = new Course('Principle of Computing')

let anh = new Student('Anh', 18, 'Ha Noi')
let bich = new Student('Bich', 15, 'Tay Nguyen')
let cici = new Student('Cici', 19, 'Ha Dong')
let dani = new Student('Dani', 18, 'Ha Noi')
let elli = new Student('Elli', 15, 'Dong Thap')
let funky = new Student('Funky', 21, 'Incheon')
let hazel = new Student('Hazel', 20, 'Pyongyang')


thangLong.addStudent(anh)
thangLong.addStudent(bich)
thangLong.addStudent(cici)
thangLong.addStudent(dani)
thangLong.addStudent(elli)
thangLong.addStudent(funky)
thangLong.addStudent(hazel)

thangLong.addCourse(STA101)
thangLong.addCourse(CSI102)

STA101.addStudent(anh)
STA101.addStudent(cici)
STA101.addStudent(elli)
STA101.addStudent(funky)

CSI102.addStudent(funky)

funky.getInfo()
console.log(thangLong);
console.log(STA101);

console.log(findByAge(thangLong.studentList, 15));
console.log(findByHometown(findByAge(thangLong.studentList,18),'Ha Noi').length);
console.log(findByName(STA101.studentList, 'Cici'));


console.log(thangLong.toHTML());



document.querySelector("#container").innerHTML= thangLong.toHTML()
