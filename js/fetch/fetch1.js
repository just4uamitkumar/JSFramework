
async function GetWeather1() {
  let cityName = document.getElementById('cityName').value;

  var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`);
  var data2 = await data.json();
  console.log(data2)
 	
 document.getElementById("detail1").innerHTML = `${data2.id}`
  document.getElementById("detail2").innerHTML = `${data2.name}`
  document.getElementById("detail3").innerHTML = `${data2.main.temp}`
  document.getElementById("detail4").innerHTML = `${data2.weather[0].description}`
  document.getElementById("detail5").innerHTML = `${data2.timezone}`
    document.getElementById("detail6").innerHTML = `${data2.wind.speed}`

}


function GetWeather2() {
  let cityName = document.getElementById('myCity').value;
 //console.log(p)

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`)
 .then(data => {
    return data.json()
 }).then(data2 => {
  //console.log(data2.name, data2.main.temp, data2.weather[0].description)
    document.getElementById("detail10").innerHTML = `${data2.name}`
    document.getElementById("detail11").innerHTML = `${data2.main.temp}`
    document.getElementById("detail12").innerHTML = `${data2.weather[0].description}`

 })

}


//fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6")



