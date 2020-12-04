export function getDataFromDoc(doc){
    const data = doc.data()
    data.id = doc.id;
    return data
}

// lay du lieu tu get many document
export function getDataFromDocs(data){
    // const docs = data.docs
    // const listRes = []

    // docs.forEach(doc => {listRes.push(getDataFromDoc(doc))});

    // return listRes

    return data.docs.map(getDataFromDoc)
}