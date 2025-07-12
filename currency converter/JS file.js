/*const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

accountEmail ="hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword,accountCity])  */

//   Conversion Operation 

/*let score = "33"

console.log(typeof score);
Console.log(typeof(score));                       // "33" => 33
                                                  //  "33abc"  => NaN                                                  //
let valueInNumber = Number(score)                 //   true  => 1;    false  => 0
console.log(typeof valueInNumber);
console.log(valueInNumber);            */

/*        Operation   */

//  let value = 3
//  let negValue = -value
//  console.log(negValue);
 
//  console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2/2);
//  console.log(2**2);
//  console.log(2%2);/

//  let str1 = "hello"
//  let str2 = "hitesh"

//  let str3 = str1 + str2 
//  console.log(str3)


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

   //    Data Type

    //  let fullName = " tony star "
 /*   isFallo = true;
    let x = null;
    let x = BigInt("123");
    let y = symbol("Hello");
    console.log(typeof isFallo);
    console.log(x);
    console.log( typeof x);    */

    // -->  Non primitive  -->

    //Array, Objects, Functions
    
    /*const heros = ["shaktiman", "naagraj", "doga"] ;

    let myObj = {
          name: "hitesh",
          age:  22,
    }

    const myFunction = function(){
      console.log("Hello world");
    }                                   */

 //   <--    String  -->

/* const name = "hitesh"
   const repoCount = 50

   console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

   const gameName = new String('hiteshhc')

   console.log(gameName[0]);
   console,log(gameName.__proto__);

   console.log(gameName.length);
   console.log(gameName.toUpperCase());
   console.log(gameName.charAt(2));
   console.log(gameName.indexOf('t'));

   const newString = gameName.substring(0, 4);
   console.log(newString);

   const anotherString = gameName.slice(-8, 4)
   console.log(anotherString); 
   
   const newStringOne = "   hitesh  "
   console.log(newStringOne);
   console.log(newStringOne.trim());

   const url = "htts:/ hitesh.com/hitesh%20choudhary"
   console.log(url.replace('%20', '_'))

   console.loh(url.includes('sunder'))

   console.log(gameName.split('_'));        */

//    <--   math   -->

  /* console.log(Math.floor(4.9));
   console.log(Math.min(4, 3, 6, 8));
   console.log(Math.max(4, 3, 6, 2));

   console.log(Math.random());
   console.log((Math.random()*6) + 1);
   console.log(Math.floor(Math.random()*10) + 1);

    const min = 10
    const max = 20

    console.log(Math.floor(Math.random()  * (max - min +1 )) + min)  */

