//Social Slider 
(function (){ 
    var xSocial = [ "FB", "T", "G", "I", "Y" ];
    var cSocial = [ "Facebook", "Twitter", "Google", "Instagram", "YouTube" ];
    var BG = [ "#3b5998", "#1da1f2", "#679e37", "#262626", "#e42b26" ];
    var social = document.getElementsByClassName('social');    
    var i, j, k;

    function moveSocial(){             

        if(this.classList.contains('move')){
            this.classList.remove('move');
        }
        else{  
            for (j = 0; j < social.length; j++) { 
                social[j].classList.remove("move");
            }      
            this.classList.add('move');
        }      
    }

    for (i = 0; i < social.length; i++) {
        social[i].children[0].style.backgroundColor = BG[i];
        social[i].children[0].innerHTML = cSocial[i];
        social[i].children[1].style.backgroundColor = BG[i];
        social[i].children[1].innerHTML = xSocial[i];
        social[i].onclick = moveSocial;   
    } 
 }());

 
(function(){
    var i, j, k;
    var dashDiv = document.getElementsByClassName('DashSlider')[0]
    var dashDb = document.querySelectorAll('.DashSlider a'); 
    slideDiv = document.querySelectorAll('.SlideDiv');    

    function moveDashSlider(event){             
        event.preventDefault();
        var thisATTR = this.getAttribute('href');
        thisATTR = thisATTR.replace('#','');
        var slideDivId = document.getElementById(thisATTR);        
       
        if(this.classList.contains('active')){
            this.classList.remove('active');
            slideDivId.classList.remove('active');
        }
        else{

            for (j = 0; j < dashDb.length; j++) { 
                dashDb[j].classList.remove("active");
            }

            for (k = 0; k < slideDiv.length; k++) { 
                slideDiv[k].classList.remove("active");
            }            
            this.classList.add('active');
            slideDivId.classList.add('active');
        } 
    }

    for (i = 0; i < dashDb.length; i++) {      
        dashDb[i].onclick = moveDashSlider;
    } 

}()); 