function getData1(){
  var myObj, x, y, z;
  myObj = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
  };
  x = myObj.cars[0];
  y = myObj.cars[1];
  z = myObj.cars[2];
  document.getElementById("demo1").innerHTML = x  + ', ' + y + 'and ' + z;
}

function getData2(){
  var myObj, i, x = "";
  myObj = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
  };

  for (i in myObj.cars) {
    x += myObj.cars[i] + ", ";
  }
  document.getElementById("demo2").innerHTML = x;
}

function getData3(){
  var myObj, i, x = "";
  myObj = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
  };

  for (i = 0; i < myObj.cars.length; i++) {
    x += myObj.cars[i] + ", ";
  }
  document.getElementById("demo3").innerHTML = x;
}

function getData4(){
  var myObj, i, j, x = "";
  myObj = {
    "name":"John",
    "age":30,
    "cars": [
      {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
      {"name":"BMW", "models":["320", "X3", "X5"]},
      {"name":"Fiat", "models":["500", "Panda"] }
    ]
  }
  for (i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j] + ", ";
    }
  }
  document.getElementById("demo4").innerHTML = x;
}