//  <--  Date  -->

   /*  let myDate = new Date()
     console.log(myDate.toString());
     console.log(myDate.toDateString);
     console.log(myDate.toLocaleString());
     console.log(typeof myDate);

     //let myCreatedDate = new Date (2025, 0, 25)
     //let myCreatedDate = new Date (2025, 0, 25, 6, 3)
     // let myCreatedDate = new Date ("01-14-2025")
      let myCreatedDate = new Date ("2025-01-14")
    // console.log(myCreatedDate.toLocaleString());

     let myTimeStamp = Date.now()

   //   console.log(myTimeStamp);
   //   console.log(myCreatedDate.getTime()); 
   //   console.log(Math.floor(Date.now()/1000));

     let newDate = new Date()
     console.log(newDate);
     console.log(newDate.getMonth() + 1);
     console.log(newDate.getDay());

     newDate.toLocaleDateString('default', {
      weekday: "long",
     })                                                */

   //   ->   Switch Case  , if

   /*const month = 3 

   switch (month) {
      case 1:
         console.log("january");
         break;
      case 2:
         console.log("feb");
         break;
      case 3:
         console.log("march");
         break;
      case 4:
         console.log("april")   
         break;

         default:
            console.log("default case match");
            break;
   }                                                    */
       
   // if         

    /* const isUserloggedIN = true
     const temperature = 41

     if (temperature === 41) {
          console.log("less than 50")
     }else {
          console.log("temperature is greater than 50");
     }

     console.log("Excute");            */

     //  <, >, <=, >=, ==, !=, ===

     /*const score = 200

     if (score > 100) {
      const power = "fly"
      console.log(`User power: ${power}`);
     }                                                  */

     /* const balance = 1000

      if (balance < 500) {
         console.log("less than 500");
      }else if (balance < 750) {
         console.log("less than 750");
      }else if (balance < 900) {
         console.log("less than 950");
      } else {
         console.log("less than 1200");
      }                                                */


     //   -->  Object   Literals

     /* const student = {
        fullName : "Rahul Kumar",
        age: 20,
        cgpa: 8.2,
        isPass: true
     };
    //  student ["age"] = student["age"]  + 1;
     student["name"] = " Rahul Sharma";

    //  console.log(student["age"]);
    //  console.log(student.age);
      console.log(student["name"]);       */

      // jsUser.email = "hitesh@chatgpt.com"
      // Object.freeze(jsUser)
      // jsUser.email = "dilkhush@fh.com"
      // Object.freeze(jsUser);

      /*const obj1 = {1: "a", 2: "b"}
      const obj2 = {3: "a", 4: "b"}

      //const obj3 = Object.assign({}, obj1, obj2)
       const obj3 = {...obj1, ...obj2}
       console.log(obj3);  */
      
      //   {
      //    "name": "hitesh",
      //    "coursename": "js in hindi",
      //    "prise": "free"
      //   }


         //  Practice  question 1

     /*   const product = {
             title: "Ball pen",
             rating: 4,
             offer: 5,
             price: 270,
        } ;
          
        console.log(product);    
        
             Practice Question 2     */

    /*  const profile = {
            username: "dilkhushsingh",
            isFallo: false,
            followers: 145,
            following: 120,
      };

       console.log(profile);
       console.log(typeof profile["username"]);  */

        //  "Operaters"   , Artimetic operater

    /*    let a = 5 ;
          let b = 6 ;
      //   let c = a + b ;
        console.log("a = ",a, " & b = ", b);
        console.log("a + b = ", a + b);
        console.log("a - b = ", a - b);
        console.log("a * b = ", a * b);
        console.log("a / b = ", a / b);
        console.log("a % b = ", a % b);
        console.log("a ** b = ", a ** b);     */
        
        // Unary Operaters
       /*  let a = 5 ;
           let b = 3 ;
          console.log("a = ",a, " & b = ", b);
       // a++;
       //   a--;
       // console.log("a = ", a);

       //console.log("++a = ", ++a);
        console.log("a++ = ", a++);
        console.log("a = ", a);   */

     // Asignment operater

     /*   let a = 5;
          let b = 2;
      //  a += 4;  //  a = a + 4
          a -= 4;  //  a = a - 4
        console.log("a = ", a);   */

      //  Comparison Operaters

       /*  let a = 5;  // number
       //  let b = "5";  // string --> number

         // console.log("5 == 2", a == b); // false
         // console.log("5 != 5", a != b); // true
        
         // console.log("a === b", a === b);  // false
         // console.log("a !== b", a !== b);  //  true

         let b = 3;
         console.log("5>3", a > b);
         console.log("5>=3", a >= b);   */

       //  logical operater

      /*  let a = 6;
        let b = 5;

        //let cond1 = a < b;
        //let cond2 = a === 6;
        //console.log("cond1 && cond2 = ", cond1 && cond2);
        //  console.log("cond1 && cond2 = ", a < b && a ===6);

          console.log("cond1 || cond2 = ", a < b || a === 6);

          console.log(" ! (6<5) = ", !(a < b));     */

         //   Conditional Statements

         /*    let age = 16;

             if(age >= 18) {
                 console.log(" you can vote");
             }

              if (age < 18) {
                   console.log(" you cannot vote");
              }

              // if-else statement
              let mode = "blue";
              let color;

              if (mode === "dark"){
               color = "black";
              }else{
               color = "white";
              }
                console.log(color);

                // odd or even
                 let num = 10;

                 if (num % 2 === 0) {
                    console.log(num, "is even");

                 }else{
                    console.log(num, "is odd");
                 }  */
              
               //   else-if Statement

         /*      let mode = "silvar";
               let color ;

               if (mode === "dark"){
                  color = "black";
               }else if (mode === "blue"){
                  color = "blue";
               }else if (mode === "pink"){
                  color = "pink";
               }else{
                  color = "white";
               }
              
                  console.log(color)

             //    if ( mode === "dark")  console.log(mode);    */

            //  -->  ternary Operators
            
            // let age = 25;
            // let result = age >= 18 ? "adult" : "not adult";
            // console.log(result);

            //    practice set 2 question 1->

          /*  let num = prompt("enter a number");

            if (num % 5 === 0){
               console.log(num, "is a multiple of 5");

            }else {
               console.log(num, "is not a multiple of 5");
            }   */

