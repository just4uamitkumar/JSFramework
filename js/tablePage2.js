//Open add Record Modal
(function(){
    var i, j, k, l;
    var addRecordBtn = document.querySelectorAll('.addRecord');
    var activeM = document.getElementById('addRecord');
    //Open Modal 
    function addRecord(e){
        e.preventDefault();
        //Show Modal
        activeM.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        //Add dark shadow behind modal
        var mShadow = document.createElement('div');
        mShadow.setAttribute('class','mShadow');    
        activeM.parentNode.insertBefore(mShadow, activeM);   
        mShadow.appendChild(activeM);    
    }

    for(i = 0; i < addRecordBtn.length; i++ ){
        addRecordBtn[i].addEventListener("click", addRecord);
    }
      
})();


//Open Delete Row Modal 
var tRow = 'null';

function deleteModal(event){
  var x = event.target;  
  tRow = x.closest('.headRow');
  tRow.classList.add('active');

  var activeM = document.getElementById('deleteRowModal');

  //Show Modal
  activeM.classList.remove('hide');
  document.body.style.overflow = 'hidden';

  // //Add dark shadow behind modal
  var mShadow = document.createElement('div');
  mShadow.setAttribute('class','mShadow');    
  activeM.parentNode.insertBefore(mShadow, activeM);   
  mShadow.appendChild(activeM);   
}


//Close Modal
$("[data-dismiss='modal']").click(function(){
  
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

  //Remove active from tRow
  if(tRow.classList.contains('active')){
    tRow.classList.remove('active')
  } 

});


//Delete a row from table
// (function(){
//   debugger;
//     var i, j, k, l, m;
//     var deleteModalBtn = document.querySelectorAll('.deleteModal');
//     //var deleteRow = document.querySelectorAll('.deleteRow')
//     //var activeM = document.getElementById('deleteRowModal');
    
//     //var tRow = 'null';

//     //Open Modal 
//     function deleteModal(){
//         // e.preventDefault();

//         // //Show Modal
//         // activeM.classList.remove('hide');
//         // document.body.style.overflow = 'hidden';

//         // // //Add dark shadow behind modal
//         // var mShadow = document.createElement('div');
//         // mShadow.setAttribute('class','mShadow');    
//         // activeM.parentNode.insertBefore(mShadow, activeM);   
//         // mShadow.appendChild(activeM);

    
//         // //Add color Behind selected row
//         // tRow = this.closest('tr');
//         // tRow.classList.add('active');
//         alert();
//     }


//     // function deleteRecord(){    
//     //     tRow.parentNode.removeChild(tRow);
//     //     //hideModal();
//     // }

//     for(i = 0; i < deleteModalBtn.length; i++ ){
//       debugger;
//         deleteModalBtn[i].addEventListener("click", deleteModal); 
//         //deleteBtn[i].onclick = openModal;
//     }

//     // for(k = 0; k < deleteRow.length; k++ ){
//     //     deleteRow[k].addEventListener("click", deleteRecord); 
//     //     //deleteBtn[i].onclick = openModal;
//     // }

//     // for(l = 0; l < deleteRow.length; l++ ){
//     //     deleteRow[l].addEventListener("click", hideModal); 
//     //     //deleteBtn[i].onclick = openModal;
//     // }    

// }());



 
$(function(){
  var $addTodoForm = $('#addTodo');
  var $tbody = $('tbody');

  var url = 'http://localhost:3000/todos';

  //Template
  var source = $('#listItemTemplate').html();
  var template = Handlebars.compile(source)

  //Add TodoList
  $addTodoForm.on('submit', function(e){
    e.preventDefault();
    //alert('test');
    var newTodo = $addTodoForm.find('input').val();

    
    $addTodoForm.find('input').val('');

    $.ajax({
      url:url,
      method:'POST',
      data: {
        text: newTodo
      }
    }).done(function(newTodo){
      var listItem = template({
            text: newTodo.text,
            id:newTodo.id
          });

      $tbody.append(listItem)
    }).fail(function(){
      //Err
    });

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

  });


  //Read
  $.ajax({
    url:url,
    method:'GET'
  }).done(function(data){
    data.forEach(function(dataitem){
      var listItem = template({
        text: dataitem.text,
        id: dataitem.id
      });

      $tbody.append(listItem)
    })

  }).fail(function(){
    //Error
  });


  //Delete
  $('#deleteRowModal').on('click', '.deleteRow', function(e){    
    var id = tRow.getAttribute('id')
    tRow.remove();
    
    console.log('id', id)

    $.ajax({
      url:url + '/' + id,
      method:'DELETE',
    });


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

    //Remove active from tRow
    if(tRow.classList.contains('active')){
      tRow.classList.remove('active')
    } 

  });

  var editSource = $('#editTemplate').html();
  var editTemplate = Handlebars.compile(editSource);  

  //Edit
  $tbody.on('click', '.editBtn', function(event){

    var x = event.target;    
    tRow = $(x).closest('tr');
    tRow.addClass('active');


    //add content of List item
    var content = tRow.find('.text').html();


    //Submit edit form
    var edithtml = editTemplate({
      value: content
    })

    $('body').append(edithtml);

    var $editTodoForm = $('#editTodo');


    $("[data-dismiss='modal']").click(function(){
  
      var thisModal = this.closest('.gModal');

      thisModal.classList.add('hide');      

      $(tRow).removeClass('active')

    });

    $editTodoForm.on('submit', function(e){
      e.preventDefault();

      //replace new value with list item content
      var newContent = $editTodoForm.find('input').val();

      tRow.find('.text').html(newContent);

      //Show List item
      tRow.find('.text').show();
      tRow.removeClass('active');

      $editTodoForm.remove();

      //var id = tr.attr('id');
      var id = tRow.attr('id')

      $.ajax({
        url: url + '/' + id,
        method: 'PUT',
        data:{
          text:newContent
        }
      })
    });   
    
  });


});



// function formValidate(){
//     var name = document.MyForm.name.value;
//     if( name == "" ){
//         alert( "Please provide Name!" );
//         document.myForm.name.focus() ;
//         return false;
//     }

//     if( name.length < 3 ||  !isNaN( name )){
//         alert( "Please provide a valid name!" );
//         document.myForm.name.focus() ;
//         return false;
//     } 

//     var design = document.MyForm.design.value;
//     if( design == "" ){
//         alert( "Please provide Designation!" );
//         document.myForm.design.focus() ;
//         return false;
//     }
//     if( design.length < 3 ||  !isNaN( design )){
//         alert( "Please provide a Designation!" );
//         document.myForm.design.focus() ;
//         return false;
//     }

//     var expert = document.MyForm.expert.value;
//     if( expert == "" ){
//         alert( "Please provide Exprience!" );
//         document.myForm.expert.focus() ;
//         return false;
//     }
//     if( expert.length < 3 ||  !isNaN( expert )){
//         alert( "Please provide a Valid Exprience!" );
//         document.myForm.expert.focus() ;
//         return false;
//     } 
     
//     var tech = document.MyForm.tech.value;
//     if( tech == "" ){
//         alert( "Please provide Technology!" );
//         document.myForm.tech.focus() ;
//         return false;
//     }
//     if( tech.length < 3 ||  !isNaN( tech )){
//         alert( "Please provide a Valid Technology!" );
//         document.myForm.tech.focus() ;
//         return false;
//     }


//     if( document.MyForm.rate.value == "-1" ){
//         alert( "Please provide Rating!" );
//         return false;
//     }

//     return( true ); 
// }