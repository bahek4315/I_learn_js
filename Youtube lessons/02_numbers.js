// 1. Числа

// const num = -33; // integer
// const float = 42.33; // float
// const pow = 1e3; // pow, умножить на 10 в степени после "e"

// console.log(Math.pow(2, 3) - 1);

// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER); //Number - класс (объект), в браузере после . будут подсказки
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
// console.log('Number.MAX_VALUE', Number.MAX_VALUE);
// console.log('Number.MIN_VALUE', Number.MIN_VALUE);
// console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY); // 1/0
// console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY); // -2/0


// console.log('Number.NaN', Number.NaN);
// console.log(typeof NaN);

// const weird = 2 / undefined;
// console.log(isNaN(weird)); // будет NaN
// console.log(isFinite(42));

// const stringInt = '42';
// const stringFloat = '42.42';

// console.log(stringInt + 2);
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);
// console.log(parseInt(stringInt) + 2);
// console.log(parseInt(stringFloat) + 2); //отметает дробь 
// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.1 + 0.2);
// console.log((0.1 + 0.2).toFixed(1)); // округление до знака после запятой, до ближайшего целого числа, возвращает строку
// console.log(+(0.1 + 0.2).toFixed(1)); //преобразовать в число, можно и так:
// console.log(parseFloat((0.1+0.2).toFixed(1)));


// 2. bigInt. Новый тип данных BigInt, больше MAX_SAFE_INTEGER, работает только с bigInt, десятых нет

// console.log(typeof 900719925474099199999999999); //number
// console.log(typeof 900719925474099199999999999n); //bigInt
// console.log(900719925474099199999999999n - 900719925474099199999999998n); //bigInt
// //console.log(900719925474099199999999999.2n); // error
// console.log(10n - BigInt(4)); //bigInt
// console.log(parseInt(10n) - 4); //number
// console.log(7n / 2n); // будет 2n;


// 3. Math

// console.log(Math.sin(Math.PI / 6));
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25)); //квадратный корень
// console.log(Math.pow(2, 3)); //возведение в степень
// console.log(Math.abs(-42)); //модуль числа
// console.log(Math.max(42, 12, 22, 45)); //какое максимальное
// console.log(Math.min(42, 12, 22, 45)); //какое минимальное
// console.log(Math.floor(4.9)); // округление в меньшую сторону
// console.log(Math.ceil(4.9)); // округление в большую сторону
// console.log(Math.round(4.9)); // округление до ближайшего целого
// console.log(Math.trunc(4.9)); //отбрасывает дроб часть, не работает в IE
// console.log(Math.random()); // рандомное число от 0 до 1


// 4. Рандом

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomBetween(12, 20));







