const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];

document.getElementById('arr1').innerHTML = newArr



function add(a, b, c) {
  return a + b + c ;
}
const args = [1, 2, 3];

document.getElementById('arr2').innerHTML = add(...args);



//
let arr1 = ["Ilya", "Kantor"]
let [firstName, surname] = arr1;

document.getElementById('arr3A').innerHTML = arr.firstName;
document.getElementById('arr3B').innerHTML = arr.surname;