//   Question 2
/*
let score = 75;
let grade;

if (score >= 90 && score <= 100){
   grade = "A";
}else if (score >= 70 && score <= 89){
   grade = "B";
}else if (score >= 60 && score <=69){
   grade = "C";
}else if (score >= 50 && score <= 59){
   grade = "D";
}else if (score >= 0 && score <= 49){
   grade = "F"
}

console .log("according to your score , your grade was :", grade);     */

//     loops   <-- For loops

/* for(let index = 0; index <= 10; index++){
   const element = index;
   console.log(element);
}   */

 /*  for(let i = 0; i <= 10; i++){
   const element = i;
   if(element == 5 ){
      console.log("5 is best numner");
   }
   console.log(element);
}                                        */

  /* for(let i = 1; i <= 10; i++){
      console.log(`Outer loop value: ${1}`);
      for (let j = 1; j <= 10; j++) {
         console.log(i + '*' + j + '=' + i*j);
      }
   }                                                 */

     /*  for(let i = 1; index <= 10; index++){
         if (index == 5) {
             console.log(`Detected 5`);
             break
        //   continue     
         }
         console.log(`Value of i is ${index}`);
       }                                              */

/*   for (let count = 1; count <= 10; count++){
     console.log("Apna college");
}

// Calculate sum of 1 to 100
let sum = 0;
let n = 100
for (let i = 1; i <= n; i++){
   sum = sum + i;
}
console.log("sum = ", sum);

console.log("loop has ended");         */

/* for ( let i = 1; i <= 5; i++)  {
   console.log("i = ", i);
}

console.log(i);    */

// <-- Infinite loop   -->

// for (let i = 1; i >= 0; i++) {
//    console.log("i = ", i);
// }

//    <-- While loop -->

   /* let index = 0
    while (index <= 0) {
      console.log(`Value of index is ${index}`);
      index = index + 2
    }                                         */

    /*  let myNewArray = ['flash', "batman", "superman"]

      let arr = 0 
      while (arr < myNewArray.length) {
         console.log(`Value is ${myArray[arr]}`);
         arr = arr + 1
      }                                                  /*

/* let i = 1;
while (i <= 10){
   console.log("Dilkhush singh");
   i++;
}                    */

//    <--  do-while loop  -->

/* let = 11

 do{
   console.log(`Score is ${score}`);
   score++
 } while (score <= 10) ;          */
 
/* let i = 1 ;
do {
   console.log("i=", i);
   i++
}while (i <= 5);   */
 
//    <--  For-of loop  -->

//   ["", "", ""]    Array ke ander string
//   [{}, {}, {}]    Array ke ander Object

/*const arr =  [ 1, 2, 3, 4, 5]

for (const nu  of arr) {
   console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
   console.log(`Each char is ${greet}`)
}

// let str = "DilkhushSingh"
// for (let i of str){
//    console.log("i=", i);
// }                                */

//  -->   Maps

/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "France")
map.set('IN', "India")  

//console.log(map);

for (const [key, value] of map){
   console.log(key, ':-', value);
}                                            */

/* let str = "JavaScript";

let size = 0;
for (let i of str) {
   console.log("i=", i);
   size++;
}

console.log("string size = ", size); */

/*const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//const newNums = myNumber.map ( (num) => num + 10)

const newNums = myNumber
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

  console.log(newNums);                       */

 //  -- >   Array.reduse

/* const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce(function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//    return acc + currval
//  }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

  console.log(myTotal);    */

 /* const shoppingCart = [
  {
   itemName: "js course",
   price: 2999
  },
  {
   itemName: "py course",
   price: 5999
  },
  {
   itemName: "data sciencecourse",
   price: 12999
  },
]

 const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

 console.log(priceToPay);   */

//   <-- for-in loop -->

/*const myObject = {
   j: 'javascript',
   cpp: 'c++',
   rb: "ruby",
   swift: "swift by apple"
}

for (const key in myObject ) {
   console.log(myObject[key]);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(programming[key]);
}                                         */


