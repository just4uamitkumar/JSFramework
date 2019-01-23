var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "./js/db/cd_catalog.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML; 
x = xmlDoc.getElementsByTagName("CD");
table="<thead><tr><th>Artist</th><th>Title</th></tr></thead>";
for (i = 0; i < x.length; i++) { 
  table += "<tr onclick='displayCD(" + i + ")'><td>";
  table += x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
  table += "</td><td>";
  table +=  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
  table += "</td></tr>";
}
document.getElementById("demo1").innerHTML = table;

function displayCD(i) {
  document.getElementById("showCD1").innerHTML =
  "<b>Artist:</b> " +
  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br><b>Title:</b> " +
  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br><b>Year:</b> " + 
  x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}