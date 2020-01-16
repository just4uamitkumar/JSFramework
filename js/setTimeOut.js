function getName1(){
  setTimeout(function(){
     if (typeof(Storage) !== "undefined") {
    // Store
      localStorage.setItem("key", "{'name':'Smith', 'age':23, 'country':'US'}");
    // Retrieve
     document.getElementById("demo1").innerHTML = localStorage.getItem("key");
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }, 1000)
 
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();``
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('demo3').innerHTML = 
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();