/*let student = {
   name: "Rahul Singh",
   age: 20,
   cgpa : 7.5,
   isPass: true,
};

for (let key in student) {
   console.log("key=", key, "value=", student[key]);
}    */

 //   --> for-Each loop  

 /*const coding = ["js", "rb", "py", "java", "cpp"]

//  coding.forEach(function (val) {
//    console.log(val);
//  })

coding.forEach((item, index, arr) => {
   console.log(item, index, arr);
})                                                 */

 /*  const myCoding = [
      {
         languageName: "javascript",
         languageFileName: "js"
      },
      {
         languageName: "java",
         languageFileName: "java"
      },
      {
         languageName: "python",
         languageFileName: "py"
      },
   ]

   myCoding.forEach ( (item) => {
      console.log(item.languageName);
   })                                               */

    //  <--   Filter function

      // const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      // const newNums = myNums.filter ( (num) => num > 4)
      // console.log(newNums)

    /*  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   // or

      // const newNums = myNums.filter( (num) => {
      //    return num > 4
      // })
      // console.log(newNums);

     const newNums = []     // or

     myNums.forEach( (num) => {
      if (num > 4) {
         newNums.push(num)
      }
     })   

     console.log(newNums)                       */


 //  <--  Practice 3<> Question 1   -->

 /* for (let num = 0; num <= 100; num++){
    if (num%2 ===0){   //  even number
       console.log ("num =", num);
 } 

 }             */

 //    <--  Question 2   -->

/* let gameNum = 25;
let userNum = prompt(" Guess the game number:");

while(userNum != gameNum){
  userNum = prompt(" You entered wrong number.Guess again:");
}

console.log("congratulation , you entered the right number");   */


//    <--  Strings  -->

//let str = "Dilkhush"
//let str2 = "Pushkar"

//console.log(str[3]);

//  <--  Template Literals -->

/* let obj = {
   item: "pen",
   price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//console.log("the cost of", obj.item, "is", obj.price, "rupees");

let specialString = `This is a template literal ${1 + 3 + 5}`;
console.log(specialString);

console.log("Apna\nCollage"); // \n -> next line  */

//  String Methode <-- 

// let str = "ApnaCollage";
// str = str.toUpperCase();
// console.log(str)

// let str = "    Apna College  js        ";
// console.log(str.trim());

// let str = "01234567";
// console.log(str.slice(1,5));

// let str1 = "Apna";
// let str2 = "College";

// let res = str1.concat(str2); // or let res = str1 + str2;
// console.log(res); 

// let str = " hello";
// console.log(str.replace("lo", "p"));

/* let str = "Ilovejs";
str = str.replace("I", "S");
//console.log(str.charAt(5));
console.log(str);   */

//  <--  Prctice 4 <-- Question 1

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName.length;
// console.log(username);


//  <--    Arrays  -->

// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "thor", "hulk","shantiman", "spiderman", "antman" ];
// console.log(heroes);

// <--  looping over an Array  -->

/* let heroes = ["ironman", "thor", "hulk","shantiman", "spiderman", "antman" ];
 // for loop use 
// for (let i = 0; i < heroes.length; i++) {
//    console.log(heroes[i]);
//}

  //   for of use
  for (let hero of heroes) {
   console.log(hero);
  }

  let cities = ["delhi", "pune", "mumbai", "hyderabad"];
  for (let city of cities){
   console.log(city.toUpperCase());
  }                                      */

   //     --> chap 4  Practice 5 Question 1 -->

/*   let marks = [85, 97, 44, 37, 76, 60];

   let sum = 0;

   for (let val of marks) {
      sum += val;
   }

   let avg = sum / marks.length;
   console.log(`avg marks of the class = ${avg}`);    */

  //  <--   Question 2 

//  let items = [250, 645, 300, 900, 50];

//   let i = 0;
//   for (let val of items) {
   
//    let offer = val / 10;
//    items[i] = items[i] - offer;
//    console.log(`value after offer = ${items[i]}`);
//    i++;
//   }

/*   for (let i=0; i<items.length; i++){
     let offer = items[i] / 10;
     items[i] -= offer;
}

console.log(items);  //  dusra tarike se     */

//   Arrays in methods  --> 

// let foodItems = ["potato", "apple", "lichi", "tomato"];

// foodItems.push ("chips", "burger", "paneer");
// console.log(foodItems);

//   <--   pop methode

/*  let foodItems = ["potato", "apple", "lichi", "tomato"];

  console.log(foodItems);
  let deleteItem = foodItems.pop();
 console.log(foodItems);
 console.log("deleted", deletedItem);    */

//       <--   tostring methode 

// let foodItems = ["potato", "apple", "lichi", "tomato"];

// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems);

//    <--   Concat methode 

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes); 

//    <--  unshift methode 

// let marvelHeroes = ["thor", "spiderman", "ironman"];

// marvelHeroes.unshift("antman");
// console.log("marvelHeroes");

// let marvelHeroes = ["thor", "spiderman", "ironman"];

//  let val = marvelHeroes.shift();    //  <-- shift methode
//  console.log("deleted", val);

