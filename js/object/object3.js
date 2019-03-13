
//Literal Object
	var water={quality:'High', amount:"5L", price:0.25}

	document.getElementById('demo1').innerHTML = water.quality+" "+water.amount+" "+water.price;



//Instance of Object
	var objectName = new Object();

	var bottle = new Object();
	bottle.volume = '3L';
	bottle.color = 'Grey';
	bottle.company = 'Milton';

	document.getElementById('demo2').innerHTML = bottle.volume+" "+bottle.color+" "+bottle.company;



//Object Constructor
	function city(name,state){  
		this.name=name;  
		this.state=state; 
	} 

	A = new city('JaiPur',"Rajasthan"); 
	B = new city('Shimla',"Himachal");
	C = new city('Chennai',"TamilNadu"); 	  
	
	document.getElementById('demo3').innerHTML = C.name+" "+C.state





















document.getElementById('var1A').innerHTML = water.quality 
document.getElementById('var1B').innerHTML = water.amount 
document.getElementById('var1C').innerHTML = water.price 

document.getElementById('var2A').innerHTML = bottle.volume 
document.getElementById('var2B').innerHTML = bottle.color 
document.getElementById('var2C').innerHTML = bottle.company 