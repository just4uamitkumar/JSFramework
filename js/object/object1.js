//Number
var count = '120';
document.getElementById('demo1').innerHTML = typeof (count);

//String
var empName = 'Bassel Beani';
document.getElementById('demo2').innerHTML = typeof (empName);

//Bolean
var x = 10, y = 15, z = 15;
document.getElementById('demo3').innerHTML = (z == y) + ', ' + typeof (z == y)

//Undefind
var clock;
document.getElementById('demo4').innerHTML = typeof (clock);

//Null
var student = null;
document.getElementById('demo5').innerHTML = typeof (student);



document.getElementById('var1').innerHTML = count
document.getElementById('var2').innerHTML = empName
document.getElementById('var3A').innerHTML = x
document.getElementById('var3B').innerHTML = y
document.getElementById('var3C').innerHTML = z
document.getElementById('var6A').innerHTML = bag.size
document.getElementById('var6B').innerHTML = bag.color
document.getElementById('var6C').innerHTML = bag.price
document.getElementById('var7A').innerHTML = cityName[0]
document.getElementById('var7B').innerHTML = cityName[1]
document.getElementById('var7C').innerHTML = cityName[2]
document.getElementById('var8A').innerHTML = myFunc.name