//   <--  slice methode
// let marvelHeroes = ["thor", "spiderman", "ironman", "dr.syam"];

// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,3));

//      <---   splice metode 

 /* let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 101, 102);

// Add element
//arr.splice(2, 0, 101);

// Delete element 
// arr.splice(3, 1);   

 // Replace element 
 arr.splice(3, 1, 101);      */

//     <--  Practice Question 1

/* let companies = ["bloomberg", "mircosoft", "Uber", "Google", "IBM", "Netflix"]

//companies.shift();
//companies.splice(2, 1, "Ola");
companies.push("Amazon");           */

// -->   Scopes  -->

/*  var c = 300
let a = 200
if (true) {
   let a = 10
   const b = 20
  // var c = 30
  console.log("INNER: ", a);
}

console.log(a);
//console.log(b);
//console.log(c);  */

/* function one(){                     // nested function
   const username = "hitesh"

   function two(){
      const website = "yputube"
      console.log(username);
   }
   two()
}
one()                */

//  <--  Arrow function  -->

/*const user = {
   username: "hitesh",
   prise: 999,

   welcomeMassage: function() {
      console.log(`${this.username} , welcome to website`);
   }
}
 
user.welcomeMassage()
user.username = "sam"
user.welcomeMassage()
//console.log(this)                  */

// const addTwo = (num1, num2)  => {
//    return num1 + num2                              --> arrow fun 
// }
// console.log(addTwo(2,5))

//const addTwo = (num1, num2)  => (num1 + num2)           -->arrow fun

//     -->   LIFE

  /*  (function chai (){
       // named LIFE
       console.log(`DB CONNECTED`);
    }) ();

    ( (name)  => {
       console.log(`DB CONNECTED TWO ${name}`);
    }) ("hitesh")                                      */


//   <---    Function   -->

// function loginUserMassage(username){
//    return `${username} just logged in`
// }
// console.log(loginUserMassage("hitesh"))


// function CalculateCarPrise (...num1) {
//    return num1
// }
// console.log(CalculateCarPrise(200, 400, 500, 5000))

/*const user = {                // -->  add - object + function + array
   username: "hitesh",
   prises: 199
}

function handlerObject(anyobject) {
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handlerObject(user)
handlerObject({
   username: "sam",
   price: 399
})

const myNewArray = [200, 400, 100, 300]

function returnSecondValue(getAllDataArray){
      return getArray[1]
}

//console.log(returnSecondValue(myNewArray)); 
 console.log(returnSecondValue([200, 400, 6000, 2000]));   */

/* function myFunction(msg){
   //console.log("Welcome to Apna Collage");
   //console.log("We are learning js :)");
   console.log(msg);    // parameter  -> input
}
myFunction( "i love js");  // argument  */

// Funtion  -> 2 number, sum

// function sum(x, y) {
//   console.log(x + y);
// }

/* function sum(x, y) {
   s = x + y;
   console.log("before return");
   return s ;
   console.log("after return");
}

let val = sum(3, 4);
console.log(val);         */

//  <--  Arrow  function    -->
/*  <--  sum function 

function sum (a, b){
   return a + b;
}
//  Arrow function sum 
const arrowSum = (a, b) => {
     return a + b;
  // console.log(a + b);
};

// multiplication function 
function mul(a, b) {
   return a * b;
}

const arrowMul = (a, b) => {
   //console.log(a * b);
     return a * b;
}

const printHello = () => {
   console.log("hello");
};                                */

//    -->  Practice Question 1 

/* function countVowels(str) {
   let count = 0;
   for (const char of str){
      if (char === "a" || char === "e"  || char === "i"  || char === "o" || char === "u") {
         count++;
      }

   }
   return count;
}                            */

//     <--  forEach loop in Arrays  -->

// let arr = ["pune", "dilli", "mumbai"];

// arr.forEach((val, idx, arr)  => {
//      console.log(val.toUpperCase(), idx, arr);
// })

//   <-- Practice Question 1

// let num = [5, 6, 67, 25];
// num.forEach((num) => {
//    console.log(num * num);   // num**2
// });

/*let num = [67, 52, 5, 8];   //  dusra type

let calcSquare = (num) => {
   console.log(num * num);
};

num.forEach(calcSquare);   */

//   <--  Some More Array Methods -->
//  <-- map  -->

/* let num = [25, 35, 9];

let newArr = num.map((val)  => {
    return val * 2;
});

console.log(newArr);  */

//   <-- filter methode  -->

/* let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 !==0;
});

console.log(evenArr);      */

