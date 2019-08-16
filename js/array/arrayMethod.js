(function(){
    var myNum = [2, 4, 2, 1, 5, 4, 1, 7];
    myNum.sort();

    //Sort Array;
    myNum.sort(function(a, b) {return a - b});

    function getUnique(myNum){
        var uniqueArray = [];
        for(var i=0; i < myNum.length; i++){       
            uniqueArray[myNum[i]] = myNum[i];       
        }
        return uniqueArray;
    }
    document.getElementById('am1').innerHTML = getUnique(myNum);  
})();


(function(){
    var materials = ['Hydrogen','Helium','Lithium','Beryllium'];
    var text = '';
    
    for (var i = 0; i < materials.length; i++){
        text += materials[i].length + ', ';        
    }
    
    document.getElementById('am2').innerHTML = text;
    
    console.log(materials.map(material => material.length));   

})();

(function(){
    var myNum = [3, 10, 12, 11, 5, 10, 3, 12];
    myNum.sort();
    myNum.sort(function(a, b) {return a - b});
    
    document.getElementById('am3').innerHTML = myNum.reduce((x,y) => x.includes(y) ? x : [...x, y], []);
    //Resule [1, 2, 4, 5, 7]
})();


(function(){
    // Defining function to get unique values from an array
    function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var i=0; i < array.length; i++){
            if(uniqueArray.includes(array[i]) === false) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    var names = ["Amit", "Ajay", "Raj", "Monti", "Amit", "Ajay", "Clark"];
    var uniqueNames = getUnique(names);
    console.log(uniqueNames); // Prints: ["Amit", "Ajay", "Raj", "Monti", "Clark"]
    
    document.getElementById('am4').innerHTML = uniqueNames;
     
    
    var x = (! + [] + [] + []).length;   //Result 9
    
    var y = (! + [] + [] + []).length;   //Result 4
    
       
     
})();








    
    
    
    
    
    
    

