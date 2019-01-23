function getData1(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      document.getElementById("demo1").innerHTML = myObj.name;
    }
  };
  xmlhttp.open("GET", "./js/db/demo_file.php", true);
  xmlhttp.send();
}

function getData2(){
  var obj, dbParam, xmlhttp, myObj, x, txt = "";
  obj = { table: "customers", limit: 20 };
  dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      txt += "<table border='1'>"
      for (x in myObj) {
        txt += "<tr><td>" + myObj[x].name + "</td></tr>";
      }
      txt += "</table>"    
      document.getElementById("demo2").innerHTML = txt;
    }
  };
  xmlhttp.open("POST", "json_demo_db_post.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("x=" + dbParam);
}