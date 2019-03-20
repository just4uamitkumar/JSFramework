function getData1(){
    var txt = '{"name":"David", "age":45, "city":"San Andreas"}'
    var obj = JSON.parse(txt);
    document.getElementById("demo1").innerHTML = obj.name + ", " + obj.age;
}


function getData2(){
    var obj = { name: "David", age: 45, city: "San Adreas" };
    var myJSON = JSON.stringify(obj);   
    document.getElementById("demo2").innerHTML = myJSON;
}


