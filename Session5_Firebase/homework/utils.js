import Student from "./student.js";

function getDataFromDoc(doc){
    const data = doc.data()
    data.id = doc.id;
    return data
}

function getDataFromDocs(docs){
    return docs.map(getDataFromDoc)
}

export async function getStudentList(){
    let list = [];
    const res = await firebase.firestore().collection('users').get();
    let data = getDataFromDocs(res.docs);
    data.map((student) =>{
        let newStudent = new Student(student.name, student.age, student.address);
        list.push(newStudent);
    })
    return list;
}