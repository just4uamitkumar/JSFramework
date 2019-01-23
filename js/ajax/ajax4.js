function loadDoc1(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo1").innerHTML =
      this.getAllResponseHeaders();
    }
  };
  xhttp.open("GET", "./js/db/ajax_info.txt", true);
  xhttp.send();
}

function loadDoc2(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo2").innerHTML =
      this.getAllResponseHeaders();
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}

function loadDoc3(){
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo3").innerHTML =
      this.getResponseHeader("Last-Modified");
    }
  };
  xhttp.open("GET", "./js/db/ajax_info.txt", true);
  xhttp.send();
}


function loadDoc4(){
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo4").innerHTML =
      this.getResponseHeader("Last-Modified");
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}
