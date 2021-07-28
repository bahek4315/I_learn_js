'use strict';

//task for if + prompt
// let taskQuestion = prompt('Какое "официальное" название JavaScript?', '');
//
// if (taskQuestion == 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаете? “ECMAScript”!');
// }

//if..else
// let compareNumbers = prompt('Type any number', '');
//
// if (compareNumbers > 0) {
//   alert(1);
// } else if (compareNumbers < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let sum = 0;
// while (true) {
//   let value = +prompt("Введите число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Сумма: ' + sum );


// let number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//   case 0:
//     alert('0 is input');
//     break;
//   case 1:
//     alert('1 is input');
//     break;
//   case 2:
//     alert('2 is input');
//     break;
//   case 3:
//     alert('3 is input');
//     break;
//   default:
//     alert('wtf did U type');
// }
//
// function min(a,b) {
//   if (a > b) {
//     alert(b);
//   } else alert(a);
// }
//
// function pow(x,n) {
//   if (n < 1) {
//     alert('Input n more than 1')
//   } else {
//     return x**n
//   };
// }
//
// pow(2,3);


// let ask = (question, yes, no) =>{
//   if (confirm(question)) yes()
//   else no();
// }
//
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились.!"); },
//   function() { alert("Вы отменили выполнение.!"); }
// );

// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,        // под ключом "age" хранится значение 30
//   "likes birds": true
// };
//
// user.isAdmin = true;
// user["likes birds"] = false;
// let n = 0;
// for (let key in user) {
//   alert(key + ': ' + user[key]);
//   console.log(n);
//   n++;
// }

// let emptyObj = {
// }
// let isEmpty = (obj) => {
//   let n = 0;
//   for (let key in obj) {
//     n++;
//   }
//   if (n === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// alert(isEmpty(emptyObj));


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let calcSalaries = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   alert(sum)
// }
//
// calcSalaries(salaries)

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// let multiplyNumeric = (obj) => {
//   for (let key in obj) {
//     if (typeof(obj[key]) == 'number'){
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

  // let a = +prompt('enter 1st num');
  // let b = +prompt('enter 2nd num');
  //
  // alert('sum is: ' + (a+b));

// let styles = ['Jazz', 'Blues'];
// alert(styles);
// styles.push('Rock-n-roll');
// alert(styles);
// styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift('Rap', 'Raggie');
// alert(styles);


// let sumInput = () => {
//   let mass = [];
//   while (true) {
//     let value = prompt('Input num', 0);
//     if (value === '' || value === null || !isFinite(value)) {
//       break
//     }
//     mass.push(+value);
//   }
//
//   let sum = 0;
//
//   for (let i = 0; i < mass.length; i++) {
//     sum += mass[i]
//   }
//   return sum
// }
//
// alert(sumInput());

// const donations = [5, 20, 100, 80, 75];
// let total = donations.reduce((total,donation) => {
//    return total + donation;
// });
//
// alert(total);

// let arr = [1, 2, 2, 3];
// Array.prototype.double = function() {return this.concat(this);}
// console.log(arr.double());
//
// let unique = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!newArray.includes(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray
// }
//
// Array.prototype.unique = function() {
//   let newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (!newArray.includes(this[i])) {
//       newArray.push(this[i]);
//     }
//   }
//   return newArray
// }
// console.log(arr.unique());

// let calcSum = () => {
//   let a = +prompt('Input first num', '');
//   let b = +prompt('Input second num', '');
//
//   return +((a + b).toFixed(5))
// }
//
// alert(calcSum());

// let readNumber = () => {
//   let num;
//   do {
//     num = prompt('enter number', 0)
//   }
//   while (!isFinite(num));
//
//   if (num == '' || num == null) return null;
//
//   return +num
// }
//  alert(`Введено: ${readNumber()}`);
//


// let random = (min, max) => {
//   return (min + Math.random() * (max - min));
// }
//
// alert(random(51, 52));

// let usFirst = (str) => {
//   return str[0].toUpperCase() + str.slice(1)
// }
//
// alert(usFirst('хОПА'))

// let checkSpam = (str) => {
//   let newStr = str.toLowerCase();
//   if ((newStr.indexOf('viagra') != -1) || (newStr.indexOf('xxx') != -1)) return true;
//   return false;
// }
//
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// let truncate = (str, maxlength) => {
//   if (str.length < maxlength) {
//     return str
//   }
//   else {
//     return str.substr(0, maxlength - 1) + '...'
//   }
// }
//
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// alert(truncate("Всем привет!", 20));

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];
//
// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);
//
// console.log(someUsers); // 2

// let camelize = (str) => {
//     let arr = str.split('-');
//     for (let i = 1; i < arr.length; i++) {
//       arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
//     }
//
//     return arr.join('');
// }
//
// console.log(camelize("background-color-asd-fghg-qwqw"));
//
//
// let filterRange = (arr, a, b) => {
//   return arr.filter(item => (item >= a && item <= b))
// }
//
// let arr = [1, 5, 7, 4];
// let filtered = filterRange(arr, 2, 8);
// console.log(filtered);
// console.log(arr);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = [];
// for (let i = 0; i < users.length; i++) {
//   names[i] = users[i].name;
// }
//

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];

let getAverageAge = (users) => {
  return Math.round(users.reduce((sum, current) => sum + current.age, 0) / users.length);
}
console.log(getAverageAge(arr));

// console.log(names);
//
//
// let array = ['Я', 'не', 'люблю', 'JS', 'sdhfb'];
// let array2 = ['Петя', 'Ира', 'молодцы'];
// let arrayNum = [2,4,76,8,3,2,6,8];
// let divideByTwo = (arr) => {
//   return arr.slice(0, (Math.ceil((arr.length) / 2)))
// }
//
// let sumArrays = (arr1, arr2) => {
//   return arr1.concat(arr2);
// }
//
// let even = (arr) => {
//   return arr.filter((number) => number % 2 === 0)
// }
//
// console.log(even(arrayNum));
//
// let string = 'Назвыемсвк напр капан.pdf';
