var val = [3, 5, 9, 11,  23, 54, 60, 53, 98, 101, 994];

function checkValA(x){
	return x >= 98;
};

function checkValB(y){
	return y >= 3;
};


function myFunction1(){
	document.getElementById('every1').innerHTML = val.every(checkValA)
}

function myFunction2(){
	document.getElementById('every2').innerHTML = val.every(checkValB)
}

function isBiggerThan10(element, index, array) {
  return element > 10;
}

document.getElementById('some2A').innerHTML = [2, 5, 8, 1, 4].every(isBiggerThan10);  // false
document.getElementById('some2B').innerHTML = [12, 15, 18, 11, 14].every(isBiggerThan10); // false