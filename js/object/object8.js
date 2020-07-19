function GetData(){

    var jsonData = []

    fetch(`./js/db/user4.json`) //Local Json
    .then((data) => { return data.json()
    })
    .then( (data2) => {
       jsonData = jsonData.concat(data2)       
       console.log(jsonData[0].users); //Got Data Here      
    });
  
   console.log(jsonData)
   //Uncaught TypeError: Cannot read property 'users' of undefined
  
};


function GetData2(){
  const jsonData = [];

  const myarr = [
        {"id":1,"firstname":"Smith","lastname":"Clark", 
       "dob":"1988-06-14","experience":"2","occupatoin":"Web Designer"},

      {"id":2,"firstname":"Baker","lastname":"Jackson", 
       "dob":"1987-12-20","experience":"2.5","occupatoin":"Web Developer"},

      {"id":3,"firstname":"Williams","lastname":"Grande", 
      "dob":"1992-05-24","experience":"1","occupatoin":"Data Entry Operator"},

      {"id":4,"firstname":"Jones","lastname":"Kenedy", "dob":"1990-07-28",
      "experience":"5","occupatoin":"Quality Assurance"},

      {"id":5,"firstname":"Brown","lastname":"Poe",  "dob":"1986-12-14",
      "experience":"4","occupatoin":"Graphic Designer"},

      {"id":6,"firstname":"Moore","lastname":"Winfrey",
       "dob":"1984-09-16","experience":"3.5","occupatoin":"Web Designer"},

      {"id":7,"firstname":"Allen","lastname":"Rancic","dob":"1991-01-10",
      "experience":"2.6","occupatoin":"Web Developer"}
  ]


  //jsonData.push(myarr)
  //console.log(jsonData)

  const b = myarr.find(({id}) => id === 7)
  
  //const a = b.map(e => e)

  document.getElementById("demo2").innerHTML = 
  `${b.id}, ${b.firstname} ${b.lastname}`;
}

