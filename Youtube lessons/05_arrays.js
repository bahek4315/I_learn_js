// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes']; // элементы могут быть любые, хоть цифра+строки
// const people = [
//     {name: 'Ivan', budget: 3200},
//     {name: 'Vladilen', budget: 5200},
//     {name: 'Igor', budget: 200},
// ];

// const fib = [1, 1, 2, 3, 5, 8, 13]

// это методы, если делаем сами функцию, то это ф-я, а не метод

// cars.push('Lexus'); //добавление в конец 

// cars.unshift('Honda') // добавление в начало

// cars.shift(); //удаление первого компонента

// const firstItem = cars.shift(); // это первый элемент, тут это мазда
// console.log(firstItem); //Mazda
// console.log(cars); // Mazda теперь нету

// const lastItem = cars.pop(); // это последний элемент, тут это лексус, его потом не будет
// console.log(lastItem);
// console.log(cars);

// console.log(cars.reverse()); //он перевернул
// console.log(cars); //остался перевернутым


//Задача, перевернуть строку:

// const text = 'Привет, я изучаю JavaScript';
// const reverseText = text.split('').reverse().join(''); //делит строку в массив используя делитель в передаваемом методе, так будут все символы, потом переворачиваем, потом соединяем
// console.log(reverseText)

// console.log(cars.indexOf('BMW')); // даст позицию элемента (2), если полное совпадение если нету, то -1
// const index = cars.indexOf('BMW');
// cars[index] = 'Porsche'; //вместо BMW стало Porsche
// console.log(cars);

// const index2 = people.findIndex(function(person) { //находит индекс
//     // console.log(person);//вывод каждого объекта в массиве; по факту тут цикл, он нашел сразу, консоль лог сначала один и вывел
//     return person.budget === 3200;
// });

// const person = people.find(function(person) { //находит элемент
//     console.log(person);//вывод каждого объекта в массиве; по факту тут цикл, он нашел сразу, консоль лог сначала один и вывел
//     return person.budget === 5200;
// });


//перепишем код на одну строку
// const person = people.find(person =>  person.budget === 5200);
// console.log(person);

// let foundPerson = 'Not found'; //ниже код делает то же, что и find выше
// for (let person of people) {
//     console.log(person)
//     if (person.budget === 50200) {
//         foundPerson = person;
//     }
// }
// console.log(foundPerson);

// console.log(cars.includes('Mazda')); //есть ли такой элемент t/f

//Задача: все эл-ты в верхний регистр

// Используем map, он выполняет действия с каждым элементом массива, он возвращает новый массив
// const upperCaseCars = cars.map(car => car.toUpperCase());
// console.log(cars);
// console.log(upperCaseCars);

//Задача: каждый элемент возвести в квадрат
// const pow2Fib = fib.map(element => element **2); или
// const pow2 = num => num ** 2;
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2);
// console.log(pow2Fib);

//Задача - отфильтровать массив, меньше 20, с этим справится filter

// const filteredFib = pow2Fib.filter(num => num > 20);
// console.log(filteredFib)

//reduce - получение значения от всех эл-тов, просуммировать бюджет людей, у которых бюджет больше 2к

// const sumAllBudget = people.reduce((acc, person) => { // первый параметр это функция, которая принимает аккумулятор и элемент, и начальное значение
//     if (person.budget > 2000) {
//         acc += person.budget;
//     }
//     return acc;
// }, 0);

//более правильно будет сначала отфильтровать, а потом выполнятб операции

// const sumAllBudget2 = people
//     .filter(num => num.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget;
//         return acc;
//     }, 0)
// console.log(sumAllBudget2);

//есть еще forEach, но он возвращает не массив, а undefined, он аналог циклу 

