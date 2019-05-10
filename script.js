// let test = {};

// test["first_name"] = "giannis";
// test["last_name"] = "alexiou";
// test["age"] = 34;

// console.log(); -- show details

// console.log("My profile:", test, "Type:", typeof test["last_name"]);

// console.log(typeof smth); -- ask the type of something

// == compare values / != reverse
// === compare type  / !== reverse

// console.log(1 * 1 == 2);

// let greeting = "Hi I am " + " " + test["first_name"] + " " + test["last_name"] + " " + test["age"];
// let greeting = `Hi I am ${test['first_name']} ${test["last_name"]} ${test["age"]}`;

// console.log(greeting);

// DECLARATIONS

// let myName = "giannis";
// console.log(myName);

// let myNumber = 33;
// console.log(myNumber);

// let myObject = {};
// console.log(myObject, typeof myObject);

// let myBullean = true;
// console.log(myBullean, typeof myBullean);

// let myNull = null;
// console.log(myNull, typeof myNull);

// let myArray = [];
// console.log(myArray, typeof myArray);

// console.log("my name is " + myName, "my number is " + myNumber, myObject, myBullean, myNull, myArray);

// if (+Infinity !== -Infinity) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// // console.log(anything);

// // ADVANCED DATA TYPES

// myArray.push(myName); //add stuf to arrays
// console.log(myArray);
// myArray.push(myObject, "hello there", myNull);
// console.log(myArray);

// myObject.arrayInObject = myArray; //add stuff to objects
// console.log(myObject);

// let emptyObject = {};

// let newObject = {
//     myName : "giannis",
//     myNumber : 1,
//     myArray : [
//         "giannis", 33, true, {myName : "giannis"}
//     ]
// }

// newObject.new2Object = myNull;
// console.log(newObject); // request value from object
// console.log(newObject.myArray[3]); // request value from array

// console.log(1 == "1");

// console.log(1 + 10);

// if (newObject.myNumber == 17) {
//     console.log("my number is 1");
// } else {
//     console.log("false");   
// }

// newObject.myNumber == 17 ? console.log("true") : console.log("false"); // if shortcut


// if (1 == 1 || 1 != 0 && 2 == 2) { // ||or &&and 
//  console.log(true);   
// } else {
//   console.log(false); 
// }

// if (newObject.myNumber == 1 && typeof newObject.myName == "string") {
//     console.log(true);   
// } else {
//     console.log(false);   
// }

// let sum = 0;
// let sq = 0;

// for (let i = 1; i <= 10; i++) {
//     sq = i * i;
//     sum += sq;
// }

// console.log(sum);

//     // for (let index = 0; index < array.length; index++) {
//     //     const element = array[index];
    
//     // }
    
//     // let arr=[1,2,3,4,5]
//     // let sum=0
//     // for (let index = 0; index < array.length; index++) {
//     //     console.log([index]*arr[index]);
    
//     //     let x;
//     //     x = arr[index]*arr[index];
//     //     sum = sum + x
//     // }
    
    
    
    
//     // for (var x = 2; x <= 100; i ++){
//     //     console.log(`the square of 2 ${i} is ${x * x}`);
//     // }
    
//     // for (var y = 3; y <= 100; y ++){
//     //     console.log(`the square of 3 ${y} is ${y * y}`);
//     // }
    
//     // for (var z = 100; z <= 100; z ++){
//     //     console.log(`the square of 100 ${z} is ${z * z}`);
//     // }
    
    
    
//     for (var i = 1; i <= 100; i ++){
//        console.log(`the square of 1 ${i} is ${i * i}`);
    
//     }
    
//     for (var x = 2; x <= 100; i ++){
//        console.log(`the square of 2 ${i} is ${x * x}`);
//     }
    
//     for (var y = 3; y <= 100; y ++){
//        console.log(`the square of 3 ${y} is ${y * y}`);
//     }
    
    
    
//     var myarray = [];
    
