
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
		return value < 50
	}	
	
		
	
	var EvenFilt = filtered.filter(isEven);
	var OddFilt = filtered.filter(isOdd);
	var ThreeFilt = filtered.filter(isMultiThree);
	var FiftyFilt = filtered.filter(bigThanFifty);
	var fNineFilt = filtered.filter(lessThanTen);
	
	document.getElementById('filter2A').innerHTML = EvenFilt;
	document.getElementById('filter2B').innerHTML = OddFilt;
	document.getElementById('filter2C').innerHTML = ThreeFilt;
	document.getElementById('filter2D').innerHTML = FiftyFilt;
	document.getElementById('filter2E').innerHTML = fNineFilt;
	
	
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











 






