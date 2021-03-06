// OBJECTS

// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства (пары ключ-значение), где:

// Ключи свойств должны быть строками или символами (обычно строками).
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.
// У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде «тип данных Array» или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу данных Object. Они лишь расширяют его различными способами.

// Объекты в JavaScript очень мощные. Здесь мы только немного углубились в действительно огромную тему. Мы будем плотно работать с объектами и узнаем о них больше в следующих частях учебника.



// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};
// console.log(typeof user);

// user.name = "John";
// user.surname = "Smith";
// user.name = "pete";
// delete user.name;

// console.log(user);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

// Mine solution
// let isEmpty = (obj) => {
//     let counter = 0;
//     for (key in obj) {
//         counter++;
//     }
//     if (counter === 0) {
//         return true
//     } else return false
// }

// let user = {}

// console.log(isEmpty(user));
// user.age = 22;
// console.log(isEmpty(user));

//Answer
// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// const calcObjKeys = (obj) => {
//     let total = 0;
//     for (key in obj) {
//         total += obj[key];
//     }

//     return total
// }

// console.log(calcObjKeys(salaries));


// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

// let multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] === Number) {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);