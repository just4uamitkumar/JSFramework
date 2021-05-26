
function transFormString(myString){ 
  let a = myString.split('_')
  for(let i = 1 ; i < a.length; i++){ 
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }

   return a.join('');
}


let x = document.getElementById('demo1').innerHTML;

document.getElementById('demo2').innerHTML = transFormString(x)
