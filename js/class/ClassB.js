let name = {
	firstName:"Amit",
	lastName:"Kumar"	
}

let printFullName = function(hometown, state, country){
	console.log(this.firstName + " " + this.lastName + ' from ' + hometown + ' ' + state + ' ' + country)
}

printFullName.call(name, 'Agra', 'UP', 'India');

let name2 = {
	firstName:"Sachin",
	lastName:"Tendulkar"
}

printFullName.call(name2, 'Agra', 'UP', 'India')

let name3 = {
	firstName:"Akashay",
	lastName:"Saini"
}



printFullName.apply(name3, ['Agra', 'UP', 'India'])


let name4 = {
	firstName:"Atal",
	lastName:"Bansal"
}

let printMyName = printFullName.bind(name4,'Agra', 'UP', 'India')
printMyName()
