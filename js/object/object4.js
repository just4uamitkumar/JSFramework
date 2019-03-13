
//Object Constructor
	function city(name,state){  
		this.name=name;  
		this.state=state;

		//Object Method
		this.changeName = changeName; 

		function changeName(otherName){  
			this.name=otherName;  
		}
	} 

	A = new city('JaiPur',"Rajasthan"); 
	B = new city('Shimla',"Himachal");
	C = new city('Chennai',"TamilNadu"); 

	A.changeName('Ajmer');
	
	document.getElementById('demo1').innerHTML = A.name+" "+A.state
















