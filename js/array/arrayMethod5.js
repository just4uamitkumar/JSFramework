
//remove _ remove string and make next charcater caps
function transFormString(myString){ 
  let a = myString.split('_')
  for(let i = 1 ; i < a.length; i++){ 
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }

   return a.join('');
}


let x = document.getElementById('demo1').innerHTML;

document.getElementById('demo2').innerHTML = transFormString(x)

//Count character in string
function countChar(str){
    let counts = {}

    let ch, count;

    for(let i = 0; i < str.length; ++i){
        ch = str.charAt(i);
       count = counts[ch];
       counts[ch] = count ? count + 1 : 1;
    }

    let c = [], d;
    for (ch in counts) {       
       let b = ch + counts[ch];
       c.push(b)
       d = c.sort().join('') 
    }

    return d;
}


let y = document.getElementById('demo3').innerHTML;

document.getElementById('demo4').innerHTML = countChar(y)


let mystr = 'amitajayim';


var getMax = function (str) {
 var max = 0,
     maxChar = '';
  str.split('').forEach(function(char){
    if(str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
     }
  });
  return maxChar;
};

console.log(getMax(mystr))




