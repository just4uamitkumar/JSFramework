
$(function(){

    //Change select dropdown color
    $('select').on('change', function() {
        if ($(this).val() == "-1") {
            return $(this).css('color', '#8e8e8e');
        } else {
            return $(this).css('color', '#000');
        }
    });

    var $addDataForm = $('[name=fillRecord]');
    var $tbody = $('tbody');  
    var url = "./js/db/user4.json";  

    //Add TodoList
    $addDataForm.on('submit', function(e){
        e.preventDefault();
        //alert('test');       

        var newFName = $addDataForm.find('input[name="fname"]');
        var newLName = $addDataForm.find('input[name="lname"]');        
        var newDob = $addDataForm.find('input[name="dob"]');
        var newExp = $addDataForm.find('input[name="experience"]');
        var newOccupation = $addDataForm.find('select[name="occ"]');

        if( newFName.val() == "" ){
            alert( "Please provide First Name!" );
            newFName.focus();
            return false;
        }

        if( newLName.val() == "" ){
            alert( "Please provide Last Name!" );
            newLName.focus();
            return false;
        }
        
        if( newDob.val() == "" ){
            alert( "Please provide Date of Birth!" );
            newDob.focus();
            return false;
        }

        if( newExp.val() == "" ){
            alert( "Please provide Experience!" );
            newExp.focus();
            return false;
        }

        if( isNaN( newExp.val() ) ){
            alert( "Enter only numberic digits in Experience" );
            newExp.focus();
            return false;
        }

        if( newExp.val().length > 2 ){
            alert( "Enter Valid Experience!" );
            newExp.focus();
            return false;
        }

        if( newOccupation.val() == "-1" ){        
            newOccupation.focus();
            alert( "Please provide Occupation!" );
            return false;
        }

        //return( true ); 

        $addDataForm.find('input').val('');
        $addDataForm.find('select').val('-1');

        // $.ajax({        
        //   url:url,
        //   method:'POST',     
        //   data: {
        //     firstName: newFName.val(),
        //     lastName: newLName.val(),
        //     age: newAge.val(),
        //     dob: newDob.val(),
        //     occupatoin: newOccupation.val()
        //   }
        // }).done(function(newId){
        //    var tr = $('<tr/>');
        //    tr.append("<td>" + newId.firstName + "</td>");
        //    tr.append("<td>" + newId.lastName + "</td>");
        //    tr.append("<td>" + newId.age + "</td>");
        //    tr.append("<td>" + newId.dob + "</td>");
        //    tr.append("<td>" + newId.occupatoin + "</td>");
        //    tr.append("<td>" + newId.id + "</td>");         
        // });

        //   $tbody.append(tr)
        // }).fail(function(){
        //   //Err
        // });

        var tr = $('<tr/>');
        tr.append("<td>" + newFName.val() + "</td>");
        tr.append("<td>" + newLName.val() + "</td>");       
        tr.append("<td>" + newDob.val() + "</td>");
         tr.append("<td>" + newExp.val() + "</td>");
        tr.append("<td>" + newOccupation.val() + "</td>");
        $tbody.append(tr);    
    });
    //end form submit method


    //Read JSON Data
    $.getJSON(url, function (data) {
        var tr;
        for (var i = 0; i < data.users.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data.users[i].id + "</td>");
            tr.append("<td>" + data.users[i].firstname + "</td>");
            tr.append("<td>" + data.users[i].lastname + "</td>");            
            tr.append("<td>" + data.users[i].dob + "</td>");
            tr.append("<td>" + data.users[i].experience + "</td>");
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
    //End getJson
});
//End function





