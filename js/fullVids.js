var myvideo = document.getElementById("myVideo");
var mybtn = document.getElementById("myBtn");

function myFunction() {
  if (myvideo.paused) {
    myvideo.play();
    mybtn.innerHTML = "Pause";
  } else {
    myvideo.pause();
    mybtn.innerHTML = "Play";
  }
}


(function(){   
    var exitModal = document.getElementById('exitModal');    
    var exitBtn = document.getElementById("exitBtn");    
    var exitSpan = document.getElementsByClassName("close");
    //var exitSpan2 = document.getElementsByClassName("close")[1]
    var i;  

    exitBtn.onclick = function() {
        exitModal.style.display = "block";
    }

    function closeModal(){
      exitModal.style.display = "none";  
    }

    for(i = 0; i < exitSpan.length; i++){
        exitSpan[i].onclick = closeModal;
    }   
    
    exitSpan2.onclick = function() {
        exitModal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == exitModal) {
            exitModal.style.display = "none";
        }
    } 
}());