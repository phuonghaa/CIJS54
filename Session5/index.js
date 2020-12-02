
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
    const res = await firebase.firestore().collection('users').get()
    const user = getDataFromDocs(res)
    console.log(user);
}

getManyDocument()
