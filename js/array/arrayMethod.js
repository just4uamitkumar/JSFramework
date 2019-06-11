(function(){
   var arr = [2, 4, 2, 1, 5, 4, 1, 7];
    arr.sort();

    //Sort Array;
    arr.sort(function(a, b) {return a - b})
    document.getElementById('am1').innerHTML = arr;

    function arrEdit(x){
        let y = x.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
        return y
    }

    document.getElementById('am2').innerHTML = arrEdit(arr);
    
        
    //Removing repeated element from array
//    function removeDP(x){
//        var y = [];        
//        x.map((e) => !y.includes(e) && y.push(e) );
//        
//        return y;
//    }    
    
})();


(function(){
    var myNum = [2, 4, 2, 1, 5, 4, 1, 7];
    myNum.sort();

    //Sort Array;
    myNum.sort(function(a, b) {return a - b});

    function getUnique(myNum){
        var uniqueArray = [];

        // Loop through array values
        for(var i=0; i < myNum.length; i++){       
            uniqueArray[myNum[i]] = myNum[i];       
        }
        return uniqueArray;
    }
    document.getElementById('am3').innerHTML = getUnique(myNum);  
})();


(function(){
    var materials = ['Hydrogen','Helium','Lithium','Beryllium'];
    var text = '';
    
    for (var i = 0; i < materials.length; i++){
        text += materials[i].length + '<br>';        
    }
    
    document.getElementById('am4').innerHTML = text;
    
    console.log(materials.map(material => material.length));   

})();

//[11, 22, 22, 33].reduce((x, y) => x.includes(y) ? x : [...x, y], []);

(function(){
    var myNum = [2, 4, 2, 1, 5, 4, 1, 7];
    myNum.sort();
    myNum.sort(function(a, b) {return a - b});
    console.log(myNum.reduce((x,y) => x.includes(y) ? x : [...x, y], []))
    //Resule [1, 2, 4, 5, 7]
})();






    
    
    
    
    
    
    

