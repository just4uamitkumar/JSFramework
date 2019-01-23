function loadDoc1(){
  var xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("ARTIST");
      for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo1").innerHTML = txt;
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
};

function loadDoc2(){
  var xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("COUNTRY");
      for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo2").innerHTML = txt;
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}

function loadDoc3(){
  var xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("COMPANY");
      for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo3").innerHTML = txt;
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}

function loadDoc4(){
  var xhttp, xmlDoc, txt, x, i;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;
      txt = "";
      x = xmlDoc.getElementsByTagName("PRICE");
      for (i = 0; i < x.length; i++) {
        txt = txt + x[i].childNodes[0].nodeValue + "<br>";
      }
      document.getElementById("demo4").innerHTML = txt;
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}