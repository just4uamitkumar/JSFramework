// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }



// let myCar = new Car("Ford", 2014);

// document.getElementById("demo1").innerHTML =
// "My car is " + myCar.age() + " years old.";


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2012);
document.getElementById("demo1").innerHTML=
"My car is " + myCar.age(year) + " years old.";

