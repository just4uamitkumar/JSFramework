function atmApp(){
    //e.preventDefault();
    var amountValue = document.atmForm.amount.value;
    var price = document.getElementsByClassName('currency');
    var noteCount = document.getElementById('noteCount');
    var x = parseInt(amountValue)
        
    if(amountValue == ''){
        alert('Enter Amount you want to despatch');        
    }  
     

    if(x >= 2000) {
        document.getElementById('price10').innerHTML = x/2000;
        document.getElementById('price9').innerHTML = (x%2000)/500;
        document.getElementById('price8').innerHTML = ((x%2000)/500)/200;
    }
    
    else if(x >= 500){
        document.getElementById('price9').innerHTML = x/500;
    }

    else if(x >= 200){
        document.getElementById('price8').innerHTML = x/200;
    }

    else if(x >= 100){
        document.getElementById('price7').innerHTML = x/100;
    }

    else if(x >= 50){
        document.getElementById('price6').innerHTML = x/50;
    }

    else if(x >= 20){
        document.getElementById('price5').innerHTML = x/20;
    }

    else if(x >= 10){
        document.getElementById('price4').innerHTML = x/10;
    }

    else if(x >= 5){
        document.getElementById('price3').innerHTML = x/1;  
    }

    else if(x >= 2){
        document.getElementById('price2').innerHTML = x/2; 
        document.getElementById('price1').innerHTML = x%2;
    }
    else{
        document.getElementById('price1').innerHTML = x/1;       
    }


    // for (var i = 0; i < price.length; i++){
    //     x += price[i];
               
    // }

    // noteCount.innerHTML = ;
} 