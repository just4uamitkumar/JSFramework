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