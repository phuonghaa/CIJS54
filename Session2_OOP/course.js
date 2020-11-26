//import {Student} from './student.js'



export default class Course {
    courseName;
    schoolName;
    studentList;

    constructor(courseName){
        this.courseName = courseName;
        this.studentList = [];
        this.schoolName = "";
    }

    addStudent(student){
        if (student instanceof Student){
            this.studentList.push(student)
            student.schoolName = this.schoolName;
        } else {
            alert('Nhap linh tinh')
        }
    }
}


