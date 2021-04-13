class Employee{
	constructor(givenName, givenExp, GivenDiv){
		this.name = givenName;
		this.experience = givenExp;
		this.division = GivenDiv

	}

	slogan(){
		return `I am ${this.name} and this company is best`;
	}

	joiningYear(){
		let d = new Date()
		return d.getFullYear() - this.experience
	}

	static add(a, b){
		return a + b;
	}
}

let sunil = new Employee('Sunil', 35, 'MIS')
console.log(sunil.joiningYear())


class Programmer extends Employee{
	constructor(givenName, givenExp, GivenDiv, language, github){
		super(givenName, givenExp, GivenDiv, language);
		this.language = language;
		this.github = github

	}

	favLang(){
		if(this.language == 'phyton'){
			return 'Phyton'
		}
		else{
			return 'JavaScript';
		}
	}

	static multiply (a, b){
		return a * b
	}
}

let amit = new Programmer('amit', 6, 'Chetu', 'Hindi', 'repo')
console.log(amit.favLang());


let car = {
	name:"Maturi",
	topSpeed:89,
	run: function(){
		console.log("Cars is running")
	}
}

console.log(car)