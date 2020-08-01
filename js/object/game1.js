
let sign = 'x';
let disp = document.getElementById('player');
//let isko;


function printex(number){
 let isko = document.getElementById('r' + number);
 console.log(isko);
 
 if(isko.innerText == ''){
 	isko.innerText = sign; 
 	
 	checkSign();
 	disp.innerHTML = sign + ' ka turn hai';
 	winner();
 	
 } 
 
}

function checkSign(){
	if(sign == 'x'){
		sign = 'o'
	}
	else{
		sign = 'x'
	}
}

function getBox(no){
	return document.getElementById("r" + no).innerHTML;
}

function checkMove(a, b, c, m){
	if(getBox(a) == m && getBox(b) == m && getBox(c) == m){
		return true;
	}
	else{
		return false;
	}
}

function winner(){
	debugger;
	if(checkMove(1,2,3, sign) || checkMove(4,5,6, sign) || checkMove(7,8,9, sign) 
	|| checkMove(1,4,7, sign) || checkMove(2,5,8, sign) || checkMove(3,6,9, sign)
	|| checkMove(1,5,9, sign) || checkMove(3,5,7, sign) ) {
		disp.innerHTML = sign + 'Jeet Gaya'
	}
}