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
function closeModal(self){
  var thisModal = self.closest('.gModal');

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
}

//Close Modal
$("[data-dismiss='modal']").click(function(){  
   closeModal(this)
});
 
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

    //Close Modal
    closeModal(this);

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

    $.ajax({
      url:url + '/' + id,
      method:'DELETE',
    });

    //Close Modal
    closeModal(this);
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