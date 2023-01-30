let myValue = document.getElementById('myValue');
var table = document.getElementById('table')
var tbody = document.createElement('tbody');
table.appendChild(tbody);
tr = tbody.insertRow(-1);
var arr = []

function GetData() {
    let tRow = document.createElement('tr');
    tRow = tbody.insertRow(-1);
    for (let i = 0; i < 5; i++) {

    }
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    tr = tbody.insertRow(-1);
    arr.push(myValue.value)
    console.log(arr)

}

console.log(arr)