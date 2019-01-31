

function loadDoc() {	
	var i,  xhttp, myObj, txt='',
   	xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {

	if (this.readyState == 4 && this.status == 200) {

	  	myObj = JSON.parse(this.responseText);

	  	for (i=0; i < myObj.users.length; i++) {
	  		txt += "<tr>" +
	  			"<td>" + myObj.users[i].id + "</td>" + 
	  			"<td>" + myObj.users[i].firstname + "</td>" +
	  			"<td>" + myObj.users[i].lastname + "</td>" +
	  			"<td>" + myObj.users[i].age + "</td>" +
	  			"<td>" + myObj.users[i].dob + "</td>" +
	  			"<td>" + myObj.users[i].occupatoin + "</td>" +
	  			"<td>" + "<button class='btn btn-warning deleteRow' onclick='deleteRow(event);'><i class='fa fa-trash'></i></button>" +
            "<button class='btn btn-warning editRow'><i class='fa fa-pencil'></i></button>" + "</td>" +
	  		  "</tr>";	
		}

		document.getElementById("myTable").tBodies[0].innerHTML = txt;
	}
	};
	xhttp.open("GET", "./js/db/user4.json", true);
	xhttp.send();
}


function deleteRow(event){
	var x = event.target;
	var tRow = x.closest('tr')
	console.log(tRow);

	//var id = tRow.getAttribute('id')
    tRow.remove();

    xhttp.open("DELETE", "./js/db/user4.json", true);
	xhttp.send();
}
