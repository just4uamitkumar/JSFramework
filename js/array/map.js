(function(){
	var numbers = [4, 9, 16, 25];	
	document.getElementById('map1').innerHTML = numbers.map(Math.sqrt);		
	const map2 = numbers.map(number => number*2);	
	document.getElementById('map2').innerHTML = map2;    
    
    //
    var Emps =  [{ id: 20, name: 'Captain Piett' },
				{ id: 24, name: 'General Veers' },
				{ id: 56, name: 'Admiral Ozzel' },
				{ id: 88, name: 'Commander Jerjerrod' }];	
	
	const officersIds = Emps.map(Emp => (Emp.id + ':' + Emp.name));	
	document.getElementById('map3').innerHTML = officersIds;
    
    //
    var pilots = [
		  {id: 10, name: "Poe Dameron", years: 14},
		  {id: 2, name: "Temmin 'Snap' Wexley",	years: 30},
		  {id: 41, name: "Tallissan Lintra", years: 16 },
		  {id: 99, name: "Ello Asty", years: 22}];
		
		const pilotsDetail = pilots.map(pilot => pilot.name);		
		document.getElementById('map4').innerHTML = pilotsDetail;


	var numericArr = [3, 6, 5, 8, 18, 25, 50, 43, 10, 9];

	var updatedArr = numericArr.map(e => e > 18);
	console.log('original Array' + numericArr)
	console.log('mapped Array' + updatedArr);

})();













 






