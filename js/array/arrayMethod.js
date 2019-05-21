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




var arr = [2, 4, 2, 1, 5, 4, 1, 7];

arr.sort();
arr.sort(function(a, b) {return a - b});

function arrEdit(x){
    let y = x.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return y
}

document.getElementById('am2').innerHTML = arrEdit(arr);
//Result 



