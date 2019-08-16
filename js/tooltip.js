
(function(){
    
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;

//Tooltip Function
function tooltip(){
    var tip = document.querySelectorAll('[data-title]');
    function tipHover(){        
        var dataDesc = this.getAttribute("data-title");
        var dataDir = this.getAttribute("data-placement");
        var posL = this.offsetLeft;
        var posT = this.offsetTop;
        var tipWidth = this.clientWidth;
        var tipHeight = this.clientHeight;

        var Ttip = document.createElement('div');
        document.body.appendChild(Ttip); 
        Ttip.classList.add('tooltip');
        Ttip.classList.add(dataDir);
        Ttip.innerHTML = dataDesc
        var Theight = Ttip.clientHeight;
        var Twidth = Ttip.clientWidth;

        if(dataDir == 'left' && posL < Twidth){ 
             dataDir = 'right';        
             Ttip.classList.remove('left');
            Ttip.classList.add('right');
        }

        if(dataDir == 'right' && posL > winWidth - Twidth - tipWidth ){ 
             dataDir = 'left';        
             Ttip.classList.remove('right');
            Ttip.classList.add('left');
        }

        if(dataDir == 'top' && posT < Theight + 10 ){ 
             dataDir = 'bottom';        
             Ttip.classList.remove('top');
            Ttip.classList.add('bottom');
        }

        if(dataDir == 'bottom' && posT > winHeight - Theight ){ 
            dataDir = 'top';        
            Ttip.classList.remove('bottom');
            Ttip.classList.add('top');
        }
           

        if(dataDir == 'top'){
            Ttip.style.left = posL + (tipWidth - Twidth)/2 + 'px';
            Ttip.style.top  = posT - Theight - 10 + 'px'; 
        }

        if(dataDir == 'right'){           
            Ttip.style.left = posL + tipWidth + 10 + 'px';
            Ttip.style.top  = posT + (tipHeight - Theight)/2 +'px'; 
        }

        if( dataDir == 'left'){           
            Ttip.style.left = posL - Twidth - 10 + 'px';
            Ttip.style.top  = posT + (tipHeight - Theight)/2 +'px'; 
        }

        if( dataDir == 'bottom'){           
            Ttip.style.left = posL + (tipWidth - Twidth)/2 + 'px';
            Ttip.style.top  = posT +  tipHeight + 10 + 'px'; 
        }    
    }

    function tipOut() {        
        var elem = document.getElementsByClassName("tooltip")[0];
        elem.parentNode.removeChild(elem);
    }

    for (var t = 0; t < tip.length; t++) {
        tip[t].addEventListener("mouseover", tipHover);
        
        tip[t].addEventListener("mouseout", tipOut);
    }    

}

tooltip();
})();