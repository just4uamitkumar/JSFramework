//Array Use
(function(){
	var x = document.getElementsByClassName('reverseArray')[0];
	var y = document.getElementsByClassName('breakArray')[0];
	var myBtn1 = x.childNodes[3];
	var myBtn2 = y.childNodes[3];
	//var myInput = 'null';	

	myBtn1.onclick = function(){
		xInput = x.childNodes[1].value;
		var xChars = xInput.split('').reverse().join('');
		y.childNodes[1].value = xChars
		//document.getElementById('myValue').innerHTML = chars
	}

	myBtn2.onclick = function(){
		var i= 0, z='';
		yInput = y.childNodes[1].value;
		var yChars = yInput.split('');
		console.log(yChars);

		for (i in yChars) {
		    z += yChars[i] + "<br>";
		  }	
		document.getElementById('myValue').innerHTML = z 
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

//Array Use
(function(){
	var i = 0, len;
	var myArray = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
	len = myArray.length;

	var x = document.getElementsByClassName('scrollArray')[0].childNodes[3];

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

//Scrolling function
(function(){
	var A = document.getElementsByClassName('startPoint')[0];
	var B = document.getElementsByClassName('endPoint')[0];
	A.innerHTML = 0;
	B.innerHTML = 460;

	function getWidth(){
		var Aw = A.clientWidth; //StartPoint Width;
		var Bw = B.clientWidth; //EndPoint Width;
		var Ax = A.offsetLeft - Aw/2; //StartPoint Left Position;
		var Bx = B.offsetLeft - Bw/2; //EndPoint Left Position;
		return {
				 Aw:Aw,
				 Bw:Bw,
				 Ax:Ax,
				 Bx:Bx
			}
	}	
	  
    A.style.left = '0px';
    B.style.left = '460px';
	
	document.getElementById('firstLeft').onclick = function (){
		if( parseInt(A.style.left) >= 230 ){
			alert('You are trying to move out of range');
		}
		else{
			A.style.left = parseInt(A.style.left) + 30 + 'px';
			A.innerHTML = A.style.left.slice(0,-2);	
		}			
	}

	document.getElementById('firstRight').onclick = function (){
		if( parseInt(A.style.left) <= 0 ){
			alert('You are moving far away');
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
		var getData = getWidth();
		document.getElementById('distance').innerHTML = getData.Bx - getData.Ax;
	}
})()