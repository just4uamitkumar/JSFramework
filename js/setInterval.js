(function(){
  var myVar = setInterval(myTimer, 1000);
  function myTimer() {
    var d = new Date();
    document.getElementById("demo1").innerHTML = d.toLocaleTimeString();
  }
})();


function getName2(){
  setInterval(function(){ 
    alert("Hello"); 
  }, 1000 );

}

function updateClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // Pad the minutes and seconds with leading zeros, if required
  h = ( h < 10 ? "0" : "" ) + h;
  m = ( m < 10 ? "0" : "" ) + m;
  s = ( s < 10 ? "0" : "" ) + s;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( h < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  h = ( h > 12 ) ? h - 12 : h;

  // Convert an hours component of "0" to "12"
  h = ( h == 0 ) ? 12 : h;

  // Compose the string for display
  var currentTimeString = h + ":" + m + ":" + s + " " + timeOfDay;

  // Update the time display
  document.getElementById("demo3").firstChild.nodeValue = currentTimeString;
}

updateClock();
setInterval('updateClock()', 1000 );