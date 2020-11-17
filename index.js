// function centuryFromYear(year){
//     return Math.ceil(year/100)
// }

// console.log(centuryFromYear(1900));

// //bai 2
// function checkPalindrome(inputString){
//     for (let i = 0; i < inputString.length/2; i++) {
//         let first = inputString[i];
//         let later = inputString[inputString.length-1-i]
//         if (first !== later){
//             return false
//         }
        
//     }
//     return true
// }
// console.log(checkPalindrome('aabaa'));
// console.log(checkPalindrome('abac'));
// console.log(checkPalindrome('caabbaac'));





// //bai 4
// function find(inputArray){
//     let output = [];
//     for (const item of inputArray) {
//         if (item %2 === 0){
//             output.push(item);
//         }
//     }
//     return output
// }

// const arr = [3,6,-2,-5,7,3,8,10,11]
// console.log(find(arr));



// const result = arr.filter(item => item %2 === 0);
// console.log(result);


$('#no').mouseover(function () {
    $('.answer').toggleClass('row-reverse');
})

$('#yes').click(function () {
    alert('yayyyy!');
})