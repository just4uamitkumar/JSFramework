
//Get values greater than 0
function isPositive(value) { 
  return value > 0; 
} 
  
function posFunc() { 
    var filtered = [112, 52, 0, -1, 944].filter(isPositive); 
    document.getElementById('filter1').innerHTML = filtered;
} 
posFunc();

//Get larger words
(function(){
	var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

	const result = words.filter(word => word.length > 6);

	document.getElementById('filter1A').innerHTML = result;
	document.getElementById('filter1B').innerHTML = result.reverse();
})();

(function(){
	var filtered = [3, 5, 9, 11,  23, 54, 60, 53, 98, 101, 994];
	
	function isEven(value){
		return value%2 == 0;
	}
    
    // filtered.filter(e => e%2 == 0)
	
	function isOdd(value){
		return value%2 == 1;
	}
	
	function isMultiThree(value){
		return value%3 == 0;
	}
	
	function bigThanFifty(value){
		return value >= 50;
	}
	
	function lessThanTen(value){
		return value < 10
	}	
	
	document.getElementById('filter2A').innerHTML = filtered.filter(isEven);
	document.getElementById('filter2B').innerHTML = filtered.filter(isOdd);
	document.getElementById('filter2C').innerHTML = filtered.filter(isMultiThree);
	document.getElementById('filter2D').innerHTML = filtered.filter(bigThanFifty);
	document.getElementById('filter2E').innerHTML = filtered.filter(lessThanTen);
	
	
})();

	var myArray = [3, 5, 9, 11,  23, 54, 60, 53, 98, 101, 994];
	
	function inputValA(value) {
	  return value >= document.getElementById("GCheck").value;
	}
	
	function inputValB(value) {
	  return value < document.getElementById("lCheck").value;
	}	
	

	function myFunctionA() {			
		 document.getElementById("filter3A").innerHTML = myArray.filter(inputValA);
	}
	
	function myFunctionB() {			
		 document.getElementById("filter3B").innerHTML = myArray.filter(inputValB);
	}