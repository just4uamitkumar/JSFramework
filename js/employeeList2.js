function CreateTableFromJSON() {
    var Employee = [
        {
            "Emp ID": "1",
            "Name": "Vinay",
            "Designation":"Software Developer",
            "Experience":"2 Years",
            "Technology":"PHP",
            "Rating":"Average"
        },
        {
            "Emp ID": "2",
            "Name": "Sandeep",
            "Designation":"HTML Developer",
            "Experience":"3 Years",
            "Technology":"CSS",
            "Rating":"Good"
        },
        {
            "Emp ID": "3",
            "Name": "Jitender",
            "Designation":"Web Developer",
            "Experience":"1 Year",
            "Technology":"HTML",
            "Rating":"Above Average"
        },
        {
            "Emp ID": "4",
            "Name": "Arya Bhushan",
            "Designation":"Graphic Designer",
            "Experience":"5 Year",
            "Technology":"Photoshop",
            "Rating":"Average"
        },

        {
            "Emp ID": "5",
            "Name": "Govind",
            "Designation":"Web Developer",
            "Experience":"4 Year",
            "Technology":"HTML5",
            "Rating":"Good"
        }
    ]

    // EXTRACT VALUE FOR HTML HEADER. 
    // ('Book ID', 'Book Name', 'Category' and 'Price')
    var col = [];
    for (var i = 0; i < Employee.length; i++) {
        for (var key in Employee[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.classList.add('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        thead.appendChild(tr);
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < Employee.length; i++) {

        tr = table.insertRow(-1);
        tbody.appendChild(tr);
        tr.classList.add('headRow');

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = Employee[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

CreateTableFromJSON();