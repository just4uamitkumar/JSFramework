//The XMLHttpRequest Object
function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "./js/db/ajax_info.txt", true);
  xhttp.send();
}

//Load Text File Using JQuery
  $('.loadFile').click(function(){
      $("#demo2").load("./js/db/ajax_info.txt");
  });


//Post Request
function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo3").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "./js/db/ajax_info.txt", true);
  xhttp.send();
}

//Synchronous Request
function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "./js/db/ajax_info.txt", false);
  xhttp.send();
  document.getElementById("demo4").innerHTML = xhttp.responseText;
}