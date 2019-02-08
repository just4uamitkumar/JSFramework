
$(function(){

  var $addDataForm = $('[name=fillRecord]');
  var $tbody = $('tbody');  
  var url = "./js/db/user4.json";
  //Template
  //var source = $('#tableRow').html();
  //var template = Handlebars.compile(source)

  //Add TodoList
  $addDataForm.on('submit', function(e){
    e.preventDefault();
    //alert('test');       
    
    var newFName = $addDataForm.find('input[name="fname"]');
    var newLName = $addDataForm.find('input[name="lname"]');
    var newAge = $addDataForm.find('input[name="age"]');
    var newDob = $addDataForm.find('input[name="dob"]');
    var newOcc = $addDataForm.find('select[name="occ"]');

    if( newFName.val() == "" ){
        alert( "Please provide First Name!" );
        newFName.focus();
        return false;
    }

    else if( newLName.val() == "" ){
        alert( "Please provide Last Name!" );
        newLName.focus();
        return false;
    }

    else if( newAge.val() == "" ){
        alert( "Please provide Age!" );
        newAge.focus();
        return false;
    }

    else if( isNaN( newAge.val() ) ){
        alert( "Enter only numberic digits in Age" );
        newAge.focus();
        return false;
    }

    else if( newAge.val().length > 2 ){
        alert( "Enter Valid Age!" );
        newAge.focus();
        return false;
    }

    else if( newDob.val() == "" ){
        alert( "Please provide Date of Birth!" );
        newDob.focus();
        return false;
    }

    else if( newOcc.val() == "-1" ){
    	newOcc.focus();
        alert( "Please provide Occupation!" );
        return false;
    }

    else{
    	return true 
    }

    $addDataForm.find('input').val('');
    $addDataForm.find('select').val('-1');

    $.ajax({
      url:url,
      method:'POST',
      data: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        dob: dob,
        occupatoin: occ
      }
    }).done(function(newId){
      var listItem = template({
            firstName: newId.firstName,
            lastName: newId.lastName,
            age: newId.age,
            dob: newId.dob,
            occ: newId.occ,
            id:newId.id
          });

      $tbody.append(listItem)
    }).fail(function(){
      //Err
    }); 

});



	//Read JSON Data
	$.getJSON(url, function (data) {
	    var tr;
	    for (var i = 0; i < data.users.length; i++) {
	        tr = $('<tr/>');
	        tr.append("<td>" + data.users[i].id + "</td>");
	        tr.append("<td>" + data.users[i].firstname + "</td>");
	        tr.append("<td>" + data.users[i].lastname + "</td>");
	        tr.append("<td>" + data.users[i].age + "</td>");
	        tr.append("<td>" + data.users[i].dob + "</td>");
	        tr.append("<td>" + data.users[i].occupatoin + "</td>");
	        tr.append("<td>" + '<button class="btn btn-warning deleteRow" onclick=deleteRowModal(event);>' + 
					        	'<i class="fa fa-trash"></i>' +
					        	'</button>' +
            					'<button class="btn btn-warning editRow">' + 
            					'<i class="fa fa-pencil"></i>' + 
            					'</button>' + "</td>");
	        $tbody.append(tr);
	        console.log(data);
	    }
	});
});





