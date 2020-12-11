export function getDataFromDoc(doc){
    const data = doc.data()
    data.id = doc.id;
    return data
}

export function getDataFromDocs(data){
    return data.docs.map(getDataFromDoc)
}

// export function addUser(firstName, lastName, email, password){
//     const data = {
//         name: firstName + " " + lastName,
//         email: email,
//         password: password
//     }
//     firebase.firestore().collection('users').add(data)
// }


/** *
 * @param {String} key
 * @param {Object} value
 */
export function saveToLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}

export function getItemLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}