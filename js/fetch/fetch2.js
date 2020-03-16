
function GetWeather() {
var myArr = [];
var i, txt = '';

let cityName = document.getElementById('cityName').value;

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`)
 .then(data => {
    return data.json()
 }).then(data2 => {
	console.log(data2);
	myArr = myArr.concat(data2);   
	console.log(myArr);
 });

 myArr.map((e, index) => {
 	txt += `<tr key={index}>
        <td></td>
        <td>${e.id}</td>
        <td>${e.name}</td>                
        <td>${e.main.temp}</td>
        <td>${e.description}</td>
        <td>${e.timezone}</td>                
        <td>${e.wind.speed}</td>
        <td>${e.rate}</td>        
      </tr>`
	});

	document.getElementById("table1").tBodies[0].innerHTML = txt;


}