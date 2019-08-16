$("document").ready(function() {
    function getData(){
       $.getJSON("./js/db/employee.json", function(data){
            var employee_data = '';
            for(var i = 0; i < data.employees.length; i++){
                employee_data += '<tr class="headRow">' +
                                    '<td><span>' + data.employees[i].empID + '</span></td>' + 
                                    '<td><span>' + data.employees[i].name + '</span></td>' +
                                    '<td><span>' + data.employees[i].designation + '</span></td>' +
                                    '<td><span>' + data.employees[i].experience + '</span></td>' +
                                    '<td><span>' + data.employees[i].technology + '</span></td>' +
                                    '<td><span>' + data.employees[i].rating + '</span></td>' +
                                '</tr>';
            }
            $('#employee_table tbody').append(employee_data);
        });       
    }
    $("#showData").click(getData);   
});


document.getElementById('sortA').onclick = function(){
    var self = this.innerHTML;
    var tRow = document.getElementById('employee_table').tBodies[0].rows;
    
    var arr = [];
    
    for(var i = 0; i < tRow.length; i++){
        arr.push(tRow[i].cells[0].firstElementChild.innerHTML);
    } 
    
    //ES6
    //self.includes('fa-hand-o-down') ? this.innerHTML = '<i class="fa fa-hand-o-up"></i>' : this.innerHTML = '<i class="fa fa-hand-o-down"></i>'
   
    if(self.indexOf('fa-hand-o-down') === -1){        
        this.innerHTML = '<i class="fa fa-hand-o-down"></i>';
         arr.sort(function(a, b){return a - b});
    }
    else{
       this.innerHTML = '<i class="fa fa-hand-o-up"></i>';
       arr.sort(function(a, b){return b - a});
    }    

    arr.forEach((elem, index) => {       
        tRow[index].cells[0].firstElementChild.innerHTML = elem;
    });
  
}

document.getElementById('sortB').onclick = function(){
    var self = this.innerHTML;
    var tRow = document.getElementById('employee_table').tBodies[0].rows;
    
    var arr = [];
    
    for(var i = 0; i < tRow.length; i++){
        arr.push(tRow[i].cells[1].firstElementChild.innerHTML);
    }    
    
    if(self.indexOf('fa-hand-o-down') === -1){        
        this.innerHTML = '<i class="fa fa-hand-o-down"></i>';
        arr.sort().reverse();
    }
    else{
       this.innerHTML = '<i class="fa fa-hand-o-up"></i>';
      arr.sort();
    }    

    arr.forEach((elem, index) => {       
        tRow[index].cells[1].firstElementChild.innerHTML = elem;
    });
  
}

















