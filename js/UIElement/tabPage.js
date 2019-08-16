//Tab Function
(function (){
    var tab = document.querySelectorAll('[tab-id]');
    var tabWrapper =  document.getElementsByClassName("tabWrapper");
    var tabHead = document.querySelectorAll(".tabWrapper > h4");
    tab[0].classList.add("active");
    tabWrapper[0].classList.add("active");
    var i, j, y, z;
    
    
    var tabArr = ['First Tab', 'Second Tab', 'Third Tab', 'Fourth Tab'];
    
    tabArr.forEach((elem, index) => {       
        tab[index].innerHTML = (index + 1)  + ' : ' + elem; 
        tabHead[index].innerHTML = elem;
    });  
    
    function openTab(){
       for (j = 0; j < tabWrapper.length; j++) { 
           tabWrapper[j].classList.remove("active");
        }
        for (j = 0; j < tab.length; j++) {
            tab[j].classList.remove("active");
        }        
        this.classList.add("active");
        var tabAttr = this.getAttribute("tab-id");        
        var x = document.getElementById(tabAttr);       
        x.classList.add("active"); 
    }

    for (i = 0; i < tab.length; i++) { 
        tab[i].addEventListener("click", openTab);            
    }    
}());


//Select Tab by dropdown
(function() {
    var i, j; 
    var e = document.getElementById("tabSelect");            
    var eOpt = e.options;            
    var tabWrap =  document.getElementsByClassName("tabWrap");

    var tabArr = ['First Tab', 'Second Tab', 'Third Tab', 'Fourth Tab'];

    for (i = 0; i < eOpt.length; i++) { 
        eOpt[i].innerHTML = tabArr[i]; 
    }

    function selectTab(){
        var eValue = e.value;
        for (j = 0; j < tabWrap.length; j++) {
            tabWrap[j].classList.remove("active");
        } 

        var x = document.getElementById(eValue);
        x.classList.add("active"); 
    }

    e.addEventListener('change', selectTab);
}());


//Loop value from Select Box
(function() {    
    // get references to select list and display text box
    var sel = document.getElementById('scripts');
    var el = document.getElementById('display');

    function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

    // assign onclick handlers to the buttons
    document.getElementById('showVal').onclick = function () {
        el.value = sel.value;    
    }
    
    document.getElementById('showTxt').onclick = function () {
        // access text property of selected option
        el.value = sel.options[sel.selectedIndex].text;
    }

    document.getElementById('doLoop').onclick = function () {
        var opt = getSelectedOption(sel);
        el.value = opt.value;
    }            
}());

(function(){
    var x = document.querySelectorAll('.contentBlock');
    var xA = x[0].clientHeight;
    var xB = x[1].clientHeight;
    var xC = x[2].clientHeight;

   console.log(xA, xB, xC);
   var i;    

    for(i = 0 ; i < x.length; i++){

        if(xA>xB && xA>xC){
            x[i].style.height = xA + 'px';
        }

        else if(xB>xA && xB>xC){        
            x[i].style.height = xB + 'px';        
        }

        else if(xC>xA && xC>xA){
            x[i].style.height = xC + 'px';        
        }      
    }
    
    

}());