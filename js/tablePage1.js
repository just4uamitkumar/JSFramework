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
    var colorItem = document.querySelectorAll('.colorList li a');

    //Add color on Popup items
    for (i = 0; i < colorItem.length; i++){
        colorItem[i].setAttribute('data-color', colors[i])
    }

    var pickBtn = document.querySelectorAll('.pickColor');
    var colorBox = document.querySelectorAll('.color');
    //var colorLiA = document.querySelectorAll('#chooseColor .colorList > li')

    //var chooseColor = null;

    function openModal(){
        var chooseColor = this.parentNode.childNodes[0];
        //var colorAttr = chooseColor.getAttribute('data-color');
        console.log(chooseColor)

        // for(j = 0; j < chooseColor.length; j++){
        //     var colorAttr = chooseColor[j].getAttribute('data-color');
        //     document.querySelectorAll('a[data-color='+colorAttr'+]').classList.remove('disable');
        // }
        //var colorAttr = chooseColor.getAttribute('data-color');

        
                
                
        
        document.getElementById('chooseColor').classList.remove('hide');        
    }

    for(j = 0; j < pickBtn.length; j++ ){       
        pickBtn[j].addEventListener("click", openModal);       
    }

    // $('.color + .pickColorBtn').click(function(){
    //     chooseColor = $(this).siblings('.color');
    //     colorAttr = chooseColor.attr('data-color');
    //     $('#chooseColor .colorListA > li').find('[data-color='+colorAttr+']').removeClass('disable');
    //     $('#chooseColor').wrap('<div class="shadowBG darken"></div>').removeClass('hide');
    // });
})();