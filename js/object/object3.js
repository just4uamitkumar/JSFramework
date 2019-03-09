
//Literal Object

	var emp={id:105,name:"Sanjay Kumar",salary:40000} 
	document.getElementById('demo1').innerHTML = emp.id+" "+emp.name+" "+emp.salary;



//Instance of Object
	var objectName = new Object();

	var student = new Object();
	student.id = 101;
	student.name = 'Ravi Malik';
	student.subject = 'PHP';

	document.getElementById('demo2').innerHTML = student.id+" "+student.name+" "+student.subject;


//Object Constructor
	function city(name,state,ranking){  
		this.name=name;  
		this.state=state;  
		this.ranking=ranking;  
	} 

	A = new city('Agra',"UP",'15'); 
	B = new city('Gandhi Nagar',"Gujarata",'5'); 	  
	
	document.getElementById('demo3').innerHTML = B.name+" "+B.state+" "+B.ranking;





















document.getElementById('var1A').innerHTML = emp.id 
document.getElementById('var1B').innerHTML = emp.name 
document.getElementById('var1C').innerHTML = emp.salary 

document.getElementById('var2A').innerHTML = student.id 
document.getElementById('var2B').innerHTML = student.name 
document.getElementById('var2C').innerHTML = student.subject 