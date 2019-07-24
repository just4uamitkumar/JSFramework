//The XMLHttpRequest Object
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "./js/db/ajax_info.txt", true);
  xhttp.send();
}

//The XMLHttpRequest Object
function loadDoc2() {
  //Read Json Data
	var i, xhttp, tbody, myObj, txt='',
   	xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {

	  	myObj = JSON.parse(this.responseText);

	  	for (i=0; i < myObj.users.length; i++) {

	  		myObj.users[i].dob = new Date(myObj.users[i].dob);
	  		var myDate = new Date(myObj.users[i].dob)
	  		
	  		txt += "<tr id=row_"+ myObj.users[i].id + ">" +
	  			"<td>" + myObj.users[i].id + "</td>" + 
	  			"<td>" + myObj.users[i].firstname + "</td>" +
	  			"<td>" + myObj.users[i].lastname + "</td>" +	  			
	  			"<td>" + myDate.getDate()+'-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-'+ myDate.getFullYear() + "</td>" +
	  			//"<td>" + myObj.users[i].dob+ "</td>" +
	  			"<td>" + myObj.users[i].experience + "</td>" +
	  			"<td>" + myObj.users[i].occupatoin + "</td>" +	  			
	  		  "</tr>";  
	  	}
		document.getElementById("myTable").tBodies[0].innerHTML = txt;
	}
	};
	xhttp.open("GET", "./js/db/user4.json", true);
	xhttp.send();
}