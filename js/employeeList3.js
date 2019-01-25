$(function(){
    var $listgroup = $('.list-group');
    var $listItem = $('.list-group-item');

    function getPost() {
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
            success: function(data) {
                var newData = data.slice(0, 10);
                var listItem = [];
                var spanItem = [];
                newData.forEach(function(newItem) {
                    console.log('newItem', newItem);
                     var $li = $('<li/>', {
                        class : 'list-group-item',
                        'data-id' :newItem.id,                           
                        html:newItem.title                        
                    });                         

                    listItem.push($li);                         
                });

                $listgroup.append(listItem);                   
            },
            error : function( err ) {
                console.log('err')
            }
        });
    }

    getPost();

    $listgroup.on('click', '.list-group-item', function(e){
        var id = $(e.target).attr('data-id');
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/' + id,
            method: 'GET',
            success:function(data){
                console.log('data', data);
                $('.postCont').html(data.body);
            },
            error:function(){}
        });
    });
});