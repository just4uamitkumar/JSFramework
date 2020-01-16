//Scrolling function
(function(){
	var A = document.getElementsByClassName('startPoint')[0];
	var B = document.getElementsByClassName('endPoint')[0];
	A.innerHTML = 0;
	B.innerHTML = 460;
	
    A.style.left = '0px';
    B.style.left = '460px';
	
	document.getElementById('firstRight').onclick = function (){
		if( parseInt(A.style.left) >= 230 ){
			alert('You have tried enough to the right');
		}
		else{
			A.style.left = parseInt(A.style.left) + 30 + 'px';
			A.innerHTML = A.style.left.slice(0,-2);	
		}			
	}

	document.getElementById('firstLeft').onclick = function (){
		if( parseInt(A.style.left) <= 0 ){
			alert('No more space to left');
		}
		else{
			A.style.left = parseInt(A.style.left) - 30 + 'px';
			A.innerHTML = A.style.left.slice(0,-2);
		}			
	}

	document.getElementById('secondLeft').onclick = function (){
		if( parseInt(B.style.left) <= 230 ){
			alert('You are moving far away');
		}
		else{
			B.style.left = (parseInt(B.style.left) - 30) + 'px';
			B.innerHTML = B.style.left.slice(0,-2);	
		}			
	}

	document.getElementById('secondRight').onclick = function (){
		if( parseInt(B.style.left) >= 460 ){
			alert('You are trying to move out of range');
		}
		else{
			B.style.left = (parseInt(B.style.left) + 30) + 'px';
			B.innerHTML = B.style.left.slice(0,-2);		
		}		
	}

	document.getElementById('getDistance').onclick = function distance(){
        document.getElementById('distance').innerHTML = parseInt(B.style.left) - parseInt(A.style.left)
	}
}());

//Array Use in a List
(function(){
	var i = 0, len;
	var myArray = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
	len = myArray.length;

	var x = document.getElementsByClassName('scrollArray')[0].children[1];
    console.log(x)

	function getElem(i){
	  x.value = myArray[i];
	}
	
	getElem(0);

	document.getElementById('getNext').onclick = function(){
		if(i == len - 1){
	      i = 0;
	      getElem(0);
	  }

	  else if (i < len-1) {
	    i++;
	    getElem(i);
	  }
	}
	
	document.getElementById('getPrev').onclick = function(){
		if (i > 0) {
	    i--;
	    getElem(i);
	  }

	  else if (i == 0) {
	    i = (len-1);
	     getElem(len-1);
	  }
	}	
})();


//Array Use
(function(){
	var i = 0, len;
	var myArray = ['HTML', 'CSS', 'JavaScript', 'Photosop', 'Illustrator', 'ReactJs', 'Angular'];
	len = myArray.length;

	var x = document.getElementById('getVal');

	function getElem(i){
	  x.value = myArray[i];
	}
	
	getElem(0);

	document.getElementById('Next').onclick = function(){
	  if (i < len-1) {
	    i++;
	    getElem(i);
	  }	  
	}
	
	document.getElementById('Prev').onclick = function(){
		if (i > 0) {
	    	i--;
	    	getElem(i);
	  	}
	}	
})();


//Reverse Array Use
(function(){
	var x = document.getElementsByClassName('reverseArray')[0];
	var y = document.getElementsByClassName('breakArray')[0];
	var myBtn1 = x.childNodes[3];
	var myBtn2 = y.childNodes[3];

	myBtn1.onclick = function(){
		xInput = x.childNodes[1].value;
        if(xInput.length == 0){
            alert('Please enter some value')
        }
        else{
            var xChars = xInput.split('').reverse().join('');
		    y.childNodes[1].value = xChars
        }
		
	}

	myBtn2.onclick = function(){
		var i= 0, z='';
		yInput = y.childNodes[1].value;
		var yChars = yInput.split('');
        
        if(yInput.length == 0){
            alert('Please enter some value')
        }
        else{
           for (i in yChars) {
		    z += yChars[i] + "<br>";
		  }	
		  document.getElementById('myValue').innerHTML = z 
        }		 
	}

}());