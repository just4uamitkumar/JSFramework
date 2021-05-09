const sum  = function (a) {
  return function (b) {
    if (b) {
      return sum(a * b); 
    }
    return a; 
  }
};


document.getElementById('demo').innerHTML = sum(5)(6)();
