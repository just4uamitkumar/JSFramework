function getData1(){
    var txt = '{"name":"David", "age":45, "city":"San Andreas"}'
    var obj = JSON.parse(txt);
    document.getElementById("demo1").innerHTML = obj.name + ", " + obj.age;
}


function getData2(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("demo2").innerHTML = myObj.name;
    }
  };
  xmlhttp.open("GET", "./js/db/json_demo.txt", true);
  xmlhttp.send();
}


function getData3(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      document.getElementById("demo3").innerHTML = myArr[0] + ' and '  +myArr[1];
    }
  };
  xmlhttp.open("GET", "./js/db/json_demo_array.txt", true);
  xmlhttp.send();
}


  //Parse Date
  function getData4(){
    var text = '{"name":"Warren", "birth":"1986-12-14", "city":"Boston"}';
    var obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);
    document.getElementById("demo4").innerHTML = obj.name + ", " + obj.birth; 
  }


  function getData5(){
    var text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
    var obj = JSON.parse(text, function (key, value) {
      if (key == "birth") {
        return new Date(value);
      } else {
        return value;
      }
    });
    document.getElementById("demo5").innerHTML = obj.name + ", " + obj.birth; 
  }