var val = [3, 5, 9, 11,  23, 54, 60, 53, 98, 101, 994];

function checkValA(x){
	return x >= 98;
};

function checkValB(y){
	return y < 18;
};

function myFunction1(){
	document.getElementById('some1A').innerHTML = val.some(checkValA)
}

function myFunction2(){
	document.getElementById('some1B').innerHTML = val.some(checkValB)
}


function isBiggerThan10(element, index, array) {
  return element > 10;
}

document.getElementById('some2A').innerHTML = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
document.getElementById('some2B').innerHTML = [12, 5, 8, 1, 4].some(isBiggerThan10); // true

