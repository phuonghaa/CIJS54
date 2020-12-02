import Student from './student.js'
import School from './school.js'
import './cardCompo.js'
import { addDataToList } from "./utils.js"




const thangLong = new School('Thang Long')

addDataToList('users', thangLong.studentList)

console.log(thangLong);
console.log(thangLong.studentList);
//console.log(thangLong.toHTML());

//document.querySelector("#container").innerHTML= thangLong.toHTML()

