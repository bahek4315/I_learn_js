"use strict";

// 1. Переменные

// var name = 'Ivan';
// let years = 25;

// console.log(name + ' ' + ', I`m ' + years + ' years old.');

// 2. Мутирование 

// console.log(age);
// const lastName = prompt('Как тебя зовут?', '');
// console.log(lastName);
// alert('Hello, ' + lastName);

// 3. Операторы

// const birthYear = 1995;
// const currentYear = 2021;
// const age = currentYear - birthYear;
// console.log(age);
// let a = 10;
// let b = 5;
// console.log(b * 5);
// console.log(b)''

// 4. Типы данных

// const isProgrammer = true;
// const name = 'Ivan';
// const age = 26;
// let x;

// console.log(typeof isProgrammer); // boolean
// console.log(typeof name);   //string
// console.log(typeof age); //number
// console.log(typeof x); //undefined
// console.log(null); //null

// 5. Приоритет операторов

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// const fullAge = 26;
// const birthYear = 1995;
// const currentYear = 2021;

// const isFullAge = currentYear - birthYear >= fullAge;

// console.log(isFullAge);

// 6. Условные операторы

// const courseStatus = 'pending';
// if (courseStatus === 'ready') {
//     console.log('Курс готов и его можно проходить');
// } else if (courseStatus === 'pending') {
//     console.log('Курс не готов, надо доработать');
// } else {console.log('Все плохо')}

// const isReady = true;

// if (isReady) {
//     console.log('All is done');
// } else {
//     console.log('Need to make it done, boy');
// }
// // same as

// // Тернанрые выражения
//  isReady ? console.log('All is done v2') : console.log('Need to make it done, boy v2');


 // 7. Булевая логика

 // логическое и: &&; при нескольких сравнениях возвращает первое ложное значение, если все истинные, возвращает последнее
 // логическое или: ||; при нескольких сравнениях возвращает первое истинное значение, если все ложные, возвращает последнее
 // логическое не: !; можно использовать дважды (!!..)

 // https://learn.javascript.ru/logical-operators

 // 8. Функции

//  function calculateAge(year) {
//      return 2021 - year;
//  }
 
//  const myAge = calculateAge(1995);
//  console.log(myAge);

//  function logInfoAbout (name, year) {
//     const age = calculateAge(year);
//     age > 0 ? console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age) : console.log('Неверные данные')
//  }

//  logInfoAbout('Vlad', 1972);
//  logInfoAbout('Vlad', 2030);

// 9. Массивы

// const cars = ['Mazda', 'Mercedes', 'Ford', 5];
// console.log(cars);

// const types = new Array ('boolean', 'number', 'string', 'undefined', 'null'); //так можно, но более правильно выше
// console.log(types);
// console.log(cars.length);
// console.log(cars[3]);

// //хоть у нас const, можем менять содержимое массива

// cars[0] = 'Porsche';
// cars[cars.length] = 'BMW';
// console.log(cars);

//  10. Циклы

// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche'];

// for (let i = 0; i < cars.length; i++) {
//     let car = cars[i];
//     console.log(car);
// }
// // или же
// for (let car of cars) {
//     console.log(car);
// }

// 11. Объекты

// const person = {
//     firstName: 'Ivan',
//     lastName: 'Dmitriev',
//     birthYear: 1995,
//     languages: ['ru', 'eng'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet from person')
//     }
// };
// //можно через ... = new Object, но более правильно выше

// console.log(person.firstName);
// console.log(person['lastName']);
// const key = 'languages';
// console.log(person[key]); //person.key нельзя, тк key ключа нет в объекте
// person.hasWife = true;
// console.log(person);
// person.isProgrammer = true;
// console.log(person);


