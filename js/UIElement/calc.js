//Tab Function
(function (){
    var i, j, k, x, y;
    var button = document.querySelectorAll('button');
    var calcVal = document.getElementById('calcVal');
    
   
    for (i = 0; i < button.length; i++) {       
        button[i].addEventListener("click", EnterKey);
    }  
    
    function EnterKey(){        
        var btnText = this.name;
        if(btnText === '=' ){
            calculate();
        }
        
        else if(btnText === 'C'){
          reset();
        }
        
        else if(btnText === "CE"){
            backspace();
        }
        
        else {
            calcVal.value = calcVal.value + btnText
          
        }
        
       
    }

    
   function calculate(){
       try{
           calcVal.value = eval(calcVal.value || '') + ''
       }
       catch(e){
           calcVal.value = 'error'
      }
   }
    
    function reset() {
        calcVal.value =''
    }
    
    function backspace()  {
      calcVal.value.slice(0, -1);        
    }
    
    function result() {
        calcVal.value=""       
    }

}());