
function transFormString(myString){ 
  let a = myString.split('')
  for(let i = 0 ; i < a.length; i++){ 
  setTimeout(function(){
    if(a[i] == '_'){
        if(a[i])
        a[i+1] = a[i+1].toUpperCase();
        a[i] = ''
        a.toString()
        a.join('')
    }
  }, 100 )    
    
  }
}


function humanize(str) {
  var i, frags = str.split('_');
  for (i=1; i<frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }  
  return frags.join('');
}


let x = document.getElementById('demo1').innerHTML;

document.getElementById('demo2').innerHTML = humanize(x)
