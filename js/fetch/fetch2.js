var myArr = [1, 2, 3, 4, 5, 6];
var i, txt = '';

for(i = 0; i< myArr.length; i++){
	
}



function GetWeather() {
  let cityName = document.getElementById('cityName').value;

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`)
 .then(data => {
    return data.json()
 }).then(data2 => {
      document.getElementById("detail1").innerHTML = `${data2.name}`
    document.getElementById("detail2").innerHTML = `${data2.main.temp}`
    document.getElementById("detail3").innerHTML = `${data2.weather[0].description}`

 })

}

 `${data2.id}` `${data2.name}` `${data2.main.temp}`
`${data2.weather[0].description}` `${data2.timezone}`
 `${data2.wind.speed}

