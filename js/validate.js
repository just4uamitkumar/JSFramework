
function validate (){

    var fname = document.myForm.fname.value;
    if( fname == "" ){
        alert( "Please provide First Name!" );
        document.myForm.fname.focus() ;
        return false;
    }

    if( fname.length < 3 ){
        alert( "Please provide a valid name!" );
        document.myForm.fname.focus() ;
        return false;
    }     

    var lname = document.myForm.lname.value;
    if( lname == "" ){
        alert( "Please provide Last Name!" );
        document.myForm.lname.focus() ;
        return false;
    }

    if( lname.length < 2 ){
        alert( "Please provide Valid Last Name!" );
        document.myForm.lname.focus() ;
        return false;
    }

    var username = document.myForm.username.value;  
    if( username == "" ){
        alert( "Please provide Username!" );
        document.myForm.username.focus() ;
        return false;
    }

    if( username.length > 6 ){
        alert( "Please provide valid Username!" );
        document.myForm.username.focus() ;
        return false;
    }

    var email = document.myForm.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if( email == "" ){
        alert( "Please provide Email!" );
        document.myForm.email.focus() ;
        return false;
    }

    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }      

    var phone = document.myForm.phone.value
    if( phone == "" ){
        alert( "Please provide your phone number!" );
        document.myForm.phone.focus();
        return false;
    }

    if( phone.length != 10 ){
        alert( "Enter 10 digit mobile number!" );
        document.myForm.phone.focus() ;
        return false;
    }

    if( isNaN( phone ) ){
        alert( "Enter enter only numberic digits" );
        document.myForm.phone.focus() ;
        return false;
    }

    var social = document.myForm.social;    
    var chkd = social[0].checked || social[1].checked || social[2].checked || social[3].checked 
    || social[4].checked || social[5].checked

    if (chkd == false) {
        alert ("Please choose at least one Social Interest");
        return false;
    }       
    
    
    if( document.myForm.country.value == "-1" ){
        alert( "Please provide your country!" );
        return false;
    }

    if( document.myForm.state.value == "-1" ){
        alert( "Please provide your state!" );
        return false;
    }

    if( document.myForm.city.value == "-1" ){
        alert( "Please provide your City Name!" );
        return false;
    }    

    var zip = document.myForm.Zip.value
    if( zip == "" || isNaN( zip ) ||  zip.length < 5){
        alert( "Please provide Pin Code in format ####!" );
        document.myForm.Zip.focus() ;
        return false;
    }       

    return( true );

}