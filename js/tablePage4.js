//Open Delete Row Modal 
var tRow = 'null';
function deleteRowModal(event){
  var x = event.target;  
  tRow = x.closest('tr');
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

function HideModal(self){
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
  HideModal(this)
});


$(function(){
  var $addDataForm = $('[name=fillRecord]');
  var $tbody = $('tbody');

  var url = 'http://localhost:3000/datas';

  //Template
  var source = $('#tableRow').html();
  var template = Handlebars.compile(source)

  //Add TodoList
  $addDataForm.on('submit', function(e){
    e.preventDefault();
    //alert('test');       
    
    var newName = $addDataForm.find('input[name="name"]').val();
    var newDesign = $addDataForm.find('input[name="design"]').val();
    var newExpert = $addDataForm.find('input[name="expert"]').val();
    var newTech = $addDataForm.find('input[name="tech"]').val();
    var newRate = $addDataForm.find('select[name="rate"]').val();

    if( newName == "" ){
        alert( "Please provide Name!" );
        $addDataForm.name.focus() ;
        return false;
    }

    if( newDesign == "" ){
        alert( "Please provide Designation!" );
        $addDataForm.newDesign.focus() ;
        return false;
    }

    if( newExpert == "" ){
        alert( "Please provide Experience!" );
        $addDataForm.newExpert.focus() ;
        return false;
    }

    if( isNaN( newExpert ) ){
        alert( "Enter enter only numberic digits in Experience" );
        $addDataForm.newExpert.focus() ;
        return false;
    }

    if( newExpert.length > 2 ){
        alert( "Enter Valid Experience!" );
        $addDataForm.newExpert.focus() ;
        return false;
    }

    if( newTech == "" ){
        alert( "Please provide Technology!" );
        $addDataForm.newTech.focus() ;
        return false;
    }

    if( newRate == "-1" ){
        alert( "Please provide Rating!" );
        return false;
    }

    //return( true ); 


    $addDataForm.find('input').val('');
    $addDataForm.find('select').val('-1');

    $.ajax({
      url:url,
      method:'POST',
      data: {
        name: newName,
        designation: newDesign,
        experience: newExpert,
        technology: newTech,
        rating: newRate
      }
    }).done(function(newId){
      var listItem = template({
            name: newId.name,
            designation: newId.designation,
            experience: newId.experience,
            technology: newId.technology,
            rating: newId.rating,
            id:newId.id
          });

      $tbody.append(listItem)
    }).fail(function(){
      //Err
    });   

  });


  //Read
  $.ajax({
    url:url,
    method:'GET'
  }).done(function(data){
    data.forEach(function(dataitem ){
      var listItem = template({
        name: dataitem.name,
        designation: dataitem.designation,
        experience: dataitem.experience,
        technology: dataitem.technology,
        rating: dataitem.rating,
        id: dataitem.id       
      });

      $tbody.append(listItem)
    })

  }).fail(function(){
    //Error
  });


 $('#deleteRowModal').on('click', '.confirmDelete', function(){
    //var x = e.target;
    //tRow = x.closest('tr');

    var id = tRow.getAttribute('id')
    tRow.remove();
    
    $.ajax({
      url:url + '/' + id,
      method:'DELETE',
    });
    HideModal(this);

  });


  var editSource = $('#editRow').html();
  var editTemplate = Handlebars.compile(editSource);  

  //Edit  
  $tbody.on('click', '.editRow', function(event){

    $('.editRow').attr('disable','disabled');
    $('.deleteRow').attr('disable','disabled');
    //alert('test');
    var x = event.target;
    tRow = $(x).closest('tr');
    $(tRow).addClass('hide');

    //add content of List item
    var content0 = $(tRow).find('.id').html();
    var content1 = $(tRow).find('.name').html();
    var content2 = $(tRow).find('.design').html();
    var content3 = $(tRow).find('.expert').html();
    var content4 = $(tRow).find('.tech').html();
    var content5 = $(tRow).find('.rate').html();   

    //Submit edit form
    var edithtml = editTemplate({
      id:content0,
      value1: content1,
      value2: content2,
      value3: content3,
      value4: content4,
      value5: content5
    })

    //tRow.insertAfter();
    $(edithtml).insertAfter(tRow);

    var $editData = $('#editData');

    //Add width to every td
    var arr = [];
    $("thead th").each(function(){
        arr.push($(this).width());
    });    

    $editData.find('td').each(function (index) {
      $(this).css('width', arr[index]);
    });

     $editData.on('reset', function(e){
        $editData.remove();
        $(tRow).removeClass('hide');
        $('.editRow').removeAttr('disable');
        $('.deleteRow').removeAttr('disable'); 
     });

    //Perform Edit Submit
    $editData.on('submit', function(e){
      e.preventDefault();

      //replace new value with list item content
      var newContent1 = $editData.find('.inputName').val();     
      var newContent2 = $editData.find('.inputDesign').val();
      var newContent3 = $editData.find('.inputExpert').val();
      var newContent4 = $editData.find('.inputTech').val();
      var newContent5 = $editData.find('.selectRate').val();
     
      tRow.find('.name').html(newContent1);
      tRow.find('.design').html(newContent2);
      tRow.find('.expert').html(newContent3);
      tRow.find('.tech').html(newContent4);
      tRow.find('.rate').html(newContent5);

      //Show List item
      $(tRow).removeClass('hide');
      $('.editRow').removeAttr('disable');
      $('.deleteRow').removeAttr('disable');      

      $editData.remove();

      //var id = tr.attr('id');
      var id = tRow.attr('id')

      $.ajax({
        url: url + '/' + id,
        method: 'PUT',
        data:{
          name: newContent1,
          designation: newContent2,
          experience: newContent3,
          technology: newContent4,
          rating: newContent5
        }
      })
    }); 
    
  });

});
