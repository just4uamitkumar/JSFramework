
// function compareString(str1, str2){

//    for(let i = 0; i< str1.length; i++){
//     for(let j = 0; j < str1.length; j++){
//         if(str1.includes(str2)){
//             str1.splice(str2[i])
//         }
//         else if(str2.includes(str1)){
//             str2.splice(str1[j])
//         }        
//     }
//     return str1, str2
//    }
//    console.log(str1, str2)
// }


// compareString('amit', 'ai')



function compareString(str1, str2){
    let array1 = str1.split('')
    let array2 = str2.split('')

    if(str1.length > str2.length){
        array1 = array1.filter(val => !array2.includes(val)).join(''); 
        array2 = null      
    }
     if(str1.length < str2.length){
        let newarr = array1;
        array1 = array1.filter(val => !array2.includes(val)).join('');
        array2 = array2.filter(val => !newarr.includes(val)).join('');          
    }    

   console.log(array1, array2)
}


compareString('BC', 'BANGALORE')



fetch('https://reqres.in/api/users/1')
.then(data => {
    return data.json()
}).then(data2 => {
    console.log(data2.data.email)
})


fetch('https://reqres.in/api/users/3')
.then(data => {
    return data.json()
}).then(data2 => {
    console.log(data2.data.email)
})


fetch('https://reqres.in/api/users/10')
.then(data => {
    return data.json()
}).then(data2 => {
    console.log(data2.data.email)
})



