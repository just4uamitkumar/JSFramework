//SideBar Collapse
  (function (){
    var i, j;

    //Add sidebar menu content
    var FirstText = ['DashBoard Slider', 'Tooltip', 'Form Validation', 'Clock', 'CanVas', 
      'Highest Common Factor'];
    var level1 = document.querySelectorAll('.level1:not(.has-child)');
    var collapseDiv = document.querySelectorAll('.collapse');

    for (j = 0; j < level1.length; j++) {
      level1[j].innerHTML = FirstText[j];       
    }

    var parArr = ['UI Elements', 'Ajax', 'JSON', 'Timer', 'Local Storage', 'Table'];
    var hasChild = document.getElementsByClassName("has-child");

    function expand(){        
      var collapseLevel = this.nextElementSibling;         

      if(this.classList.contains('active')){
        this.classList.remove('active');       
        collapseLevel.classList.remove('active');           
      }
      else{
        for (j = 0; j < hasChild.length; j++) { 
          hasChild[j].classList.remove("active");
        }
       
        for (k = 0; k < collapseDiv.length; k++) {
          collapseDiv[k].classList.remove("active");                           
        }

        this.classList.add('active');
        collapseLevel.classList.add('active');      
      }
    }    

    for (i = 0; i < hasChild.length; i++) {
      hasChild[i].innerHTML = parArr[i];
      hasChild[i].onclick = expand;
    }
  }());