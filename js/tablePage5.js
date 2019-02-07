var url = 'http://localhost:3000/users';

function loadDoc() {
	var i, xhttp, tbody, myObj, txt='',
   	xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		
	  	myObj = JSON.parse(this.responseText);

	  	for (i=0; i < myObj.length; i++) {
	  		txt += "<tr id=row_"+ myObj[i].id + ">" +
	  			"<td>" + myObj[i].id + "</td>" + 
	  			"<td>" + myObj[i].firstname + "</td>" +
	  			"<td>" + myObj[i].lastname + "</td>" +
	  			"<td>" + myObj[i].age + "</td>" +
	  			"<td>" + myObj[i].dob + "</td>" +
	  			"<td>" + myObj[i].occupatoin + "</td>" +
	  			"<td>" + "<button class='btn btn-warning deleteRow' onclick='deleteRow(event);'><i class='fa fa-trash'></i></button>" +
            "<button class='btn btn-warning editRow'><i class='fa fa-pencil'></i></button>" + "</td>" +
	  		  "</tr>";
	  	}		

		document.getElementById("myTable").tBodies[0].innerHTML = txt;
	}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

loadDoc();

(function(){
	var table = document.getElementById( "myTable" );	
	var tableArr = [];
	var fName;
	for ( var i = 1; i < table.rows.length; i++ ) {
	    tableArr.push({
	        fName: table.rows[i].innerHTML      
	    });
	}

	console.log(tableArr)
})();

function deleteRow(event){
	var x = event.target;
	var tRow = x.closest('tr')
	console.log(tRow);

	var id = tRow.getAttribute('id')
    tRow.remove();
    console.log(id);

    var myObj;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {	
		if (this.readyState == 4 && this.status == 200) {		
		  	//myObj = JSON.parse(this.responseText);
		  	tRow = this.responseText;
		}
	}

    xhttp.open("DELETE", url, true);
	xhttp.send("x=" + id);
}








