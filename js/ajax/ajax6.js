function displayCD1(i) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction1(this, i);
    }
  };
  xmlhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xmlhttp.send();
}

function myFunction1(xml, i) {
  var xmlDoc = xml.responseXML; 
  x = xmlDoc.getElementsByTagName("CD");
  document.getElementById("showCD1").innerHTML =
  "Artist: " +
  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
 
var j = 0, len;

displayCD2(j);

function displayCD2(j) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction2(this, j);
    }
  };
  xmlhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xmlhttp.send();
}

function myFunction2(xml, j) {
  var xmlDoc = xml.responseXML; 
  y = xmlDoc.getElementsByTagName("CD");
  len = y.length;
  document.getElementById("showCD2").innerHTML =
  "<b>Artist:</b> " +
  y[j].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br><b>Title:</b> " +
  y[j].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br><b>Year:</b> " + 
  y[j].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

function next() {
  if (j < len-1) {
    j++;
    displayCD2(j);
  }
}

function previous() {
  if (j > 0) {
    j--;
    displayCD2(j);
  }
}