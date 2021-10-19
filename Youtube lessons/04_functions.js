// 1. Function declaration, мможем обращаться, когда захотим, можно объявить после использования

// function greet (name) {
//     console.log('Привет, ' + name)
// }

// 2. Function expression

// const greet2 = function greet2() { //можно и без greet2 после function, будет анонимная
//     console.log('Привет2, ' + name)
// }

// greet('Лена');
// greet2('Лена');

// console.log(typeof greet); //будет function

// console.dir(greet); //раскрыть функцию, на самом деле функция это объект, команда дает список свойств

// 2. Анонимные функции
// let counter = 0;

// const interval = setInterval(function() { //setTimeout дает задержку, а setInterval - интервал, тут будет счетчик до 5
//     if (counter === 5) {
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000)


// 3. Стрелочные функции

// const arrow = (name) => {
//     console.log('Привет, ' + name)
// }

// const arrow2 = name => console.log('Привет, ' + name); // тож самое
// const pow2 = num => num ** 2;
// arrow('Jopa');
// arrow2('Jopa');
// console.log(pow2(3))


// 4. Параметры по-умолчанию
// const sum = (a, b) => a + b;

// console.log(sum(41, 1));
// console.log(sum(41)); // если не передать b, то будет  NaN, можно задать параметр по-умолчанию

// const sum2 = (a, b = 1) => a + b;
// console.log(sum2(41)); //будет 42

// function sumAll(...all) { //передаем туда сколько угодно параметров, all это массив
//     let result = 0;
//     for (let num of all) {
//         result += num;
//     }
//     return result;
// }

// const res = sumAll(1,2,3,4,5);
// console.log(res);


// 5. Замыкания - из одний ф-ции возвращаем другую ф-цию, внут ф-я не имеет доступа к внешней

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName);
//     }
// }

// const logWithLastName = createMember('Ivan');
// console.log(logWithLastName('Dmitriev')); // будет IvanDmitriev

