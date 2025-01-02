/* Following code is written by borudeyash1*/
/*------------Intruction!------------ 
please try implementing following code one by one.*/
//  alert('RELOADED');
/* 
------Fundaments of JavaScript-------
->Function returns
->Arrays and Objects
->Function returnsmethods:forEach , map, filter, reduce, find,
->findIndex, some, every, sort, reverse,etc.


->async js coding           */ 


// //Function returns:
// //logic: function returns the value.
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(5, 3));

//-------------------ARRAYS-------------------//
// //array : array is a collection of elements.
//Tip -this array is not like array in c/c++/java/python.
// It can store any type of data.
//example:
// const arr =['yash', 1, true, 'harsh', 2, 'smit', 3];    //can use 'var' or 'let' or 'const'
// console.log(arr);          //return statement



////foreach function:
////logic : foreach function is used to iterate over an array.
// const numbers = [1, 2, 3, 4, 5];     //can use 'var' or 'let' or 'const'
// numbers.forEach(function(n) {
//   console.log(n);
// });

////map function:
////logic : map function is used to create new array from an existing array.
// n  = parseInt(prompt('Enter size of array:'));
// const numbers = prompt('Enter array elements (space separated):').split(' ').map(Number);

// const square = numbers.map(function(num){
//   return num**2;
// });
// console.log('Squared Numbers are:', square);


// //filter function:
// //logic : filter function is used to filter an array based on a condition.
////way 1: using anonymous function
// var arr = [1 , 2 , 3 , 4 , 5 , 8 , 6 , 0 , 9 , 7];
// var even = arr.filter(function(num){   //here,function(num) is callback function
//     if(num % 2 === 0)return true;
//     else return false;

// });
// console.log('even numbers are: ',even);

// //way 2: using arrow function and directly returning the value
// const numbers = [1, 2, 3, 4, 5];                      //can use 'var' or 'let' or 'const'
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('Even numbers are:', evenNumbers);


// //reduce function:
// //logic : reduce function is used to reduce an array to a single value.
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log('Sum of numbers is:', sum);  

////find function:
////logic : find function is used to find the first element in an array that matches a condition.
// const numbers = [1, 2, 3, 4, 5];
// const evenNumber = numbers.find(num => num % 2 === 0);
// console.log('First even number is:', evenNumber);

////find function : using anonymous function to find a particular value only
// var arr = [1 , 2 ,3 ,4];
// var ans = arr.find(function(num){
//     if(num === 9)return true;   //test case : num = 9 then it will return false(undefined in console)
//     else return false;
// })              
// console.warn(ans);       //we can use console.warn() , console.log() , console.error() 
//                         // to print the value in console


////indexOf function:
////logic : indexOf function is used to find the index of an element in an array.
// const numbers = ['harsh','yash','smitraj','abhishek'];            //can use 'var' or 'let' or 'const'
// const index = numbers.indexOf('smitraj');
// console.log('smitraj found at index:', index);

////reverse function:
////logic : reverse function is used to reverse the order of elements in an array.
// const numbers = [1, 2, 3, 4, 5];
// const reversed = numbers.reverse();
// console.log('Reversed numbers are:', reversed);

//-------------------OBJECTS-------------------//
// //object : object is a collection of key-value pairs.
////Basically in javascript, functions are called objects.
//EXAMPLE 1:
// const person = {            //can use 'var' or 'let' or 'const'
//         name: 'Harsh',
//         age: 20,
//         city: 'Delhi'
//       };
//   console.log(person);

// //EXAMPLE 2:
// function Person(name, age){}
// console.log(Person);

//Finding size of function/object: 
//size of function is the number of arguments/parameters passed to the function and it takes.
//size of object is the number of properties in the object.
//example:
// function person(name, age, city){}
//   log(person);         //test case : got '3' as length in console by typing 'person.length'


//Synchronous code - line by line coding(simple)

// // Asynchronous js coding:Jo bhi code async nature ka ho ,use side stack mein bhejo 
//aur agle code ko run karo,jo sync nature ka ho
//Jab  sync code chal jaein tab check karo ki async code complete hua ki nahi
//agar complete hua to use main stack mein lao aur usko run karo 



//EXAMPLE 1.
// async function myFunction() {    //async function
//     console.log('Hello ');
//   }
//   myFunction();

////EXAMPLE 2.
// async function myFunction() {    //async function
// await console.log('Hello ');    //await is used to wait for the function to complete
// }
// myFunction();

////example 3.
// async function myFunction() {    //async function
//     var blob = await fetch('https://randomuser.me/api/');   //fetch is used to fetch data from api
//     var ans = await blob.json();    //json is used to convert data to json and awiat is used to wait for the function to complete
//     console.log(ans);           //replace this with console.log(ans.results[0].name) to get the name of the person ans.results[0].name .Refresh the page to get a new person.
    
//   }
// myFunction();

////We are done with the intro of Js.Let's learn about basics of Node.js

//------------------------------Node.js----------------------------------------------//
/*
1.Node.js basics
2.Introduction
3.Instaliing Node.js and name
4.Working with modules
5.File system operations
6.Understanding HTTP modules and API */

/*Node.js:Not a programming language
Node.js is a 'runtime environment' for JavaScript.
It allows you to run JavaScript code outside of a web browser.
It is used to build server-side applications and APIs.
It is built on Chrome's V8 JavaScript engine.
It is open-source and free to use.
*/
/*Because javascript doesn't have functionalities for backend development
Ryan Dahl created Node.js-he designed it for the backend.
Ryan Dehl modified code in Google Chrome  V8 engine (open source)to create Node.js.
He tried to create server in Node.js-I have to code in js(becuase chrome's V8 engine is in c++).
he use js wrapper to create server in Node.js and it is called Node.js.
WORKING:
node.js-is a javascript runtime environment(OUTER LAYER)
js wrappers:  are used to create server in node.js(SECOND LAYER)
v8 engine : is used to create server in node.js(INNER LAYER)
*/