(function(){
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.sort();
	document.getElementById("sort1A").innerHTML = fruits;
	 
	fruits.reverse();
	document.getElementById("sort1B").innerHTML = fruits;
	
	var points = [40, 100, 1, 5, 25, 10];
	points.sort();
	
	document.getElementById('sort2A').innerHTML = points;
	
	points.sort(function(a, b){return a - b});
	document.getElementById('sort2B').innerHTML = points;   
	document.getElementById('sort2BA').innerHTML = points[0] + ', ' + points[points.length - 1]; //Lowest Value, Highest Value
	
	points.sort(function(a, b){return b - a});
	document.getElementById('sort2C').innerHTML = points;
	document.getElementById('sort2CA').innerHTML = points[0]; //Highest Value
	
	//math max array
	document.getElementById("sort3A").innerHTML = myArrayMax(points);
	
	//math min array
	document.getElementById("sort3B").innerHTML = myArrayMin(points);
	
	function myArrayMax(arr) {
	  return Math.max.apply(null, arr);
	}
	
	function myArrayMin(arr) {
	  return Math.min.apply(null, arr);
	}
	
})();

var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

function showcars() {
  document.getElementById("sort4A").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}

showcars();

function myFunction() {
  cars.sort(function(a, b){return a.year - b.year});
  showcars();
}
	  