//   <--  reduce methode  -->

// let arr = [5, 6, 101, 52, 53];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);

//    <-- practice Question  Question 1 -->

// let marks = [47, 96, 85, 92, 75, 99];

// let toppers = marks.filter((val)  => {
//     return val > 90;
// });

// console.log(toppers);

//   Question 2 -->
/*
let n = prompt("enter a number :");
let arr = [];

for (let i = 1; i <= n; i++) {
   arr [i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
   return res + curr;
});

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial =", factorial);       */

// console.log("hello!");
// alert("hello");

//   <--  DOM Manipulation  -->
//  <--    selecting with id  1 -->

// let heading = document.getElementById("heading");
// console.dir(heading); 

//  <--  selecting with class  2 -->

//  let headings = document.getElementsByClassName("heading-class");
//   console.dir(headings); 
//   console.log(headings);

//  <--  selecting with tag  3 -->

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
   
//  <--  Query Selector  4 -->

// let firstEl = document.querySelector(".myClass"); // 1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass");  // all element
// console.dir(allEl);

// let firstEl = document.querySelector("#myId"); // 1st element
// console.dir(firstEl);

//   <--  DOM properties  -->



// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");


//     <--  Practice Question  -->

/* let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Apna College student";    */

//    <--  Question 2 -->

//let divs = document.querySelectorAll(".box");
//console.log(divs[0]);
/* divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2";        dono code ak hi hain
divs[2].innerText = "new unique value 3";    */
                
/*let idx = 1;
for (div of divs) {
   div.innerText = `new unique value ${idx}`;
   idx++;
}                               */

//  <--  Dom part 2    Attributes     -->

/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);                    */

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p")
// console.log(para.setAttribute("class" , "newClass"));


/*let div = document.querySelector("div");
div.style.backgroundColor = "green";

div.style.fontSize = "26px";

div.innerText = "Hello!";                     */

//   <--  DOM Manipulation  "Insert and delete element"  -->

/*let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);                        */

/* let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();                          */

// <--  let's  practice     Question 1  -->

//    <--   Event Handling  -->

/*let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
   console.log("btn1 was clicked");
   let a = 25;
   a++
   console.log(a); //26
};

let div = document.querySelector("div");
div.onmouseover = () =>{
   console.log("you are inside div");
};                                            */

// <--  Event Object  -->

/*let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
   console.log(evt);
   console.log(evt.type);
   console.log(evt.target);
   console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
div.onmouseover = (evt) =>{
 console.log(evt);
   console.log(evt.type);
   console.log(evt.target);
   console.log(evt.clientX, evt.clientY);
};                                               */

//   <--  Event Listeners  -->

/*let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
   console.log("button1 was clicked");
   console.log(evt);
   console.log(evt.type);
});

btn1.addEventListener("click", () => {
   console.log("button1 was clicked - handler2");
});                                                        */

/*let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
   console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click", (evt) => {
   console.log("button1 was clicked - handler2");
});

const handler3 = () =>{
   console.log("button1 was clicked - handler3");
}

btn1.addEventListener("click", handler3);

   
btn1.addEventListener("click", (evt) => {
   console.log("button1 was clicked - handler4");
});
   
btn1.removeEventListener("click", handler3);         */

//  <-- Practice Question 1 -->

/*let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
   if (currMode === "light")  {
      currMode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
   }else{
      currMode = "light";
       document.querySelector("body").style.backgroundColor = "white";
   }

   console.log(currMode);
});                                            */

//     -->   Project ->1  Rock Paper Scissors   -->

/*let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#user-score");
const comrScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// console.log(choices)

const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const drawGame = () => {
   console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
     msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin) {
      userScore++
      userScorePara.innerText=userScore;
      console.log("you win!");
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
   } else {
      compScore++
      comrScorePara.innerText =compScore;
      console.log("you lose");
       msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;

        msg.style.backgroundColor = "red";
   }
}

const playGame = (userChoice) => {
   console.log("user choice = ", userChoice);
   //Generate computer choice
   const compChoice = genCompChoice();
   console.log("comp choice = ", compChoice);
let userWin = true;
   if(userChoice === compChoice) {
      // Draw game
      drawGame();
   } else {
      
      if(userChoice === "rock") {
         //scissors, paper
         userWin = compChoice === "paper" ? false : true;
      } else if(userChoice === "paper") {
         //rock, scissors
         userWin = compChoice === "scissors" ? false : true;
      } else {
         //rock, paper
         user = compChoice === "rock" ? false : true;
      }
       
   }
   showWinner(userWin, userChoice, compChoice);
   };

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   });
});                                                                */


