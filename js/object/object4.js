(function(){
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
})();


//Combine Objects
(function(){
    var Obj1 = { food: 'pizza', car: 'ford' };
    var Obj2 = { animal: 'dog', source:'water' };
    var Obj3 = {company:'Chetu', city:'Noida'};
    var Obj4 = {phone:'Nokia', mouse:'Logitech'}
    
    var merged1 = {...Obj1, ...Obj2};
    console.log(merged1);
    
    var merged2 = {...Obj1, ...Obj2, ...Obj3, ...Obj4};
    console.log(merged2);
    
    var merged3 = Object.assign({}, Obj1, Obj2, Obj3, Obj4);  
    console.log(merged3);
})();
















