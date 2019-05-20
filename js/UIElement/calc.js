//Tab Function
(function (){
    var i, j, k, x, y;
    var numbBtn = document.querySelectorAll('.numb');
    var countBtn = document.querySelectorAll('.count');
    var result = document.getElementById('result');
    var calcVal = document.getElementById('calcVal');
    
   
    for (i = 0; i < numbBtn.length; i++) {       
        numbBtn[i].addEventListener("click", EnterKey);
    }  
    
    function EnterKey(){        
        var btnText = this.innerHTML;
        calcVal.value = '';
        calcVal.value += btnText;
    }

    document.getElementById('del').onclick = function(){
        if (calcVal.value.length > 0){
           calcVal.value = calcVal.value.substring(0, calcVal.value.length - 1); 
        } 
    }

    document.getElementById('delAll').onclick = function(){
        if (calcVal.value.length > 0){
           calcVal.value = 0; 
        } 
    }

}());