//     -->  Prototypes in js -->  Object 

/*const student = {
   fullName: "shradha khapra",
   marks: 94.4,
   printMarks: function () {
      console.log("marks = ", this.marks);
   },
};               */

/*const employee = {
   calcTax() {
      console.log("tax rate is 10%");
   },
};

const  karanArjun = {
   salary: 50000,
   calcTax() {
      console.log("tax rate is 20%");
   },
};

karanArjun.__proto__ = employee;  */

//  --> Classes in js  -->

/*class ToyotaCar {
   constructor(brand, mileage) {
      console.log("creating new object");
      this.brand = brand;
      this.mileage = mileage;
   }
   start() {
      console.log("start");
   }
   stop() {
      console.log("stop");
   }

   }

let fortuner = new ToyotaCar("fortuner", 10); //constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);  //constructor
console.log(lexus);                                           */

//  -->  Inheritance  -->

/*class Parent {
   hello() {
     console.log("hello");
   }
}

class Child extends Parent {}

let obj = new Child();   */

/*class Person  {
   sleep () {
      console.log("sleep")
   }
   eat () {
      console.log ("eat")
   }
}

class Engineer extends Person {
   work() {
      console.log("solve prpblem, build something");
   }
}
   
let suryaobj = new Engineer ();   */

//  -->  Super Keyword  -->

/*class Person {
   constructor (name) {
      this.species = "homo sapiens";
      this.name = name;
   }

   eat (){
      console.log("eat");
   }
}

class Engineer extends Person {
   constructor(name) {
      super(name);  // to invoke parent class constructor
   }
   work() {
      super.eat();
      console.log("solve problem, build something");
   }
}

let engObj = new Engineer("Dilkhush");       */

// -->   Practice Question 1,2 -->

/*let DATA = "secret information";

class User {
   constructor(name, email) {
      this.name = name;
      this.email = email;
   }

   viewData(){
      console.log("data = ", DATA);
   }
} 

class Admin extends User{
   constructor(name, email) {
      super(name, email);
   }
   editData() {
      DADA = "some new value";
   }
}

let student1 = new User("Dilkhush","dil@email.com");
let student2 = new User("Surya","surya@email.com");
let teacher = new User("Dean","dean@email.com");

let admin1 = new Admin("admin", "admin@collage.com");  */

//  -->  Error Handling   -->

/*let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
try {
   console.log("a+b = ", a+c);
} catch (err) {
   console.log(err);
}

console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);   */

//  --> Chapter 11  Synchonous  and Asynchonous -->

/*console.log("one");
console.log("two");
console.log("three");       sy*/

/*console.log("one");
console.log("one");

setTimeout(() => {
   console.log("hello");
}  ,4000);  // Timeout

console.log("three");
console.log("four");        Asy*/

//  --> Callbacks -->

/*function sum(a, b) {
   console.log(a + b);
}

function Calculator(a, b, sumCallback) {
   sumCallback(a, b);
}

Calculator(1, 5, sum);             */

/*const hello = () => {
   console.log("hello");
}

setTimeout(hello, 3000);            */

//  --> Callback Hell  -->

// Nesting if else  , loop
/*let age = 19;
if(age>=18) {
   if (age >= 60){
    console.log("seniotr");
} else {
   console.log("middle");
}
} else {
   console.log("child");
}                                */

/*for(let i=0; i<5; i++) {
   let str = "";
   for(let j = 0; j < 5; j++) {
   str = str + j;
   }
      console.log(i,str);
}                             */

/*function getData(dataId, getNextData) {
   //2s
   setTimeout(() => {
      console.log("data", dataId);
      if (getNextData){
         getNextData();
      }
   },  2000);
}      

//  callback hell 

getData(1, () => {
   console.log("getting data2 .....");
   getData(2, () => {
   console.log("getting data3 .....");
      getData(3, () => {
    console.log("getting data4 .....");     
         getData(4);
      });
   });
});                       */

// -->  Promises  -->

/*const promiseOne = new Promise(function(resolve, reject){
   setTimeout(function(){
      console.log('async task is complete');
      resolve()
   
   }, 1000)
})

promiseOne.then(function(){
   console.log("Promise consumed");
})                                     */

 /*  const promisethree = new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve({username: "chai", email: "chai@example.com"})
   
   }, 1000)
})

promisethree.then(function(user){
   console.log("user");
})                                           */

