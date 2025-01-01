/* Following code is written by borudeyash1*/
/*------------Intruction!------------ 
please try implementing following code one by one.*/
//  alert('RELOADED');
/* 
Fundaments of JavaScript 
Functions and Objects
Function returns
async js coding
forEach , map, filter, reduce, find,
findIndex, some, every, sort, reverse,etc */ 


// //Function returns:
// //logic: function returns the value.
// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(5, 3));


////foreach function:
////logic : foreach function is used to iterate over an array.
// const numbers = [1, 2, 3, 4, 5];
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
// const numbers = [1, 2, 3, 4, 5];
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
//     if(num === 2)return true;
//     else return false;
// })
// console.log(ans);







// // async js coding:
// async function myFunction() {
//     console.log('Hello ');
//   }
//   myFunction();

