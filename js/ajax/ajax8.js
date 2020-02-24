
function GetWeather() {
  let cityName = document.getElementById('cityName').value;
 //console.log(p)

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`)
 .then(data => {
    return data.json()
 }).then(data2 => {
  //console.log(data2.name, data2.main.temp, data2.weather[0].description)
    document.getElementById("detail1").innerHTML = `${data2.name}`
    document.getElementById("detail2").innerHTML = `${data2.main.temp}`
    document.getElementById("detail3").innerHTML = `${data2.weather[0].description}`

 })

}


//fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6")
