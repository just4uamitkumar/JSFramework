// (function(){
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myObj = JSON.parse(this.responseText);
//             console.log(myObj)
//             document.getElementById("demo").innerHTML = myObj
//         }
//     };
//     xmlhttp.open("GET", "./js/db/employee.json", true);
//     xmlhttp.send();
// })();

//The XMLHttpRequest Object
function loadDoc() {
  //Read Json Data
    var i, xhttp, tbody, myObj, txt='',
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {

        myObj = JSON.parse(this.responseText);

        for (i=0; i < myObj.employees.length; i++) {

            myObj.employees[i].dob = new Date(myObj.employees[i].dob);
            var myDate = new Date(myObj.employees[i].dob)
            
            txt += "<tr id=row_"+ i + ">" +
                "<td>" + myObj.employees[i].empID + "</td>" + 
                "<td>" + myObj.employees[i].name + "</td>" +
                "<td>" + myDate.getFullYear()+'-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-'+ myDate.getDate() + "</td>" +
                "<td>" + myObj.employees[i].designation + "</td>" +
                "<td>" + myObj.employees[i].experience + "</td>" +
                "<td>" + myObj.employees[i].technology + "</td>" +
                "<td>" + myObj.employees[i].rating + "</td>" +              
              "</tr>";  
        }

        document.getElementById("employee_table").tBodies[0].innerHTML = txt;
    }
    };
    xhttp.open("GET", "./js/db/employee.json", true);
    xhttp.send();
}

