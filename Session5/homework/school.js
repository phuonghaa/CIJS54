import Student from './student.js'


export default class School {
    schoolName;
    studentList;

    constructor(schoolName){
        this.schoolName = schoolName;
        this.studentList = [];
    }

    addStudent(student){
        if (student instanceof Student){
            this.studentList.push(student)
        } else {
            alert('Nhap linh tinh')
        }
        
    }


    toHTML(){
        let html = '';
        for (const student of this.studentList) {
            console.log(student);
            html += `<student-card name='${student.name}' age='${student.age}' hometown='${student.address}'> </student-card>`
        }
        return html;
    }

}