//First Accordion
(function (){
    var acc = document.querySelectorAll('[data-acc]');
    var accWrap = document.getElementsByClassName("accWrapper");
    var accHead = document.querySelectorAll(".accWrapper > h2");   

    var arrAcc = ['First Accordion', 'Second Accordion', 'Third Accordion', 'Fourth Accordion'];
    var i, j, k;
    
    arrAcc.forEach((elem, index) => {       
        accHead[index].innerHTML = elem; 
        acc[index].innerHTML = elem;
    });  

    for (i = 0; i < acc.length; i++) { 
        acc[i].onclick = function(){
            var accAttr = this.getAttribute("data-acc");        
            var y = document.getElementById(accAttr);

            if(this.classList.contains('active')){
                 this.classList.remove('active');
                  y.classList.remove('active');
            }
            else{
                for (j = 0; j < accWrap.length; j++) { 
                    accWrap[j].classList.remove("active");
                }
               
                for (k = 0; k < acc.length; k++) {
                    acc[k].classList.remove("active");                           
                }

               this.classList.add('active');
               y.classList.add('active');
            }            
        }
    }      
}());