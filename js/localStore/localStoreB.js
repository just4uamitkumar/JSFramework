
var arr = [];

function addVal(){
  var inputVal = document.getElementById('myinput').value;
  var arrStore = document.getElementById('demo1');

  arr.push(inputVal);
  localStorage.setItem("script", JSON.stringify(arr));
 

  let w = JSON.parse(localStorage.getItem("script"));

  arrStore.innerHTML = ''

  w.forEach(x => {
    arrStore.innerHTML += '<span>' + x + '<span>' + ' ';
  });  

  console.log(w);

}

// Check browser support
function removeVal(){
   //localStorage.removeItem('script');
   localStorage.clear();
} 