//     for (var i = 0; i <= 100; i++){
//        myarray.push(i);
//     }
//     console.log(myarray);
    
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10){
//        myarray.push(i);
//     }
//     console.log(myarray);
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10) {
//        if (i > 50) {
//            myarray.push(i);
//        }
//     }
//     console.log(myarray);
    
    
    
    
//     var myarray = [];
    
//     for (var i = 10; i <= 100; i += 10) {
//        while (i == 10) {
//            myarray.push(i);
//        }
//     }
//     console.log(myarray);
    
    
    
    
//     var condition = true;
    
//     while (condition == true) {
//        console.log(true);
//     }
    
    
    
//     var x = 1;
//     x = 2;
    
//     x += 2;
    
//     x * 3;
    
    
    
//     console.log(console);
    
    
//     var mynumber = 1;
//     var myfunction = function() {
//        console.log('Hello');
//     }
    
    
    
//     function myfunction1() {
    
//     }
    
//     var myfunction2 = function() {
//        var greeting = 'Hello World';
//        console.log(greeting);
    
//     };
    
    
//     var first = function(param) {
//        var greeting = 'Hello World' + param;
//        console.log(greeting);
    
//     };
    
    
//     var myfunction = function(param) {
//        console.log(typeof param);
//     }
    
//     myfunction(28)
    
//     myfunction('mohammad')
    
//     var myarray = ['mohammad'];
//     var myfunction = function(param) {
//        if (typeof param == '') {
//            myarray.push(param);
//            console.log('myarray');
//        }
//     }

// DOCUMENT OBJECT MODEL

// console.log("Hello world");

// // document.getElementById() // target by id

// var mybutton = document.getElementById("myButton");
// console.log(mybutton);

// // mybutton.addEventListener() // target events
// // document.createElement("") // create elements
// // smthng.innerHTML = ""; // add text
// // smthng.appendChild(""); // append on screen

// mybutton.addEventListener("click", function() {
//    console.log('giannis');
//    var myMessage = document.createElement("p");
//    myMessage.innerHTML = "Thank you";
//    let myBody = document.getElementById("myContainer");
//    myBody.appendChild(myMessage);
//    mybutton.style.backgroundColor = "red";
// });

// let myInput1 = document.getElementById("input1");
// let myInput2 = document.getElementById("input2");

// myInput1.addEventListener("keyup", function(event) {
//    console.log(event);
//    let myContainer = document.getElementById("myContainer2");
//    myContainer.innerHTML = event.target.value;
// });

// // Random access to array elements on click.
// // Random background change 
// const bgColors = ['grey', 'green', 'blue', 'orange', 'red'];
// const btn_bgColor = document.querySelector("#bg-color-changer");
// let color;
// btn_bgColor.addEventListener("click",function (event) {
//   document.body.style.background = color;
//   color = bgColors[Math.floor(Math.random()*bgColors.length)];
// });

// STUDYGROUP

// console.log("Hello world");
// let myName = "Giannis";
// let mySurname = "Alexiou";
// document.write(`${myName} ${mySurname}`);
// let userInput = document.querySelector("#userInput");
// let myPost = document.querySelector("#posts");
// let myButton = document.querySelector("#post");

// userInput.addEventListener("keyup", function(e) {
//    console.log(e.target.value);
//    // let newPost = document.createElement("p");
//    // console.log("got fired");
//    // document.write("got fired");
//    // newPost.setAttribute("class", "userPost");
//    myPost.innerHTML =
//    `<p>${e.target.value}</p>`;
//    // myPost.appendChild(myPost);
// });

// myButton.addEventListener("click", function(e) {
//    let newPost = document.createElement("p");
//    // console.log("got fired");
//    // document.write("got fired");
//    newPost.setAttribute("class", "userPost");
//    newPost.innerHTML =
//    `<p>${e.type} got fired</p>`;
//    myPost.appendChild(newPost);
// });

// Week 5 - Kosmas

// array.slice("","") // copy array elements (startin point, ending point)
// array.splice("","") // cut array elements (startin point, num of elements copied)

// empty array

// const l = array.lenght; // empty array
// for (i=0; i<l, i++){
//    array.pop();
// }

// or Array.lenth = 0;

// array.forEach(function(f,i) {

// });

// const fruit3 = ["apple", "orange", "bananas"];

// fruit3.forEach(function(f,i) {
// console.log(f,i)
// });                           // display array element / position

// console.log(fruit3);

// const num = [1, 2, 4, 15, 10];

// const small = [];             // take specific elements without filter

// for (i=0; i<num.length; i++) {
//    if (num[i]<5) {
//       small.push(num[i]);
//    }
// }

// console.log(small);

// const small = num.filter(function(f){ // take specific elements using filter
//    return f<5;
// });

// console.log(small);

// const mul = [];

// for (i=0; i<num.length; i++){          // multiply the array without map
//    mul.push(num[i]*2);
// }

// console.log(mul);

// const mul = num.map(function(f){          // multiply the array using map
//    return f*2;
// })

// console.log(mul);

// function greet (){
//    console.log("a");
//    return "c";
//    }
//    const b = greet();
//    console.log(b);

//    const x = greet;

// const a = {
//    x: 2,
//    y: 1
// }

// a.x or a["x"] get element from object
// a.x.z or a["x"]["z"] get nested elements

// // x = {
//    a: 1
// }

// x.b = 3; add key to object

// const fruit = [
//    {
//       name: "apple",
//       color: "red",
//       quan: 1
//    },
//    {
//       name: "bannana",
//       color: "yellow",
//       quan: 1
//    }
// ]

// const res = fruit.filter(function(n){
//    if (n.color === "orange") {
//       return n;
//    }
// })

// const num2 = [1, 2, 3];

// const result = num2.reduce(function(a,b){
//    return a+b;
// });                                          // sum array elements


// const res = num.map(function(n){
//    return n.quan;
// }).reduce (function(x,y){
//    return x+y;
// })

// WEEK 6 - Kosmas 2

//class of tuesday....some examples. 

// var vs = ['potato', 'tomato', 'cucamber'];
// const vs2 = vs.splice(1, 2);//splice for copy

// var vs = ['potato', 'tomato', 'cucamber'];
// const vs2 = vs.slice(1, 2);//splice change thew origenal array.


// // slice (cut) and cplice (copy).

// var vs = ['potato', 'tomato', 'cucamber'];
// // console.log(vs.length);


// const vs2 = [];
// vs.forEach(function (n, i) {
//     vs.push(i);
// });


// //syntext for (map)...

// const v2 = vs.map(function (n) {
//     return vs.n.index
// });

// var vs = ['potato', 'tomato', 'cucamber'];
// const vs2 = [];
// for (let i = 0; vs.length; i++) {
//     vs.pish(i);
// };


// const task = [];
// for (let i = o; i < monday.length; i++) {
//     task.push(monday[i]);
//     task.push(tuesday[i]);
// };

// //convert 

// const mytask = task.map(function (n) {
//     n.duration = n.duration / 60;
//     return n;


// });

// //Scope//
// function a() {
//     let a = 1;
//     return a;
// };
// console.log(a);// undefined//

// //function scope..

// function add(a, b) {
//     for (let i = 0; i < 2; i++) {
//         let x = a;
//         var y = b;
//     }
//     console.log(x, y);//if we use (if) instade (for)
// }
// console.log(x, y);// it display undefined



// const a = 1;
// function f(x) {
//     let a = x;

// }
// f(2);

// //again..

// const a = 1;
// function f(x) {
//     let a = x;
//     return a;
// }
// let b = f(2);
// undefined
// console.log(a === b);

// //more stuff of scope..

// const arr = [1, 2, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     let blockScopedSum = sum;// if we use (var) instade (let).

// }
// console.log('The sum is ' + sum);
// console.log('The block scopped sum is ' + blockScopedSum);

// //(var) has a function scope

// WEEK 7

// console.log(this);
// let person = {
//    firstName: "John",
//    lastName: "Doe",
//    id: 5566,
//    fullName: function () {
//       return this.firstName + ' ' + this.lastName;
//    }

// };

// console.log(person.fullName());

// let person = {
//    firstName: "John",
//    lastName: "Doe",
//    id: 5566,

// };

// function fullName () {
//    return this.firstName + ' ' + this.lastName;
// };

// console.log(fullName()); //undefined

// console.log(fullName.call(person));
// console.log(fullName.apply(person));

// let person = {
//    firtsName: "John",
//    lastName: "Doe"
// };

// function changeFirstName() {
//    return this.firstName = "Jane";
// };

// function fullName() {
//    return this.firstName + " " + this.lastName;
// };

// changeFirstName.apply(person); // change first name key

// fullName.apply(person);

// console.log(fullName.call(person));
// console.log(fullName.apply(person));

// class Car {
//     constructor(speed, weight) {
//         this.speed = speed;
//         this.weight = weight;
//     }

//     getPoints() {
//         return this.speed * this.weight;
//     }
// }

// let user_1 = {
//    name: "yiannis",
//    age: 34,
//    greet:
//    function() {
//       console.log("hi, my name is " + this.name);
//    }
// };

// //Constructor function - old way
// function User(name, age) { 
//    this.name = name;
//    this.age = age;
//    this.greet = 
//    function() {
//       console.log("hi, my name is " + this.name);
//    };
//    this.isVerified = false;
// }

// let user_2 = new User("Giannis", 34); // always new to call constructor
// let user_3 = new User("Maria", 25);

// let users = [user_1, user_2, user_3];

// for (let x of users) { // another way of foreach
//    x.greet();
// }

// //Constructor function - new way
// class newUser {
//    constructor(name,age) {
//       this.name = name;
//       this.age = age;
//       this.isVerified = false;
//    }

//    greet() {
//       console.log("hi, my name is " + this.name);
//    }
// }

//Week 8 - Single Page Application

// retrieve data from api - jason

// let movieTemplate = (title, year, src) => `
//   <div>
//     <h2>${title}</h2>
//     <p>${year}</p>
//     <img src="https://image.tmdb.org/t/p/w500${src}">
//   </div>
// `;
// let contentElement = document.getElementById("content");

// // create object
// let http = new XMLHttpRequest();

// // check state
// http.onreadystatechange = function () {
//    if (http.readyState === 4 && http.status === 200) {

//      let response = JSON.parse(http.response); // convert json(string) into object with parse 
//      console.log(response);
//      for (let movie of response.results) {
//        contentElement.innerHTML += movieTemplate(movie.title, movie.release_date, movie.poster_path);
//      }
//    }
// }

// // open a connection
// http.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c");

// // make the request
// http.send();

// Routing Part!

// function updateMovies() {
  
//   // Which is the url?
//   let page;
//   if (location.hash === "") {
//     page = 1;
//   }

//   else {
//     page = location.hash.slice (1, location.hash.length);
//   }

//   // html for links
//   let buttonsTemplate = `
//     <a href="#${+page-1}">Back</a>
//     <a href="#${+page+1}">Next</a>
//   `;

//   // html for each movie
//   let movieTemplate = (title, year, src) => `
//   <div>
//     <h2>${title}</h2>
//     <p>${year}</p>
//     <img src="https://image.tmdb.org/t/p/w500${src}">
//   </div>
//   `;

//   // Empty div that will contain everything
//   let contentElement = document.getElementById("content");

//   // create new XMLHttpRequest object
//   let http = new XMLHttpRequest();

//   // check state and run function when request is completed (when we get the movies)
//   http.onreadystatechange = function () {
//     if (http.readyState === 4 && http.status === 200) {

//       let response = JSON.parse(http.response); // convert json(string) into object with parse 
//       console.log(response);
//       contentElement.innerHTML = "";
//       contentElement.innerHTML += buttonsTemplate;
//       for (let movie of response.results) {
//         contentElement.innerHTML += movieTemplate(movie.title, movie.release_date, movie.poster_path);
//       }
//     }
//   }

//   // open a connection
//   http.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c&page=" + page);

//   // make the request
//   http.send();
// }

// // when page loads
// window.onload = updateMovies;
// // or when hush changes
// window.onhashchange = updateMovies;

// Week 9 - Promises

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(23*3);
//   }, 10000)
// });

// nyPromise.then((response) => {
//   console.log(response);
// }).catch((error) => {

// })

// retrieve data from api - jason

// let movieTemplate = (title, year, src) => `
//   <div>
//     <h2>${title}</h2>
//     <p>${year}</p>
//     <img src="https://image.tmdb.org/t/p/w500${src}">
//   </div>
// `;
// let contentElement = document.getElementById("content");

// // create object
// let http = new XMLHttpRequest();

// // check state
// http.onreadystatechange = function () {
//    if (http.readyState === 4 && http.status === 200) {

//      let response = JSON.parse(http.response); // convert json(string) into object with parse 
//      console.log(response);
//      for (let movie of response.results) {
//        contentElement.innerHTML += movieTemplate(movie.title, movie.release_date, movie.poster_path);
//      }
//    }
// }

// // open a connection
// http.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbb0e77b94b09193e6f32d5fac7a3b9c");

// // make the request
// http.send();

// const http = new XMLHttpRequest();
// http.onreadystatechange = function () {
//     if (http.readyState === 4) {
//         if (http.status === 200) {
//             const response = JSON.parse(http.response);
//             console.log(response);
//         } else {
//             console.log('ERROR');
//         }
//     }
// }
// http.open("GET", "https://api.github.com/users/" + mohammedalasly);
// http.send();
// }

// fetch

// let contentElement = document.getElementById("content");

// const myPromise = new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const response = JSON.parse(xhr.response);
//       resolve(response);
//       myResponse = JSON.stringify(response);
//       contentElement.innerHTML += myResponse;

//     }
//     if (xhr.readyState === 4 && xhr.status !== 200) {
//       reject("ERROR");
//     }
//   };

//   xhr.open("GET", "https://api.github.com/users/marc-antoineA");
//   xhr.send();
// });

//   myPromise.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })


// let contentElement = document.getElementById("content");
// const http = new XMLHttpRequest();
// http.onreadystatechange = function () {
//     if (http.readyState === 4) {
//         if (http.status === 200) {
//             const response = JSON.parse(http.response);
//             console.log(response);
//             myResponse = JSON.stringify(response);
//             contentElement.innerHTML += myResponse;
//         } else {
//             console.log('ERROR');
//         }
//     }
// }
// http.open("GET", "https://api.github.com/users/marc-antoineA");
// http.send();

//target specific user

// let contentElement = document.getElementById("content");

// function fetchesRepository(name) {
// const http = new XMLHttpRequest();
// http.onreadystatechange = function () {
//     if (http.readyState === 4) {
//         if (http.status === 200) {
//             const response = JSON.parse(http.response);
//             console.log(response);
//             myResponse = JSON.stringify(response);
//             contentElement.innerHTML += myResponse;
//         } else {
//             console.log('ERROR');
//         }
//     } 
// }
// http.open("GET", "https://api.github.com/users/" + name);
// http.send();
// }

  // html for each movie

let contentElement = document.getElementById("content");

function fetchesRepository(name) {

const url = "https://api.github.com/users/" + name;

fetch(url)
  .then((response) => {
    response.json()
      .then((data) => {
        console.log(data);
        // myResponse = JSON.stringify(data);
        // contentElement.innerHTML += myResponse;
    const avatar = data.avatar_url;
    let avatarElement = document.getElementById("img");
    avatarElement.src = avatar;
  
    const name = data.name;
    if (name == null) {
      const login = data.login;
      let nameElement = document.getElementById("name");
      nameElement.innerHTML += login;  
    }
    else {
    let nameElement = document.getElementById("name");
    nameElement.innerHTML += name;
    }
    const repos = data.repos_url;
    let repElement = document.getElementById("list");
    repElement.innerHTML += repos;

    const url_rep = data.repos_url;
    fetch(url_rep)
    .then((response) => {
      response.json()
      .then((data) => {
        console.log(data);
        for (let i=0; i<data.length; i++) {
          console.log(data[i].name);
          // console.log(i);
          let ul = document.createElement("ul");
          document.querySelector("#list").appendChild(ul);
          let li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML += data[i].name;      
        }
      })

      .catch((err) => {
        console.log("Error while parsing json ", err);
      });
      }).catch((err) => {
        console.log("error", err);
      });
        // for (let i = 0; i < prizes.length; i++) {
        //   const year = prizes[i];
        //   const laureates = year.laureates;
        //   for (let j = 0; j < laureates.length; j++) {
        //     const winner = laureates[j];
        //     const firstname = winner.firstname;
        //     console.log(firstname);
        //     innerHTML += "<li>" + firstname + "</li>";
        //   }
        // }
        // const list = document.getElementById("winners-list");
        // list.innerHTML = innerHTML;
      })
      .catch((err) => {
        console.log("Error while parsing json ", err);
      });
  }).catch((err) => {
    console.log("error", err);
  });
}

fetchesRepository("y1ann1s85");