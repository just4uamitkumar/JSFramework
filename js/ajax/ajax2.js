 
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction1(xhttp) {
  document.getElementById("demo1").innerHTML =
  xhttp.responseText;
}

function myFunction2(xhttp) {
  document.getElementById("demo2").innerHTML =
  xhttp.responseText;
}

function myFunction3(xhttp) {
  document.getElementById("demo3").innerHTML =
  xhttp.responseText;
}