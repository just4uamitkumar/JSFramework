(function(){ 
  var imgThumb = document.getElementsByClassName('imgThumb');
  var i, j, k, l, m;

  //Add anchor inside imgThumb div and add attributes
  for(i = 0; i < imgThumb.length; i++ ){   
    var imgAnchor = document.createElement('a');
    imgAnchor.setAttribute('href','javascript:void(0);');
    imgAnchor.setAttribute('data-toggle','modal');
    imgAnchor.setAttribute('data-target','#thumb-' + (i + 1));
    imgThumb[i].appendChild(imgAnchor);    
  }

  var toggleModal = document.querySelectorAll('[data-toggle]');

  //Add img element inside img ancho and add attributes
  for(j = 0; j < toggleModal.length; j++ ){     
     var Img = document.createElement('img');
      Img.setAttribute('src', './images/gallery-'+(j + 1)+'_thumb.jpg');
      Img.setAttribute('alt', 'gallery-' + (j+1));
      toggleModal[j].appendChild(Img);
  }
    
    var winScroll = 'null';

  //function to Show Modal
  function showModal(){
    var mTarget = this.getAttribute('data-target');
    var imgSrc = this.childNodes[0].getAttribute('src').replace('_thumb','');
    var imgCount = this.childNodes[0].getAttribute('src').replace('_thumb.jpg','').replace('./images/gallery-', '');
    console.log(imgCount);
    
    //document.body.style.overflow = 'hidden';
      
    winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    var targetVal = mTarget.substr(1);

    var activeM = document.getElementById(targetVal);  

    activeM.classList.remove('hide');

    //Add Heading inside h4 tag
    var w = activeM.childNodes[1].childNodes[1];
    var w1 = w.childNodes[3];
    w1.innerHTML = 'Gallery ' + winScroll + ' : '+ imgCount; 
      
  document.onscroll = function(){
      document.body.scrollTop = document.documentElement.scrollTop = winScroll
  }
   

    //Add images inside ModalBody accordingly
    var x = activeM.childNodes[1].childNodes[3];
    var xImg = document.createElement('img');
    xImg.setAttribute('src', imgSrc);
    xImg.setAttribute('class', 'imgFull');
    xImg.setAttribute('alt', '');   
    x.appendChild(xImg);   
    
    //Add dark shadow behind modal
    var mShadow = document.createElement('div');
    mShadow.setAttribute('class','mShadow');    
    activeM.parentNode.insertBefore(mShadow, activeM);   
    mShadow.appendChild(activeM);
  }

  for(var k=0; k < toggleModal.length; k++ ){
    toggleModal[k].addEventListener("click", showModal); 
  }

  //Hide Modal
  var MDismis = document.querySelectorAll('[data-dismiss]');

  function hideModal(){        
      var thisModal = this.closest('.gModal');
      thisModal.classList.add('hide');
      //document.body.removeAttribute('style');
      
      document.onscroll = function(){
          document.body.scrollTop = document.documentElement.scrollTop = auto
      }
      
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
  for (l = 0; l < MDismis.length; l++ ){
    MDismis[l].addEventListener("click", hideModal); 
  }  
  
})();