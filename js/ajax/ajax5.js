function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "./js/db/cd_catalog.xml", true);
  xhttp.send();
}


function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table='<thead>'+
              '<tr>' +
                '<th>Artist</th>' + 
                '<th>Title</th>' + 
                '<th>Country</th>' + 
                '<th>Company</th>' + 
                '<th>Price</th>' + 
                '<th>Year</th>' + 
              '</tr>' +
              '</thead>';

  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) { 
    table += "<tr>"+ 
      "<td>" +  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td>" + 
      "<td>" +  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td>" +
      "<td>" +  x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue + "</td>" + 
      "<td>" +  x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue + "</td>" + 
      "<td>" +  x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td>" +
      "<td>" +  x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue + "</td>" +   
    "</tr>";
  }
  document.getElementById("demo").innerHTML = table;
}


function showHint(str) {
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("txtHint1").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint1").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./js/db/gethint.php?q="+str, true);
  xhttp.send();   
}


function showCustomer(str) {
  var xhttp;  
  if (str == "") {
    document.getElementById("txtHint2").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint2").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./js/db/getcustomer.php?q="+str, true);
  xhttp.send();
}