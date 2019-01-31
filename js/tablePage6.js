function loadDoc(){
	var users = [
		{
			"id":"1",
			"firstname":"Vinay",
			"lastname":"Narvaria",
			"age":"30",
			"dob":"PHP",
			"occupatoin":"Web Designer"
		},

		{
			"id":"2",
			"firstname":"Sandeep",
			"lastname":"Nagraj",
			"age":"20",
			"dob":"PHP",
			"occupatoin":"Web Developer"
		},

		{
			"id":"3",
			"firstname":"Naveen",
			"lastname":"Pataudi",
			"age":"25",
			"dob":"PHP",
			"occupatoin":"HR"
		},

		{
			"id":"4",
			"firstname":"Govind",
			"lastname":"Mahor",
			"age":"28",
			"dob":"PHP",
			"occupatoin":"PHP Developer"
		}		
	]

	var col = [];
    for (var i = 0; i < users.length; i++) {
        for (var key in users[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");
    table.classList.add('table');


    var tr = table.insertRow(-1); 

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];        
        //thead.appendChild(tr);
        tr.appendChild(th);
    }

    for (var i = 0; i < users.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);           
            tabCell.innerHTML = users[i][col[j]];
        }
    }

    var divContainer = document.getElementByid("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}