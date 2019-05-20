
(function(){
    var i, j, k;
    var expandRow = document.querySelectorAll('.expandRow');
    var headRow = document.querySelectorAll('.headRow');
    var subrow = document.querySelectorAll('.subrow');
    
    function expandTable(){ 
        var head = this.closest('tr');
        
        if(this.classList.contains('active')){
            this.classList.remove('active');
            head.classList.remove('active');
        }

        else{            
            for(j = 0; j < expandRow.length; j++ ){
                expandRow[j].classList.remove('active');
            }

            for(k = 0; k < headRow.length; k++ ){
                headRow[k].classList.remove('active');
            }

            this.classList.add('active');
            head.classList.add('active');
        }
    }

    for(i = 0; i < expandRow.length; i++ ){
        expandRow[i].onclick = expandTable;
    }

}());

//change span value in td
(function(){
    var EditTd = document.querySelectorAll('td:not(:first-child)');
    var i, j, k;

    function editSpan(e){
        e.preventDefault;       
        var Span = this.getElementsByTagName('span')[0];
        var Input = this.getElementsByTagName('input')[0];        
        var spanValue = Span.innerHTML;       
        Span.classList.add('hide');

        if(this.contains(Input)) {
            Input.parentNode.removeChild(Input);
            Span.classList.remove('hide');                  
        }

        else{
            var tdInput = document.createElement('input');
            tdInput.setAttribute("type", "text");
            tdInput.setAttribute("value", spanValue);
            this.appendChild(tdInput);
            tdInput.classList.add('tdValue');
        }     
    }
    
    for(i = 0; i < EditTd.length; i++ ){       
        EditTd[i].addEventListener("dblclick", editSpan);       
    }
    
}());

(function(){
    var colorNames = ['Color A', 'Color B', 'Color C', 'Color D', 'Color E', 'Color F', 'Color G', 'Color H', 'Color I'];
    var n, txt =''
     for (var n=0; n < colorNames.length; n++) {
        txt += "<tr>" +
            "<td>" +
                "<div class='color'></div>"+
                "<button class='btn pickColor'>" +
                    "<i class='fa fa-eyedropper'></i>" +
                "</button>" +
            "</td>" + 
            "<td>" + colorNames[n] + "</td>" +                       
          "</tr>";  
    }
    document.getElementById("colorTable").tBodies[0].innerHTML = txt;
})();


//Show Modal Popup
(function(){

    var i, j, k, l;

    var colors = ['green', 'red', 'dodgerBlue', 'pink', 'yellow', 'orange', 'slateBlue','violet','DarkBlue' ];
    
    var colorBox = document.querySelectorAll('.colorList li a');
    colorLi = document.querySelectorAll('.colorList li')
    var actModal = document.getElementById('chooseColor');


   

    function closeModal(){
        actModal.classList.add('hide');
        var mShadow = document.querySelector('.mShadow');

        // get the element's parent node       
        var mParent = mShadow.parentNode;

        // move all children out of the element
        while (mShadow.firstChild) mParent.insertBefore(mShadow.firstChild, mShadow);

        // remove the empty element
        mParent.removeChild(mShadow); 
    }

    //Add color on Popup items
    for (i = 0; i < colorBox.length; i++){
        colorBox[i].setAttribute('data-color', colors[i])
    }

    var pickBtn = document.querySelectorAll('.pickColor');
    var colorCont = document.querySelectorAll('.color');
    
    var chooseColor = null;

    function openModal(){
        chooseColor = this.previousElementSibling;
        var colorAttr = chooseColor.getAttribute('data-color');
        
        if(colorAttr != null){
            document.querySelectorAll('.colorList li a[data-color=' + colorAttr + ']')[0].classList.remove('disable');
        }        
        
        //Add dark shadow behind modal
        actModal.classList.remove('hide');        
        var mShadow = document.createElement('div');
        mShadow.setAttribute('class','mShadow');    
        actModal.parentNode.insertBefore(mShadow, actModal);   
        mShadow.appendChild(actModal);
    }

    //Fill Color in Color Container 
    function fillColor(e){         
        e.preventDefault();
        this.classList.add('disable')
        var hexColor = this.getAttribute('data-color');
        //alert(hexColor);
        chooseColor.setAttribute('data-color', hexColor);
        document.getElementById('clearBtn').classList.remove('disable');

        //Remove Disable from Finish Button 
        var x = document.querySelectorAll('.colorList li a.disable');        

        if(x.length == 9){
            document.getElementById('finish').classList.remove('disable');        
        }
        
        closeModal(); 
    }

    for(j = 0; j < pickBtn.length; j++ ){       
        pickBtn[j].addEventListener("click", openModal);       
    }

    for(k = 0; k < colorBox.length; k++ ){       
        colorBox[k].addEventListener("click", fillColor);       
    }

    //Close Modal without fill color
    document.querySelectorAll('[data-dismiss="modal"]')[0].onclick = function(){
       
        var colorAttr = chooseColor.getAttribute('data-color');

        if(colorAttr != null){
            document.querySelectorAll('.colorList li a[data-color=' + colorAttr + ']')[0].classList.add('disable');
        }

        closeModal();
    }

    document.getElementById('clearBtn').onclick = function(){
        this.classList.add('disable');
        document.getElementById('finish').classList.add('disable');

        for(l = 0; l < colorBox.length; l++ ){  
            colorBox[l].classList.remove('disable');       
        }

        for(var m = 0; m < colorCont.length; m++ ){ 
            colorCont[m].removeAttribute('data-color');       
        }      

    }

    

 
})();