  //amountValue = null;
var price = document.querySelectorAll('.currency');
var noteCount = document.getElementById('noteCount');

function resetVal(){
    for (var j = 0; j < price.length; j++){         
         price[j].innerHTML = 0;
         noteCount.innerHTML = 0;        
     }
}

function resetAmt(){
   document.atmForm.amount.value = '';
    
   resetVal();    
    
    document.getElementById('lastArr').innerHTML = 
        [...document.querySelectorAll(".currency")].map(e=>e.innerHTML);
};

function atmApp(){
   //debugger;
  var amountValue = document.atmForm.amount.value;    
    var x = amountValue;
    var abc = x;
    
    if(amountValue == ''){
        alert('Enter amount you want to despatch');
        return false;
    }
    
    resetVal();
      
   document.getElementById('firstArr').innerHTML = [...document.querySelectorAll(".currency")].map(e=>e.innerHTML);
           
   while(x > 0){
        if(x >= 2000) {
        document.getElementById('price10').innerHTML = Math.trunc(x/2000);
            x = x - (Math.trunc(x/2000) * 2000);
        }
       
        else if(x >= 500){
            document.getElementById('price9').innerHTML = Math.trunc(x/500);
            x = x - (Math.trunc(x/500) * 500);
        }
       
        else if(x >= 200){
            document.getElementById('price8').innerHTML = Math.trunc(x/200);
            x = x - (Math.trunc(x/200) * 200);
        }
       
        else if(x >= 100){
            document.getElementById('price7').innerHTML = Math.trunc(x/100);
            x = x - (Math.trunc(x/100) * 100);
        }
       
        else if(x >= 50){
            document.getElementById('price6').innerHTML = Math.trunc(x/50);
            x = x - (Math.trunc(x/50) * 50);
        }
       
        else if(x >= 20){
            document.getElementById('price5').innerHTML = Math.trunc(x/20);
            x = x - (Math.trunc(x/20) * 20);

        }
        else if(x >= 10){
            document.getElementById('price4').innerHTML = Math.trunc(x/10);
            x = x - (Math.trunc(x/10) * 10);

        }
        else if(x >= 5){
            document.getElementById('price3').innerHTML = Math.trunc(x/5);
            x = x - (Math.trunc(x/5) * 5);

        }
        else if(x >= 2){
            document.getElementById('price2').innerHTML = Math.trunc(x/2);
            x = x - (Math.trunc(x/2) * 2);
        }
       
        else if(x >= 1){
            document.getElementById('price1').innerHTML = Math.trunc(x/1);
            x = x - (Math.trunc(x/1) * 1);
        }
    }
    
     var arr =[];
    
     for (var h = 0; h < price.length; h++){         
         arr.push(parseInt(price[h].innerHTML));         
         var total = arr.reduce(function(a, b) { return a + b; }, 0);         
         noteCount.innerHTML = total       
     }    
   
     document.getElementById('lastArr').innerHTML = 
         [...document.querySelectorAll(".currency")].map(e=>e.innerHTML);
}


function delAmount(){    
   var amountValue = document.atmForm.amount.value;    
    document.atmForm.amount.value = amountValue.slice(0, -1);  
}

