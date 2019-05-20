
//Change Color of select tag
function changeColor() {
	if(this.value == -1){
		this.style.color = '#8e8e8e'
	}
	else{
		this.style.color = '#000'
	}
}
document.getElementsByTagName("select")[0].addEventListener("change", changeColor);


var url = './js/db/user4.json';

(function() {
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
	  			"<td>" + myDate.getFullYear()+'-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-'+ myDate.getDate() + "</td>" +
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

//Form Submit with Validation
	function validate(event){
	 event.preventDefault();
		var currentRows = document.getElementById("myTable").tBodies[0].childNodes;

	var myArray = [];
	for (var i = 0; i < currentRows.length; i++) {		
	   var firstCellText = currentRows[i].cells[0].innerHTML;	  
	   myArray.push(firstCellText);

	}

	var greatestID = Math.max.apply(Math, myArray);

	var newFName = document.fillRecord.fname;	
    var newLName = document.fillRecord.lname;       
    var newDob = document.fillRecord.dob;
    var newExp = document.fillRecord.experience;
    var newOccupation = document.fillRecord.occ;

    if( newFName.value == "" ){
        alert( "Please provide First Name!" );
        newFName.focus();
        return false;
    }

    if( newLName.value == "" ){
        alert( "Please provide Last Name!" );
        newLName.focus();
        return false;
    } 
        
    if( newDob.value == "" ){
        alert( "Please provide Date of Birth!" );
        newDob.focus();
        return false;
    }

    // regular expression to match required date format   
    re = /^(\d{4})-(\d{1,2})-(\d{1,2})/

    if(newDob.value != '') {
      if(regs = newDob.value.match(re)) {
        // day value between 1 and 31
        if(regs[3] < 1 || regs[3] > 31) {
          alert("Invalid value for day: " + regs[1]);
          newDob.focus();
          return false;
        }
        // month value between 1 and 12
        if(regs[2] < 1 || regs[2] > 12) {
          alert("Invalid value for month: " + regs[2]);
          newDob.focus();
          return false;
        }
        // year value between 1902 and 2019
        if(regs[1] < 1902 || regs[1] > (new Date()).getFullYear()) {
          alert("Invalid value for year: " + regs[1] + " - must be between 1902 and " + (new Date()).getFullYear());
          newDob.focus();
          return false;
        }
      } else {
        alert("Invalid date format: " + newDob.value);
        newDob.focus();
        return false;
      }
    }

    if( newExp.value == "" ){
        alert( "Please provide Experience!" );
        newExp.focus();
        return false;
    }

    if( isNaN( newExp.value ) ){
        alert( "Enter only numberic digits in Experience" );
        newExp.focus();
        return false;
    }

    if( newExp.value > 10 ){
        alert( "Experience should not be more than 10 Years!" );
        newExp.focus();
        return false;
    }

    if( newOccupation.value == "-1" ){        
        newOccupation.focus();
        alert( "Please provide Occupation!" );
        return false;
    }
	
	//return false;
	var newTr = document.createElement('tr');       
    newTr.innerHTML+= "<td>" + (greatestID + 1) + "</td>" +
					    "<td>" + newFName.value + "</td>" +
					    "<td>" + newLName.value + "</td>" +   
					    "<td>" + newDob.value + "</td>" +
					    "<td>" + newExp.value + "</td>" +
					   "<td>" + newOccupation.value + "</td>" +
   						"<td>" + '<button class="btn btn-warning deleteRow" onclick=deleteRowModal(event);>' + 
				        '<i class="fa fa-trash"></i>' +
				        '</button>' +
				        '<button class="btn btn-warning editRow">' + 
				        '<i class="fa fa-pencil"></i>' + 
				        '</button>' + "</td>";

    document.getElementById("myTable").tBodies[0].appendChild(newTr);

	newFName.value = ""; 
	newLName.value = ""; 
	newDob.value = ""; 
	newExp.value = ""; 
	newOccupation.value = "-1";
	newOccupation.style.color = '#8e8e8e';
}


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
}








