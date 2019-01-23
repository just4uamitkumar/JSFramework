function getData1(){
  var myJSON = '{"name":"John", "age":31, "city":"New York"}';
  var myObj = JSON.parse(myJSON);
  document.getElementById("demo1").innerHTML = myObj.name + ' age is '+ myObj.age + ' and live in ' + myObj.city
}

function getData2(){
  var myObj, myJSON, text, obj;

  // Storing data:
  myObj = { name: "John", age: 31, city: "New York" };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

  // Retrieving data:
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  document.getElementById("demo2").innerHTML = obj.name;
}

function getData3(){
  var txt = '{"name":"John", "age":30, "city":"New York"}'
  var obj = JSON.parse(txt);
  document.getElementById("demo3").innerHTML = obj.name + ", " + obj.age;
}