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

//Show Modal Popup
(function(){
    var i, j, k, l;

    var colors = ['green', 'red', 'dodgerBlue', 'pink', 'yellow', 'orange', 'slateBlue','violet','DarkBlue' ];
    var colorBox = document.querySelectorAll('.colorList li a');
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
    console.log(chooseColor)

    function openModal(){
        var chooseColor = this.previousElementSibling;
        console.log(chooseColor)
        //var colorAttr = chooseColor.getAttribute('data-color');
       // console.log(colorAttr)

        // for (l = 0; l < colorBox.length; l++){
        //     colorBox[l].getAttribute('data-color', colorAttr[l]).classList.remove('disable')
        // }

        for(l = 0; l < chooseColor.length; l++){
            var colorAttr = chooseColor[l].getAttribute('data-color');
            console.log(colorAttr)
            colorBox[i].getAttribute('[data-color='+ colorAttr +']').classList.remove('disable');
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
        var hexColor = this.getAttribute('data-color');
        //alert(hexColor);
        chooseColor.setAttribute('data-color', hexColor);
        
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
        closeModal();
    }

    

 
})();