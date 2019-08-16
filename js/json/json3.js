function getData1(){
    var obj = { name: "David", age: 45, city: "San Adreas" };
    var myJSON = JSON.stringify(obj);
    document.getElementById("demo1").innerHTML = myJSON;

}

function getData2(){

  var arr = [ "John", "Peter", "Sally", "Jane" ];

  var myJSON = JSON.stringify(arr);

  document.getElementById("demo2").innerHTML = myJSON;

}  

  function getData3(){
    var myObj = {"name":"John", "age":30, "car":null};
    for (x in myObj) {
      document.getElementById("demo3").innerHTML += x + "<br>";
    }
  }

function getData4(){
  var myObj = {"name":"John", "age":30, "car":null};
  for (x in myObj) {
    document.getElementById("demo4").innerHTML += myObj[x] + "<br>";
  }
}

function getData5(){
  var myObj = {
    "name":"John",
    "age":30,
    "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
    }
  }
  document.getElementById("demo5").innerHTML += myObj.cars.car2 + ' and ' + myObj.cars["car3"];

}