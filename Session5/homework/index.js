import School from './school.js'
import './cardCompo.js'
import { getStudentList } from "./utils.js"


const thangLong = new School('Thang Long')

getStudentList().then(list => {
    thangLong.studentList = list
    document.querySelector("#container").innerHTML= thangLong.toHTML()
})


