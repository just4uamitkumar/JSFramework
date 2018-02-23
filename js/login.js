function login (){
	if( document.loginForm.username.value == "" ){
        alert( "Please provide user name!" );
        document.loginForm.username.focus() ;
        return false;
    }    

    if( document.loginForm.password.value == "" ){
        alert( "Please Enter Password!" );
        document.loginForm.password.focus() ;
        return false;
    }

    if( document.loginForm.password.value != "amit" && document.loginForm.username.value != "amit" ){
        alert( "You Entered wrong Username/Password" );
        document.loginForm.password.focus() ;
        document.loginForm.username.focus() ;
        return false;
    }

    return( true );	
}

(function (){
    document.getElementById('showPass').onmousedown = function(){
       if ( document.getElementById('password').value.length > 0) {       
            document.getElementById('password').type = "text";        
       } 
     }

    document.getElementById('showPass').onmouseup = function(){
        document.getElementById('password').type = "password";
    }

}());