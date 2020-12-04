
import { getDataFromDocs } from "./utilis.js";


//read one
async function getOneDocument(id){

    //promise
    // firebase.firestore().collection("users").doc('GPFyM1b6L2oFvpKBsoRA').get()
    // .then((res) => {
    //     console.log(res);
    // });

    //async await
    const res = await firebase.firestore().collection("users").doc(id).get();
    const user = res.data()
    user.id = res.id;
    console.log(user);

    //promise all
}

//getOneDocument('GPFyM1b6L2oFvpKBsoRA')
//getOneDocument('c93Tn0EsuhVBbRbKUfwu')

//get many documents
async function getManyDocument(){
    const res = await firebase.firestore().collection('users')
    .where('age', '==', 18).get()
    const user = getDataFromDocs(res)
    return user
};

getManyDocument().then(res => {
    const html ='';
    // for (const item of res) {
    //     html += `<user-info name='${item.name}> </user-info>`
    // }
    //document.getElementById('app').innerHTML = html;
    console.log(res);
})



//add (create) document
// function addDocument(){
//     const data = {
//         name: 'alex',
//         age: 23,
//     }
//     firebase.firestore().collection('users').add(data)
// }

// addDocument()


//Update document
function updateDocument(){
    const docID = 'G5Ef5gL8eB6ebPaqOfwO';
    const data = {
        phone: firebase.firestore.FieldValue.arrayUnion('0904','0901')
    }
    firebase.firestore().collection('users').doc(docID).update(data)
}

updateDocument()


//Delete Document
function deleteDocument(){
    const docID = 'GPFyM1b6L2oFvpKBsoRA';
    firebase.firestore().collection('users').doc(docID).delete()
}

deleteDocument()