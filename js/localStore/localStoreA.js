// Check browser support
function getName1(){ 
   if (typeof(Storage) !== "undefined") {
  // Store
    localStorage.setItem("key", "{'name':'Smith', 'age':23, 'country':'US'}");
  // Retrieve
   document.getElementById("demo1").innerHTML = localStorage.getItem("key");
  } else {
    document.getElementById("failed1").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

// Check browser support
function getName2(){ 
   if (typeof(Storage) !== "undefined") {
  // Store
    localStorage.setItem("key", "{'name':'Smith', 'age':23, 'country':'US'}");
  // Retrieve
   document.getElementById("demo2").innerHTML = localStorage.getItem("key");
  } else {
    document.getElementById("failed2").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
} 