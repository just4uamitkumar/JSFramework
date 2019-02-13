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