import Student from "./student.js";

function getDataFromDoc(doc){
    const data = doc.data()
    data.id = doc.id;
    return data
}

function getDataFromDocs(data){
    return data.docs.map(getDataFromDoc)
}

function getElementFromData(data){
    let name = data.name
    let age = data.age
    let hometown = data.address

    return new Student(name, age, hometown)
}

export function addDataToList(collectionName, list){
    firebase.firestore().collection(collectionName).get()
    .then((res) => {
        const data = getDataFromDocs(res)    
        console.log(data);
        data.map((x) => {
            const element = getElementFromData(x)
            list.push(element)
        })
    })
    return list
    
}