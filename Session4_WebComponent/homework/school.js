import Student from './student.js'
import Course from './course.js'

export default class School {
    schoolName;
    studentList;
    courseList;

    constructor(schoolName){
        this.schoolName = schoolName;
        this.studentList = [];
        this.courseList = [];
    }

    addStudent(student){
        if (student instanceof Student){
            this.studentList.push(student)
            student.schoolName = this.schoolName;
        } else {
            alert('Nhap linh tinh')
        }
        
    }

    addCourse(courseName){
        if (courseName instanceof Course){
            this.courseList.push(courseName)
            courseName.schoolName = this.schoolName;
        } else {
            alert('Nhap linh tinh')
        }
        
    }

    toHTML(){
        let html = '';
        for (const student of this.studentList) {
            html += `<student-card name='${student.name}' age='${student.age}' hometown='${student.hometown}'> </student-card>`
        }
        return html;
    }

}