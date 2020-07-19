
let sign = 'x';
let disp = document.getElementById('player');


function printex(number){
 let isko = document.getElementById('r' + number);
 console.log(isko);
 
 if(isko.innerHTML == ''){
 	isko.innerHTML = sign; 
 	checksing();
 	disp.innerHTML = sign + ' ka turn hai';

 }
 
 
}

function checksing(){
	if(sign == 'x'){
		sign = 'o'
	}
	else{
		sign = 'x'
	}
}

function getbox(no){
	return document.getElementById("r" + no)
}