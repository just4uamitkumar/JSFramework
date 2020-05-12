var myInput = document.getElementById('myInput');
var keyArr = [];

function getVal(){
    var inputVal = myInput.value;
    var letters = /^[A-Za-z]+$/;
    var x = inputVal.split('');

    if(inputVal.match(letters)){

        document.getElementById('newVal').innerHTML = x.map( e =>
            e.charCodeAt()
        );

    // x.map(e =>
    //     {
    //         if(e.charCodeAt() === 122){
    //              keyArr.push(99);

    //          }
    //         else{
    //             keyArr.push(e.charCodeAt() + 3);
    //         }
    //     }
    // );


        x.map(e => {
            switch(e.charCodeAt()){
                case 122:
                keyArr.push(99);
                break;

                case 121:
                keyArr.push(98);
                break;

                case 120:
                keyArr.push(97);
                break;

                case 88:
                keyArr.push(65);
                break;

                case 89:
                keyArr.push(66);
                break;

                case 90:
                keyArr.push(67);
                break;

                default:
                keyArr.push(e.charCodeAt() + 3);
            }
        });   

        const stringArr = keyArr.map(e =>
           String.fromCharCode(e)
        );

        document.getElementById('updatedVal').innerHTML = stringArr.join('');
    }

    else{
        alert('Please enter only alphabets for name')
    }
}



function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
const alphaArr = genCharArray('a', 'z'); // ["a", ..., "z"]

var textInput = document.getElementById('textInput');
var resultArr = []

function getInput(){
    var inputVal = textInput.value;
    var x = inputVal.split('');

    const xIndexes = x.map( (e, index) => 
        alphaArr.indexOf(x[index])
    );    

    document.getElementById('newInput').innerHTML = xIndexes

    const newArr = xIndexes.map( e =>  e + 3 );

    const result = newArr.map(i => alphaArr[i]);
       

    document.getElementById('updatedInput').innerHTML = result.join('');  

}