/*const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "hitesh", password: "123"})
      }else {
         reject ('ERROR: Something went wrong')
      }
   }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolve or rejected"))    or */

/* const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "javascript", password: "123"})
      }else {
         reject ('ERROR: js went wrong')
      }
   }, 1000)
});

async function consumePromiseFive() {
   try {
      const response = await promiseFive
      console.log(response);
   } catch (error) {
      console.log(error);
   }
}

consumePromiseFive()                */


/*let promise = new Promise ((resolve, reject) => {       // apna collage
   console.log ("I am a promise");
   resolve("success");
}); */

/*function getData(dataId) {
   return new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
   // reject ("error")  ;
   },  2000);
});
}      

// or Async-await
async function getAllData() {
   console.log("getting data1 .....");
   await getData(1);
   console.log("getting data2 .....");
   await getData(2);
   console.log("getting data3 .....");
   await getData(3);
}                         */

//Promise Chain

/* getData(1).then((res) => {
   console.log(res);
 getData(2).then(() => {
   console.log(res);
 })  
});             Or  */

/*console.log("getting data1 .....");
 getData(1)
 .then((res) => {
   console.log("getting data2 .....");
   return getData(2);
 })
 .then((res) => {
   console.log("getting data3 .....");
   return getData(3);
 })
 .then((res) => {
   console.log(res);
 }) ;                        */
 
 
/*const getPromise = () => {
   return new Promise((resolve, reject) => {
     console.log(" I am a promise")
     resolve("success");
    //reject("network error");
   });
};

let promise = getPromise();
promise.then((res) => {
   console.log("promise fulfilled", res);
});

promise.catch((err) => {
   console.log("rejected", err);
});                                   */

// Promise chain

/*function asyncFunc1 () {
  return new Promise ((resolve, reject) => {
   setTimeout(() => {
      console.log("data1");
      resolve("success");
   }, 4000);
  });
}

function asyncFunc2 () {
  return new Promise ((resolve, reject) => {
   setTimeout(() => {
      console.log("data2");
      resolve("success");
   }, 4000);
  });
}

console.log("fetching data1....");
 asyncFunc1().then((res) => {

console.log("fetching data2....");
asyncFunc2().then((res) => {
      
   });
});    */
  
//  -->  Async-Await    <--

// async function hello () {
//    console.log("hello");
// }

/*function api () {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         console.log("weather data");
         resolve(200);

      } , 2000)
   })
}
   
async function getWeatherData() {
   await api(); // 1st
   await api(); // 2nd
}                              */

//   -->  Fetch API  <--

/*const URL ="https://meowfacts.herokuapp.com/";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// let promise = fetch(URL);
// console.log(promise);

/*const getFacts = async () => {
   console.log("gatting data ....");
   let response = await fetch(URL);
   console.log(response); // JSON format
   let data = await response.json();
   factPara.innerText = data[0].text;
};                          
   or */

/*function getFacts () {
   fetch(URL)
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      console.log(data);
      factPara.innerText = data[0].text;
   });
}

btn.addEventListener("click", getFacts);   */

//    <--   call  -->

/*function Setusername(username) {
   //complex DB calls
   this.username = username
   console.log("called");
} 

function createUser(username, email, password) {
   Setusername.call(this, username)

   this.email = email
   this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);                                                 */

//   <--     Project -2   Currency Converter -->


const dropdowns = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// for (code in countryList) {
//    console.log(code, countryList[code]);
// }

for(let select of dropdowns) {
   for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD"){
         newOption.selected = "selected"

      }else if (select.name === "to" && currCode === "INR"){
         newOption.selected = "selected"
      }
      select.append(newOption);
   }
   select.addEventListener("change",  (evt) => {
      updateFlag(evt.target);
   });

 }

 const updateExchangeRate =async () =>{
   let amount = document.querySelector(".amount input");
   let amtVal = amount.value;
   if (amtVal === "" || amtVal <1) {
      amtVal = 1;
      amount.value = "1";
   }
const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
 let resp= await fetch(url)
  .then(res => res.json())
  .then(data => {
   
      return data
    
  })
let rate=resp[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
   

   let finalAmount = amtVal * rate;
  
   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;  

 };

 const updateFlag = (element)  => {
   let currCode = element.value;
   let countryCode = countryList[currCode];  
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
 };

 btn.addEventListener("click", (evt) => {
   evt.preventDefault();
   updateExchangeRate();
 });

 window.addEventListener("load", () => {
   updateExchangeRate();
 }) ;                                               
  

