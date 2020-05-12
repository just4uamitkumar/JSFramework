var val = [3, 5, 9, 11,  23, 54, 60, 53, 98, 101, 994];

function checkValA(x){
	return x >= 18;
};

function checkValB(y){
	return y < 18;
};

function myFunction1(){
	document.getElementById('find1A').innerHTML = val.find(checkValA)
}

function myFunction2(){
	document.getElementById('find1B').innerHTML = val.find(checkValB)
}

(function(){
	const inventory = [{name: 'apples', quantity: 2}, {name: 'bananas', quantity: 0},
	{name: 'cherries', quantity: 5}];
	
	const result = inventory.find( fruit => fruit.name === 'cherries' );
	console.log(result)
	
	document.getElementById('find2A').innerHTML = result.name  + ' : ' + result.quantity;
	
})();

var arr = [4, 6, 8, 12];
function isOdd(element, index, array){
	return (element%2 == 1);
}

function isEven(element, index, array){
	return (element%2 == 0);
}


document.getElementById('find2B').innerHTML = arr.find(isOdd);
document.getElementById('find2C').innerHTML = arr.find(isEven);
