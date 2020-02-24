
async function GetWeather() {
  let cityName = document.getElementById('cityName').value;

  var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`);
  var data2 await data.json();
 
  document.getElementById("detail1").innerHTML = ${data2.name}
  document.getElementById("detail2").innerHTML = ${data2.main.temp}
  document.getElementById("detail3").innerHTML = ${data2.weather[0].description} 

}


