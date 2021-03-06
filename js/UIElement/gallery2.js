
(function(){ 
  var imgThumb = document.getElementsByClassName('imgThumb');
  var i, j, k, l, m, x, y, z, z1, z2, z3, z4;

  //Add anchor inside imgThumb div and add attributes
  for(i = 0; i < imgThumb.length; i++ ){   
    var imgAnchor = document.createElement('a');
    imgAnchor.setAttribute('href','javascript:void(0);');
    imgAnchor.setAttribute('data-toggle','modal');
    imgThumb[i].appendChild(imgAnchor);   
  }


  var toggleModal = document.querySelectorAll('[data-toggle]');

  //Add img element inside img ancho and add attributes
  for(j = 0; j < toggleModal.length; j++ ){     
      var Img = document.createElement('img');
      Img.setAttribute('src', './images/gallery-'+(j + 1)+'_thumb.jpg');
      Img.setAttribute('alt', 'gallery-' + (j+1));
      Img.style.transform = 'scale(1.0)';     
      toggleModal[j].appendChild(Img);
  }


  //Add a div inside blow image
  for(y = 0; y < imgThumb.length; y++ ){   
    var zoomDiv = document.createElement('div');
    zoomDiv.setAttribute('class','zoomElem');
    imgThumb[y].appendChild(zoomDiv);   
  }

  var zoomAr = document.querySelectorAll('.zoomElem');

  //Add zoomOut button inside zoomElem
  for(z2 = 0; z2 < zoomAr.length; z2++ ){   
    var zoomOut = document.createElement('a');
    zoomOut.setAttribute('class','zoomOut');
    zoomOut.setAttribute('href','javascript:void(0);');
    zoomOut.innerHTML = '<i class="fa fa-search-minus"></i>'
    zoomAr[z2].appendChild(zoomOut);   
  }

  //Add zoomIn button inside zoomElem
  for(z1 = 0; z1 < zoomAr.length; z1++ ){   
    var zoomIn = document.createElement('a');
    zoomIn.setAttribute('class','zoomIn');
    zoomIn.setAttribute('href','javascript:void(0);');
    zoomIn.innerHTML = '<i class="fa fa-search-plus"></i>'
    zoomAr[z1].appendChild(zoomIn);   
  }

  var zoomIn = document.querySelectorAll('.zoomIn');

   //Zoom photo
   //ZoomImg.style.width = '100%';
  function ZoomIn(){
    var z4;
    var ZoomImg = this.closest('.zoomElem').previousSibling.childNodes[0];
    var ZoomVal = ZoomImg.getAttribute('style').replace('transform: scale(','').replace(');','');  
      
    // if(ZoomValue===0){
    //   ZoomValue = parseInt(ZoomVal); 
    // }  
    
    // else{
    //   ZoomValue = parseInt(ZoomValue) + 1;
    // }
    //   ZoomVal = ZoomVal + 1;
    // console.log(zoomW); 
   }
  
  
  for(var z3=0; z3 < zoomIn.length; z3++ ){
    zoomIn[z3].addEventListener("click", ZoomIn); 
 }




  //function to Show Modal
  function showModal(){   
    var imgSrc = this.childNodes[0].getAttribute('src').replace('_thumb','');
    var imgCount = this.childNodes[0].getAttribute('src').replace('_thumb.jpg','').replace('./images/gallery-', '');
    console.log(imgCount);
    document.body.style.overflow = 'hidden';

    //Created gModal div
    var mShadow = document.createElement('div');
    mShadow.setAttribute('class','mShadow');

    //Append gModal div in body
    document.body.appendChild(mShadow);
    mShadow.innerHTML = '<div class="gModal">' +
                          '<div class="modalDialog">' +

                            '<div class="modalHeader">' +

                              '<button type="button" class="close" data-dismiss="modal">' +
                                '<i class="fa fa-times"></i>' +
                              '</button>'+
                              '<h4></h4>' +
                            '</div>' +

                            '<div class="modalBody">' +
                              '<img src="" alt="" class="imgFull">' +
                            '</div>' +

                            '<div class="modalFooter">' +
                                '<button type="button" class="btn btn-danger pull-right" data-dismiss="modal">Close</button>' +            
                            '</div>' +
                          '</div>' +
                        '</div>';


  //Add Heading on Modal popup
  var modalHeading = document.querySelectorAll('h4');
  for(l = 0; l < modalHeading.length; l++){
      modalHeading[l].innerHTML = 'Gallery' + imgCount;
  }
  

  //Add Images on Modal
  var modalImg = document.querySelectorAll('.modalBody > img');
  for(x = 0; x < modalImg.length; x++){
    modalImg[x].setAttribute('src', imgSrc);
    modalImg[x].setAttribute('alt', 'Gallery' + imgCount);
  }
 

  //Hide Modal on close click
  var MDismis = document.querySelectorAll('[data-dismiss]');

  function hideModal(){        
    document.body.removeAttribute('style');
    var elem = document.getElementsByClassName("mShadow")[0];
    elem.parentNode.removeChild(elem);
  }

  for (m = 0; m < MDismis.length; m++ ){
    MDismis[m].addEventListener("click", hideModal); 
  }
  
}

 for(var k=0; k < toggleModal.length; k++ ){
    toggleModal[k].addEventListener("click", showModal); 
 }
  
})();
