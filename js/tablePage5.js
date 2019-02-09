var url = './js/db/user4.json';

(function() {
	var i, xhttp, tbody, myObj, txt='',
   	xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	
	if (this.readyState == 4 && this.status == 200) {
		
	  	myObj = JSON.parse(this.responseText);
	  	myObj.dob = new Date(myObj.dob);

	  	for (i=0; i < myObj.users.length; i++) {
	  		txt += "<tr id=row_"+ myObj.users[i].id + ">" +
	  			"<td>" + myObj.users[i].id + "</td>" + 
	  			"<td>" + myObj.users[i].firstname + "</td>" +
	  			"<td>" + myObj.users[i].lastname + "</td>" +	  			
	  			"<td>" + myObj.users[i].dob + "</td>" +
	  			"<td>" + myObj.users[i].experience + "</td>" +
	  			"<td>" + myObj.users[i].occupatoin + "</td>" +
	  			"<td>" + "<button class='btn btn-warning deleteRow' onclick='deleteRow(event);'><i class='fa fa-trash'></i></button>" +
            "<button class='btn btn-warning editRow'><i class='fa fa-pencil'></i></button>" + "</td>" +
	  		  "</tr>";
	  	}		

		document.getElementById("myTable").tBodies[0].innerHTML = txt;
	}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
})();


function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++ ) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


//Delete table row
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








