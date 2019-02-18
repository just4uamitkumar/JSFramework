(function(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            debugger;
            console.log(myObj)
            document.getElementById("demo").innerHTML = myObj
        }
    };
    xmlhttp.open("GET", "./db/employee.json", true);
    xmlhttp.send();
})();
