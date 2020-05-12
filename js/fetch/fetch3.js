 async function GetData() {
  var data, data2, i, txt ='', txtA ='';
  var data = await fetch('./js/db/empList.json');
  var data2 = await data.json();

  for (i=0; i < data2.emp.length; i++) {        
    const s = i%2;
    txt += `<tr id=row_${i} class="${ s === 1 ? 'kc-odd mycheck' : 'kc-even mycheck' }">
        <td><input type="checkbox" class="idCheck" onclick="myFunction()"/></td>
        <td>${data2.emp[i].id}</td>
        <td>${data2.emp[i].name}</td>                
        <td>${data2.emp[i].dob}</td>
        <td>${data2.emp[i].design}</td>
        <td>${data2.emp[i].exp}</td>                
        <td>${data2.emp[i].tech}</td>
        <td>${data2.emp[i].rate}</td>        
      </tr>`;
    }      

    document.getElementById("table1").tBodies[0].innerHTML = txt;    


    for (i=0; i < data2.student.length; i++) {
    	const s = i%2; 

    txtA += `<tr id=row_${i} class="${ s === 1 ? 'kc-odd' : 'kc-even' }">
        <td><input type="checkbox" class="idCheck1" /></th>
        <td>${data2.student[i].id}</td>
        <td>${data2.student[i].name}</td>                
        <td>${data2.student[i].dob}</td>
        <td>${data2.student[i].sub}</td>
        <td>${data2.student[i].rate}</td>
        <td></td>
      </tr>`;
    }

     document.getElementById("table2").tBodies[0].innerHTML = txtA;  
}

GetData();

var j, k, l
var element = document.getElementsByClassName('mycheck');
console.log(element.length)

for(j=0; j< element.length; j++){
  element[j].onclick = function() {
    alert('est');
  // onclick stuff
  }
}
