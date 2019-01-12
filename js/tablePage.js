
function formValidate(){
    var name = document.MyForm.name.value;
    if( name == "" ){
        alert( "Please provide Name!" );
        document.myForm.name.focus() ;
        return false;
    }

    if( name.length < 3 ||  !isNaN( name )){
        alert( "Please provide a valid name!" );
        document.myForm.name.focus() ;
        return false;
    } 

    var design = document.MyForm.design.value;
    if( design == "" ){
        alert( "Please provide Designation!" );
        document.myForm.design.focus() ;
        return false;
    }
    if( design.length < 3 ||  !isNaN( design )){
        alert( "Please provide a Designation!" );
        document.myForm.design.focus() ;
        return false;
    }

    var expert = document.MyForm.expert.value;
    if( expert == "" ){
        alert( "Please provide Exprience!" );
        document.myForm.expert.focus() ;
        return false;
    }
    if( expert.length < 3 ||  !isNaN( expert )){
        alert( "Please provide a Valid Exprience!" );
        document.myForm.expert.focus() ;
        return false;
    } 
     
    var tech = document.MyForm.tech.value;
    if( tech == "" ){
        alert( "Please provide Technology!" );
        document.myForm.tech.focus() ;
        return false;
    }
    if( tech.length < 3 ||  !isNaN( tech )){
        alert( "Please provide a Valid Technology!" );
        document.myForm.tech.focus() ;
        return false;
    }


    if( document.MyForm.rate.value == "-1" ){
        alert( "Please provide Rating!" );
        return false;
    }

    return( true ); 
}


//Open add Record Modal
(function(){
    var i, j, k, l;
    var openModalBtn = document.querySelectorAll('.addRecord');
    var activeM = document.getElementById('addRecord');

    //Open Modal 
    function openModal(e){
        e.preventDefault();

        //Show Modal
        activeM.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        // //Add dark shadow behind modal
        var mShadow = document.createElement('div');
        mShadow.setAttribute('class','mShadow');    
        activeM.parentNode.insertBefore(mShadow, activeM);   
        mShadow.appendChild(activeM);
    
    }

    for(i = 0; i < openModalBtn.length; i++ ){
        openModalBtn[i].addEventListener("click", openModal); 
        //deleteBtn[i].onclick = openModal;
    }

      var MDismis = document.querySelectorAll('[data-dismiss]');

      function hideModal(){        
          var thisModal = this.closest('.gModal');
          thisModal.classList.add('hide');
          document.body.removeAttribute('style');
          
          // remove Shadow
          // select element to unwrap
          var mShadow = document.querySelector('.mShadow');

          // get the element's parent node       
          var mParent = mShadow.parentNode;

          // move all children out of the element
          while (mShadow.firstChild) mParent.insertBefore(mShadow.firstChild, mShadow);         

          // remove the empty element
          mParent.removeChild(mShadow);
      }

      for (j = 0; j < MDismis.length; j++ ){
        MDismis[j].addEventListener("click", hideModal); 
      }
})


//Delete a row from table
(function(){
    var i, j, k, l, m;
    var openModalBtn = document.querySelectorAll('.openModal');
    var deleteRow = document.querySelectorAll('.deleteRow')
    var activeM = document.getElementById('deleteRowModal');

    
    var tRow = 'null';

    //Open Modal 
    function openModal(e){
        e.preventDefault();

        //Show Modal
        activeM.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        // //Add dark shadow behind modal
        var mShadow = document.createElement('div');
        mShadow.setAttribute('class','mShadow');    
        activeM.parentNode.insertBefore(mShadow, activeM);   
        mShadow.appendChild(activeM);

    
        //Add color Behind selected row
        tRow = this.closest('tr');
        tRow.classList.add('active');
    }

        //Hide Modal
      var MDismis = document.querySelectorAll('[data-dismiss]');

      function hideModal(){        
          var thisModal = this.closest('.gModal');
          thisModal.classList.add('hide');
          document.body.removeAttribute('style');
          
          // remove Shadow
          // select element to unwrap
          var mShadow = document.querySelector('.mShadow');

          // get the element's parent node       
          var mParent = mShadow.parentNode;

          // move all children out of the element
          while (mShadow.firstChild) mParent.insertBefore(mShadow.firstChild, mShadow);
          tRow.classList.remove('active');

          // remove the empty element
          mParent.removeChild(mShadow);
      }

      for (j = 0; j < MDismis.length; j++ ){
        MDismis[j].addEventListener("click", hideModal); 
      }


    function deleteRecord(){    
        tRow.parentNode.removeChild(tRow);
        //hideModal();
    }

    for(i = 0; i < openModalBtn.length; i++ ){
        openModalBtn[i].addEventListener("click", openModal); 
        //deleteBtn[i].onclick = openModal;
    }

    for(k = 0; k < deleteRow.length; k++ ){
        deleteRow[k].addEventListener("click", deleteRecord); 
        //deleteBtn[i].onclick = openModal;
    }

    for(l = 0; l < deleteRow.length; l++ ){
        deleteRow[l].addEventListener("click", hideModal); 
        //deleteBtn[i].onclick = openModal;
    }    

}());