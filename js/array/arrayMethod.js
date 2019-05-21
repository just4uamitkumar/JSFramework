var arr = [2, 4, 2, 1, 5, 4, 1, 7];
arr.sort();

//Sort Array;
arr.sort(function(a, b) {return a - b})
document.getElementById('am1').innerHTML = arr;

function arrEdit(x){
    let y = x.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return y
}

document.getElementById('am2').innerHTML = arrEdit(arr);


var sortedArray = arr.slice().sort()

console.log(sortedArray);
//[1, 1, 2, 2, 4, 4, 5, 7]

var result =[];

for(var i = 0; i <  sortedArray.length - 1; i++){
    if(sortedArray[i + 1] == sortedArray[i]){
        result.push(sortedArray[i]);
    }
}

console.log(result);
//[1, 2, 4]

function finalArr (arr, result){
    var a = [], diff = [];
    
    for ( var k = 0; k <  arr.length; k ++){
        a[arr[k]] = true;
    }
    
    for (var j = 0 ; j < result.length; j++){
        if(a[result[j]]){
            delete a[result[k]];
        }
        else{
            a[result[j]] = true;
        }
    }
    
    for (var l in a){
        diff.push(l)
    }
    
    return diff;   
}

console.log(finalArr(arr, result));


////Sort Array;
//arr.sort(function(a, b) {return a - b})
//
//function removeDP(x){
//    var y = [];
//    // Loop through array values
//    for(i = 0; i < arr.length; i++){
//        if(y.indexOf(x[i]) === -1){
//            y.push(x[i]);
//        }
//    }
//    return y;
//}

document.getElementById('am3').innerHTML = finalArr(arr, result);
//Result 1,2,4,5,7






var arr = [2, 4, 2, 1, 5, 4, 1, 7]; //Existing Array

arr.sort();
var sortedArray = arr.slice().sort();

console.log(sortedArray);
//[1, 1, 2, 2, 4, 4, 5, 7]

var result =[];

for(var i = 0; i <  sortedArray.length - 1; i++){
    if(sortedArray[i + 1] == sortedArray[i]){
        result.push(sortedArray[i]);
    }
}

console.log(result); //get new array for repeated element
//[1, 2, 4]

//Comparing newly created array and existing array
function finalArr (arr, result){
    var a = [], diff = [];
    
    for ( var k = 0; k <  arr.length; k ++){
        a[arr[k]] = true;
    }
    
    for (var j = 0 ; j < result.length; j++){
        if(a[result[j]]){
            delete a[result[k]];
        }
        else{
            a[result[j]] = true;
        }
    }
    
    for (var l in a){
        diff.push(l)
    }
    
    return diff;   
}



