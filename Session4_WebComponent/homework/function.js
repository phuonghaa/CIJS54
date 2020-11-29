export function findByAge(list, age){
    return list.filter(student => student.age === age);

}

export function findByHometown(list, hometown){
    return list.filter(student => student.hometown === hometown);
}

export function findByName(list, name){
    return list.filter(student => student.name === name);
}